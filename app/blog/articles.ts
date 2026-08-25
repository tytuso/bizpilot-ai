export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  publishedAt: string;
  intro: string;
  sections: ArticleSection[];
};

export const articles: BlogArticle[] = [
  {
    slug: "ai-business-assistant-for-small-businesses",
    title: "How an AI Business Assistant Helps Small Businesses Work Smarter",
    description: "A practical guide to using an AI business assistant for planning, proposals, marketing, customer outreach and daily decisions.",
    category: "AI for Business",
    readingTime: "7 min read",
    publishedAt: "2026-08-21",
    intro: "Small-business owners often handle sales, marketing, administration, customer service and financial decisions at the same time. An AI business assistant can reduce that workload by turning clear business information into useful first drafts, structured plans and daily actions.",
    sections: [
      {heading:"What is an AI business assistant?",paragraphs:["An AI business assistant is a focused workspace that helps an owner complete common business tasks. Instead of starting with a blank page, the owner provides the business offer, target customers, location, tone and current goal. The assistant uses that context when preparing advice, content or documents.","It should support judgment rather than replace it. The owner still verifies prices, promises, figures and legal terms before using the result."]},
      {heading:"Where it saves the most time",paragraphs:["The biggest benefit is faster preparation. A short client brief can become a proposal outline. A campaign goal can become a weekly action plan. A difficult business question can become a list of assumptions to test."],bullets:["Drafting proposals and follow-up messages","Planning social media content","Creating lead-generation approaches","Breaking a monthly goal into daily tasks","Explaining basic revenue, cost and margin figures"]},
      {heading:"How to get useful results",paragraphs:["Good output starts with good context. State the real problem, the desired result, the audience, the available budget and any limits. Avoid asking only for a vague ‘marketing plan.’ Explain what you sell, who buys it and what has already been tried.","Review every output for accuracy and relevance. Remove unsupported claims, adjust the language to sound like your business and choose the actions you can realistically complete."]},
      {heading:"A simple starting workflow",paragraphs:["Begin with one repeated task that currently takes too long. Save your core business profile, generate a first draft, review it and measure whether it improved speed or consistency. Once that workflow works, add another. This creates a practical system without overwhelming the team."]},
    ],
  },
  {
    slug: "how-to-write-a-winning-business-proposal",
    title: "How to Write a Winning Business Proposal: A Practical Structure",
    description: "Learn the essential sections of a clear business proposal, from the client need and solution to scope, pricing, terms and next steps.",
    category: "Proposals",
    readingTime: "8 min read",
    publishedAt: "2026-08-21",
    intro: "A strong proposal makes it easy for a client to understand the problem, the recommended solution, the cost and what happens next. It does not need exaggerated claims or complicated language. It needs clarity, relevance and a credible delivery plan.",
    sections: [
      {heading:"Start with the client’s need",paragraphs:["Open by showing that you understand the client’s situation. Use the information they provided in a call, message or brief. Describe the desired outcome and the obstacle preventing it. Do not invent internal problems or statistics that the client has not confirmed."]},
      {heading:"Present a specific solution",paragraphs:["Explain what you will do and why it addresses the need. Replace broad promises such as ‘improve your business’ with clear activities and outputs."],bullets:["The work included in the engagement","The deliverables the client will receive","The responsibilities of both parties","The proposed timeline and milestones","How progress or completion will be confirmed"]},
      {heading:"Make pricing easy to understand",paragraphs:["State the currency, total investment, taxes if applicable and payment schedule. If the scope may change, explain how additional work will be approved and priced. Clear pricing builds confidence and reduces disputes later.","Avoid guaranteeing revenue or results you cannot control. You can commit to deliverables, service standards and reporting, but market outcomes often depend on factors outside one supplier’s control."]},
      {heading:"Close with a direct next step",paragraphs:["End with one simple action: approve the proposal, schedule a kickoff call or confirm the selected package. Add a validity period when prices or availability may change. Before sending, check names, dates, amounts and contact details carefully."]},
    ],
  },
  {
    slug: "small-business-marketing-plan-guide",
    title: "How to Build a 30-Day Marketing Plan for a Small Business",
    description: "Create a focused 30-day small-business marketing plan with one objective, clear audience, weekly actions, content and measurable KPIs.",
    category: "Marketing",
    readingTime: "7 min read",
    publishedAt: "2026-08-21",
    intro: "A useful marketing plan connects a business goal to weekly activity. It should tell the team who to reach, what to communicate, where to communicate it and how progress will be measured.",
    sections: [
      {heading:"Choose one primary objective",paragraphs:["A 30-day plan works best when it has one main outcome. Examples include qualified enquiries, booked consultations, repeat purchases or registrations. Trying to improve awareness, sales, followers and partnerships at the same time makes priorities unclear."]},
      {heading:"Define the audience and offer",paragraphs:["Describe the people most likely to need the offer now. Include their problem, location, buying concern and preferred communication channel. Then express the offer in one sentence: who it helps, what result it supports and why the next step is easy."],bullets:["Audience problem or desired outcome","Main offer and price range","Proof that can be shared honestly","Primary call to action","Channels the team can maintain consistently"]},
      {heading:"Plan four focused weeks",paragraphs:["Week one can clarify the offer and prepare assets. Week two can educate the audience and answer common objections. Week three can emphasize proof, demonstrations or customer experiences. Week four can follow up with interested prospects and review performance.","The exact sequence should match the buying cycle. A low-cost purchase may move quickly, while a business service may require education, conversation and several follow-ups."]},
      {heading:"Track useful numbers",paragraphs:["Choose a small set of indicators such as qualified enquiries, response rate, booked calls, purchases or cost per lead. Likes and views can support awareness, but they do not always show commercial progress. Review the plan weekly and shift effort toward the messages and channels producing stronger conversations."]},
    ],
  },
  {
    slug: "lead-generation-strategies-for-small-business",
    title: "7 Practical Lead-Generation Strategies for Small Businesses",
    description: "Seven ethical lead-generation strategies small businesses can use to find, qualify and approach better prospects without buying unreliable lists.",
    category: "Sales & Leads",
    readingTime: "8 min read",
    publishedAt: "2026-08-21",
    intro: "Lead generation is not simply collecting names and phone numbers. A useful lead is a person or organization that fits the offer, may have a relevant need and can be approached with a clear reason for the conversation.",
    sections: [
      {heading:"1. Start with an ideal-customer profile",paragraphs:["Define the customer type, location, need, likely budget and buying trigger. This prevents the team from spending time on contacts that were never a strong fit."]},
      {heading:"2–4. Use visible and trusted sources",paragraphs:["Search public business directories, professional networks and relevant community groups. Build referral relationships with complementary businesses. Ask satisfied customers for introductions when it is appropriate."],bullets:["Public directories and map listings","Industry associations and events","Customer and partner referrals","Useful educational content that attracts enquiries"]},
      {heading:"5. Personalize the first message",paragraphs:["A good opening message explains who you are, why the prospect may be relevant and what small next step you are requesting. Avoid pretending to know facts that are not public. Keep the first contact short and respectful."]},
      {heading:"6. Follow up systematically",paragraphs:["Many prospects do not respond to the first message because of timing. Create a simple follow-up schedule and add new value each time: a useful observation, a relevant example or a clearer question. Stop when the prospect declines or requests no further contact."]},
      {heading:"7. Score leads by evidence",paragraphs:["Prioritize leads using visible indicators such as fit, current need, engagement and ability to buy. Treat the score as an estimate, not a fact. Review which lead characteristics actually produce sales and improve the scoring method over time."]},
    ],
  },
  {
    slug: "profit-margin-pricing-guide-small-business",
    title: "Profit Margin and Pricing: A Simple Guide for Small Businesses",
    description: "Understand revenue, expenses, profit margin, markup and break-even thinking before making small-business pricing decisions.",
    category: "Money",
    readingTime: "7 min read",
    publishedAt: "2026-08-21",
    intro: "Sales can increase while cash and profit remain weak. Small-business owners need a simple view of revenue, direct costs, operating expenses and the amount left after those costs.",
    sections: [
      {heading:"Revenue, expenses and profit",paragraphs:["Revenue is the money earned from sales during a period. Expenses are the costs incurred in the same period. Estimated profit is revenue minus expenses. The figures are most useful when they cover the same dates and are supported by complete records."]},
      {heading:"Margin is different from markup",paragraphs:["Profit margin measures profit as a percentage of the selling price or revenue. Markup measures the amount added to cost as a percentage of cost. Confusing the two can produce a selling price that is lower than intended.","For example, a product costing 80 and selling for 100 has a markup of 25 percent on cost, but a gross margin of 20 percent on sales. The correct measure depends on the decision being made."]},
      {heading:"Look beyond one percentage",paragraphs:["A margin figure does not show whether customers will accept the price or whether the business has enough cash to pay upcoming obligations. Review volume, payment timing, waste, discounts, taxes and fixed expenses alongside the percentage."],bullets:["Check that all relevant costs are included","Separate one-time costs from recurring costs","Review products or services individually","Test how discounts affect profit","Compare expected cash dates with payment dates"]},
      {heading:"Use estimates responsibly",paragraphs:["A calculator is useful for exploring scenarios, but it does not replace accurate bookkeeping or professional accounting and tax advice. Verify important decisions with complete records and a qualified professional when necessary."]},
    ],
  },
];

export function getArticle(slug:string){return articles.find(article=>article.slug===slug)}
