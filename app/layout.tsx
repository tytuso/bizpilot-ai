import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizpilot-ai.oiotitus333.chatgpt.site"),
  title: "BizPilot AI — AI Business Assistant for Small Businesses",
  description: "Create proposals, marketing content, business plans, AI images, lead strategies and financial insights with one AI business assistant.",
  applicationName: "BizPilot AI",
  other: { "codex-preview": "development" },
  keywords: ["AI business assistant", "AI for small business", "AI proposal generator", "AI marketing assistant", "AI business advisor", "small business AI tools"],
  manifest: "/manifest.webmanifest",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/icon-192.svg" },
  openGraph: { title: "BizPilot AI — Run your business smarter", description: "One intelligent workspace for advice, proposals, marketing, leads, money and daily action.", type: "website", images: ["https://bizpilot-ai.oiotitus333.chatgpt.site/og.png"] },
  twitter: { card: "summary_large_image", title: "BizPilot AI — Run your business smarter", description: "Your mini AI team for practical business growth.", images: ["https://bizpilot-ai.oiotitus333.chatgpt.site/og.png"] },
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en" suppressHydrationWarning><body>{children}<script dangerouslySetInnerHTML={{__html:`if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{}))}`}}/></body></html>}
