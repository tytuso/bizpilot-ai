import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Sparkles } from "lucide-react";
import { articles } from "./articles";

export const metadata: Metadata = {
  title: "Small Business AI Guides & Resources | BizPilot AI Blog",
  description: "Practical guides on AI for small business, proposals, marketing plans, lead generation, profit margins and pricing.",
  alternates: { canonical: "/blog" },
  openGraph: { title:"BizPilot AI Blog — Practical Small Business Guides", description:"Clear, actionable guides for running and growing a small business.", type:"website", url:"/blog" },
};

function Mark(){return <span className="blog-logo-mark"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M17 14h17c10 0 16 5 16 13 0 5-3 9-8 11 7 2 10 6 10 12 0 9-7 14-18 14H17V14Zm10 9v11h7c5 0 8-2 8-6s-3-5-8-5h-7Zm0 19v13h8c6 0 9-2 9-6s-3-7-9-7h-8Z" fill="currentColor"/><path d="m38 19 8-8 8 8M46 11v17" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>}

export default function BlogPage(){return <main className="blog-page"><header className="blog-nav"><div className="page-width"><Link className="blog-brand" href="/"><Mark/><span>BizPilot <b>AI</b></span></Link><nav><Link href="/">Home</Link><Link className="blog-nav-active" href="/blog">Blog</Link><Link className="button button-dark" href="/">Open BizPilot <ArrowRight size={15}/></Link></nav></div></header><section className="blog-hero page-width"><span className="eyebrow"><BookOpen size={14}/> BizPilot Resources</span><h1>Practical ideas for running a smarter business.</h1><p>Clear guides on proposals, marketing, leads, money and using AI responsibly in a small business.</p></section><section className="blog-grid page-width">{articles.map((article,index)=><article className={index===0?"blog-card featured":"blog-card"} key={article.slug}><div className="blog-card-icon"><Sparkles/></div><div><span className="blog-category">{article.category}</span><h2><Link href={`/blog/${article.slug}`}>{article.title}</Link></h2><p>{article.description}</p><div className="blog-card-meta"><span><Clock/> {article.readingTime}</span><Link href={`/blog/${article.slug}`}>Read guide <ArrowRight/></Link></div></div></article>)}</section><section className="blog-cta page-width"><div><span className="eyebrow">Put the ideas to work</span><h2>Turn your business context into a practical next step.</h2><p>Use BizPilot for grounded advice, proposals, campaigns, lead strategies and financial analysis.</p></div><Link className="button button-light" href="/">Open BizPilot <ArrowRight/></Link></section><footer className="blog-footer"><div className="page-width"><Link className="blog-brand" href="/"><Mark/><span>BizPilot <b>AI</b></span></Link><p>Run your business smarter.</p><nav><Link href="/">Home</Link><Link href="/blog">Blog</Link></nav><small>© 2026 BizPilot AI</small></div></footer></main>}
