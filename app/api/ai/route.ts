import { NextRequest, NextResponse } from "next/server";
import { getChatGPTUser } from "../../chatgpt-auth";
import { openAIErrorResponse } from "../openai-error";

const allowedTools = new Set(["advisor","proposal","content","daily-plan","marketing","lead-strategy","lead-qualifier","financial-analysis"]);

const toolInstructions: Record<string,string> = {
  advisor: "Diagnose the business challenge and return diagnosis, mainChallenge, likelyCauses, recommendedActions, quickWins, thirtyDayStrategy, risks, thisWeek, and metricToTrack.",
  proposal: "Create a grounded business proposal using only supplied facts. Return title, executiveSummary, clientNeed, proposedSolution, scope, deliverables, timeline, pricing, paymentStructure, whyUs, terms, nextSteps, emailPitch, whatsappPitch, and followUp.",
  content: "Create a platform-specific content pack. Return headline, mainCaption, shortCaption, whatsappStatus, cta, hashtags, videoHook, reelScript, and alternativeCaption.",
  "daily-plan": "Return a focused daily plan using the business goal. Include focus, five tasks, caption, outreachMessage, offer, and metric.",
  marketing: "Return campaignName, objective, audience, offer, keyMessage, channelStrategy, weeklyPlan, contentIdeas, sampleAds, whatsappStrategy, offlineIdeas, kpis, and budgetAllocation.",
  "lead-strategy": "Return idealCustomerTypes, prospectCharacteristics, whereToFind, searchIdeas, qualificationChecklist, outreachStrategy, firstMessage, followUpMessage, phoneOpening, and whatsappPitch. Do not invent real discovered contacts.",
  "lead-qualifier": "Return estimatedScore, label, opportunity, painPoints, suggestedService, openingMessage, and followUpAngle. Clearly describe the score as a prioritization estimate.",
  "financial-analysis": "Explain what looks healthy, expensive, risky, and worth investigating. Return observations, risks, savingsQuestions, actions, and metric. Never present estimates as audited accounts.",
};

function clean(value: unknown, depth=0): unknown {
  if(depth>5) return undefined;
  if(typeof value === "string") return value.slice(0,5000);
  if(typeof value === "number" || typeof value === "boolean" || value == null) return value;
  if(Array.isArray(value)) return value.slice(0,40).map(v=>clean(v,depth+1));
  if(typeof value === "object") return Object.fromEntries(Object.entries(value as Record<string,unknown>).slice(0,50).map(([k,v])=>[k.slice(0,80),clean(v,depth+1)]));
  return undefined;
}

export async function POST(request:NextRequest){
  try{
    if(!await getChatGPTUser()) return NextResponse.json({error:"Sign in to use BizPilot AI."},{status:401});
    const body=await request.json(); const tool=String(body?.tool||"");
    if(!allowedTools.has(tool)) return NextResponse.json({error:"Unsupported BizPilot tool."},{status:400});
    const key=process.env.OPENAI_API_KEY;
    if(!key) return NextResponse.json({error:"Live AI is not configured yet."},{status:503});
    const payload={tool,business:clean(body.business),input:clean(body.input)};
    const response=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify({model:process.env.OPENAI_TEXT_MODEL||"gpt-5.6-luna",instructions:`You are BizPilot AI, a grounded operating assistant for small businesses. ${toolInstructions[tool]} Never invent achievements, customers, revenue, certifications, contracts, statistics or guaranteed results. For legal, tax or financial decisions recommend professional review when relevant. Return only valid JSON.`,input:JSON.stringify(payload),reasoning:{effort:"none"},text:{format:{type:"json_object"}},max_output_tokens:2200})});
    if(!response.ok){const issue=await openAIErrorResponse(response,"text");return NextResponse.json({error:issue.error},{status:issue.status})}
    const data=await response.json() as {output_text?:string};
    try{return NextResponse.json(JSON.parse(data.output_text||"{}"))}catch{return NextResponse.json({error:"The AI response could not be validated. Please regenerate."},{status:502})}
  }catch{return NextResponse.json({error:"We could not process that request. Check the fields and try again."},{status:400})}
}
