import { NextRequest, NextResponse } from "next/server";
import { getChatGPTUser, isLocalAuthEnabled } from "../../chatgpt-auth";

export async function GET(){
  const user=await getChatGPTUser();
  return NextResponse.json({authenticated:Boolean(user),user,localDevelopment:isLocalAuthEnabled()});
}

export async function POST(request:NextRequest){
  if(!isLocalAuthEnabled()) return NextResponse.json({error:"Local sign-in is disabled in production."},{status:404});
  const body=await request.json().catch(()=>({})) as {username?:unknown;email?:unknown};
  const username=typeof body.username==="string"&&body.username.trim()?body.username.trim().slice(0,80):"Local BizPilot User";
  const email=typeof body.email==="string"&&body.email.includes("@")?body.email.trim().slice(0,160):"local@bizpilot.dev";
  const response=NextResponse.json({authenticated:true,user:{displayName:username,email,fullName:username},localDevelopment:true});
  response.cookies.set("bizpilot-local-auth","1",{httpOnly:true,sameSite:"lax",secure:false,path:"/",maxAge:60*60*12});
  response.cookies.set("bizpilot-local-name",encodeURIComponent(username),{httpOnly:true,sameSite:"lax",secure:false,path:"/",maxAge:60*60*12});
  response.cookies.set("bizpilot-local-email",encodeURIComponent(email),{httpOnly:true,sameSite:"lax",secure:false,path:"/",maxAge:60*60*12});
  return response;
}

export async function DELETE(){
  if(!isLocalAuthEnabled()) return NextResponse.json({error:"Local sign-out is disabled in production."},{status:404});
  const response=NextResponse.json({authenticated:false,user:null,localDevelopment:true});
  response.cookies.set("bizpilot-local-auth","",{httpOnly:true,sameSite:"lax",secure:false,path:"/",maxAge:0});
  response.cookies.set("bizpilot-local-name","",{httpOnly:true,sameSite:"lax",secure:false,path:"/",maxAge:0});
  response.cookies.set("bizpilot-local-email","",{httpOnly:true,sameSite:"lax",secure:false,path:"/",maxAge:0});
  return response;
}
