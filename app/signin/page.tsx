"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, LoaderCircle, LockKeyhole } from "lucide-react";

const hostedSignIn="/signin-with-chatgpt?return_to=%2F";

function Mark(){return <span className="signin-logo-mark"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M17 14h17c10 0 16 5 16 13 0 5-3 9-8 11 7 2 10 6 10 12 0 9-7 14-18 14H17V14Zm10 9v11h7c5 0 8-2 8-6s-3-5-8-5h-7Zm0 19v13h8c6 0 9-2 9-6s-3-7-9-7h-8Z" fill="currentColor"/><path d="m38 19 8-8 8 8M46 11v17" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>}
function GoogleMark(){return <svg className="google-mark" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.4-.18-2.07H12v3.92h5.38a4.6 4.6 0 0 1-2 3.02v2.54h3.24c1.9-1.75 2.98-4.32 2.98-7.41Z"/><path fill="#34A853" d="M12 22c2.7 0 4.98-.9 6.63-2.36l-3.24-2.54c-.9.6-2.05.96-3.39.96-2.61 0-4.82-1.76-5.61-4.13H3.04v2.62A10 10 0 0 0 12 22Z"/><path fill="#FBBC05" d="M6.39 13.93A6.02 6.02 0 0 1 6.08 12c0-.67.11-1.32.31-1.93V7.45H3.04A10 10 0 0 0 2 12c0 1.61.39 3.14 1.04 4.55l3.35-2.62Z"/><path fill="#EA4335" d="M12 5.94c1.47 0 2.79.51 3.83 1.5l2.87-2.88A9.62 9.62 0 0 0 12 2a10 10 0 0 0-8.96 5.45l3.35 2.62C7.18 7.7 9.39 5.94 12 5.94Z"/></svg>}

export default function SignInPage(){
  const[localDevelopment,setLocalDevelopment]=useState(false);
  const[loading,setLoading]=useState(false);
  const[ready,setReady]=useState(false);
  const[username,setUsername]=useState("");
  const[email,setEmail]=useState("");

  useEffect(()=>{
    fetch("/api/session").then(r=>r.json()).then(data=>{setLocalDevelopment(Boolean(data.localDevelopment));if(data.user)window.location.replace("/")}).finally(()=>setReady(true))
  },[]);

  const continueSignIn=async()=>{
    setLoading(true);
    window.localStorage.setItem("bizpilot-signin-profile",JSON.stringify({username:username.trim(),email:email.trim()}));
    if(!localDevelopment){window.location.assign(hostedSignIn);return}
    const response=await fetch("/api/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username,email})});
    if(response.ok)window.location.assign("/");else setLoading(false)
  };

  return <main className="signin-page"><section className="signin-story"><Link className="signin-brand" href="/"><Mark/><span>BizPilot <b>AI</b></span></Link><div><span className="signin-kicker">YOUR BUSINESS, CONNECTED</span><h1>One secure workspace for smarter business decisions.</h1><p>Plan campaigns, prepare proposals, understand your numbers and move your business forward with practical AI support.</p><ul><li><Check/>Your business context in every tool</li><li><Check/>Grounded outputs ready for review</li><li><Check/>One focused workspace across devices</li></ul></div><small>© 2026 BizPilot AI</small></section><section className="signin-panel"><div className="signin-card"><Link className="signin-back" href="/"><ArrowLeft/> Back to BizPilot</Link><div className="signin-mobile-brand"><Mark/><span>BizPilot <b>AI</b></span></div><span className="signin-lock"><LockKeyhole/></span><h2>Welcome to BizPilot</h2><p>Enter your workspace details, then continue with Google.</p><div className="signin-fields"><label>Username<input autoComplete="username" maxLength={80} onChange={event=>setUsername(event.target.value)} placeholder="Your name or business name" type="text" value={username}/></label><label>Email address<input autoComplete="email" inputMode="email" maxLength={160} onChange={event=>setEmail(event.target.value)} placeholder="you@business.com" type="email" value={email}/></label></div><button className="google-button" disabled={!ready||loading} onClick={continueSignIn}>{loading?<LoaderCircle className="signin-spinner"/>:<GoogleMark/>}<b>{loading?"Connecting…":"Continue with Google"}</b><ArrowRight/></button><p className="signin-note">{localDevelopment?"Local development mode uses these details for your test session.":"Your account is verified securely. BizPilot never receives your Google password."}</p><p className="signin-terms">By continuing, you agree to BizPilot’s <Link href="/">Terms</Link> and <Link href="/">Privacy Policy</Link>.</p></div></section></main>
}
