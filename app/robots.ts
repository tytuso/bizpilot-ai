import type { MetadataRoute } from "next";

export default function robots():MetadataRoute.Robots{return{rules:{userAgent:"*",allow:"/",disallow:["/api/"]},sitemap:"https://bizpilot-ai.oiotitus333.chatgpt.site/sitemap.xml"}}
