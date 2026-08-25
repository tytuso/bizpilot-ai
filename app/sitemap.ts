import type { MetadataRoute } from "next";
import { articles } from "./blog/articles";

const origin="https://bizpilot-ai.oiotitus333.chatgpt.site";

export default function sitemap():MetadataRoute.Sitemap{return[
  {url:origin,lastModified:new Date("2026-08-21"),changeFrequency:"weekly",priority:1},
  {url:`${origin}/blog`,lastModified:new Date("2026-08-21"),changeFrequency:"weekly",priority:.8},
  ...articles.map(article=>({url:`${origin}/blog/${article.slug}`,lastModified:new Date(article.publishedAt),changeFrequency:"monthly" as const,priority:.7})),
]}
