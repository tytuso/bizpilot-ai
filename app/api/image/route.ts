import { NextRequest, NextResponse } from "next/server";
import { getChatGPTUser } from "../../chatgpt-auth";
import { openAIErrorResponse } from "../openai-error";

export async function POST(request:NextRequest){
  try{
    if(!await getChatGPTUser()) return NextResponse.json({error:"Sign in to use BizPilot AI."},{status:401});
    const body=await request.json();
    const key=process.env.OPENAI_API_KEY;
    if(!key) return NextResponse.json({error:"Live image generation is not configured yet."},{status:503});
    const prompt=String(body?.prompt||"").slice(0,3000);
    if(prompt.length<10) return NextResponse.json({error:"Please provide a clearer creative brief."},{status:400});
    const response=await fetch("https://api.openai.com/v1/images/generations",{method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify({model:process.env.OPENAI_IMAGE_MODEL||"gpt-image-1-mini",prompt:`Create a premium small-business advertisement. ${prompt}. No invented logos, claims, phone numbers or prices beyond those explicitly provided. Keep visible typography minimal and accurate.`,size:body?.size||"1024x1024",quality:"low",output_format:"png"})});
    if(!response.ok){const issue=await openAIErrorResponse(response,"image");return NextResponse.json({error:issue.error},{status:issue.status})}
    const data=await response.json() as {data?:Array<{b64_json?:string;url?:string}>};
    const image=data.data?.[0];
    return NextResponse.json({image:image?.b64_json?`data:image/png;base64,${image.b64_json}`:image?.url});
  }catch{return NextResponse.json({error:"We could not process that image request."},{status:400})}
}
