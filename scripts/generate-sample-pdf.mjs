import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { mkdirSync, writeFileSync } from "node:fs";

const doc = new jsPDF();
doc.setFillColor(22,32,67); doc.rect(0,0,210,297,"F");
doc.setFillColor(91,94,229); doc.rect(0,0,12,297,"F");
doc.setTextColor(183,188,255); doc.setFontSize(11); doc.text("BIZPILOT AI",25,35);
doc.setTextColor(255,255,255); doc.setFontSize(32); doc.text(["BUSINESS","PROPOSAL"],25,70);
doc.setFontSize(14); doc.text("Property Marketing & Tenant Acquisition",25,112);
doc.setFontSize(10); doc.setTextColor(190,198,220); doc.text("Prepared for Nico Heights Apartments",25,140); doc.text("Prepared by Nico Relators",25,150);
doc.setDrawColor(80,92,130); doc.line(25,220,185,220); doc.text("Run your business smarter.",25,235); doc.text("21 August 2026",25,245);

const header=(title,page)=>{doc.setFillColor(22,32,67);doc.rect(0,0,210,18,"F");doc.setTextColor(255,255,255);doc.setFontSize(8);doc.text("BIZPILOT AI",15,11);doc.text(title.toUpperCase(),195,11,{align:"right"});doc.setTextColor(115,122,145);doc.text(String(page).padStart(2,"0"),195,287,{align:"right"})};
doc.addPage(); header("Business Proposal",2); doc.setTextColor(22,32,67); doc.setFontSize(23); doc.text("Executive summary",15,40); doc.setFontSize(11); doc.setTextColor(65,73,94); doc.text(doc.splitTextToSize("Nico Relators will create a focused property marketing and tenant acquisition campaign designed to improve listing visibility, simplify enquiries and secure qualified viewings.",175),15,58);
doc.setFillColor(238,239,255);doc.roundedRect(15,92,180,35,3,3,"F");doc.setTextColor(91,94,229);doc.setFontSize(8);doc.text("PROPOSED OUTCOME",24,106);doc.setTextColor(22,32,67);doc.setFontSize(13);doc.text("More qualified viewings from clearer listings and faster follow-up.",24,117);
doc.setFontSize(16);doc.text("Understanding the need",15,153);doc.setFontSize(10);doc.setTextColor(65,73,94);doc.text(doc.splitTextToSize("The client needs a reliable way to promote available property and reduce time spent handling unqualified enquiries.",175),15,169);
doc.addPage();header("Business Proposal",3);doc.setTextColor(22,32,67);doc.setFontSize(23);doc.text("Scope & deliverables",15,40);
autoTable(doc,{startY:55,head:[["#","Deliverable","Outcome"]],body:[["01","Property positioning and listing copy","Clear market-ready offer"],["02","Facebook, Instagram and WhatsApp content","Consistent campaign presence"],["03","Lead qualification questions","Better-fit tenant enquiries"],["04","Viewing coordination workflow","Faster next steps"],["05","Weekly performance summary","Visible campaign learning"]],headStyles:{fillColor:[91,94,229],textColor:255},alternateRowStyles:{fillColor:[247,248,252]},styles:{cellPadding:6,fontSize:9,lineColor:[226,229,238]},columnStyles:{0:{cellWidth:16},1:{cellWidth:75}}});
doc.setTextColor(22,32,67);doc.setFontSize(17);doc.text("Timeline",15,165);const weeks=[["Week 1","Discovery"],["Week 2","Launch"],["Week 3","Viewings"],["Week 4","Optimize"]];weeks.forEach((w,i)=>{const x=15+i*45;doc.setFillColor(238,239,255);doc.roundedRect(x,178,39,34,3,3,"F");doc.setTextColor(91,94,229);doc.setFontSize(8);doc.text(w[0],x+5,189);doc.setTextColor(22,32,67);doc.setFontSize(10);doc.text(w[1],x+5,201)});
doc.addPage();header("Business Proposal",4);doc.setTextColor(22,32,67);doc.setFontSize(23);doc.text("Investment & next steps",15,40);
autoTable(doc,{startY:58,head:[["Service","Timeline","Investment"]],body:[["Property marketing and tenant acquisition","4 weeks","UGX 1,500,000"]],headStyles:{fillColor:[91,94,229]},styles:{cellPadding:7,fontSize:10},columnStyles:{2:{halign:"right"}}});
doc.setFontSize(15);doc.setTextColor(22,32,67);doc.text("Payment schedule",15,118);doc.setFontSize(10);doc.setTextColor(65,73,94);doc.text("40% to start  |  30% at milestone  |  30% on completion",15,132);
doc.setFillColor(22,32,67);doc.roundedRect(15,160,180,56,4,4,"F");doc.setTextColor(183,188,255);doc.setFontSize(8);doc.text("NEXT STEP",25,177);doc.setTextColor(255,255,255);doc.setFontSize(16);doc.text("Approve the scope and schedule kickoff.",25,193);doc.setFontSize(10);doc.setTextColor(190,198,220);doc.text("Nico Relators  |  Mbale, Uganda",25,205);
mkdirSync("tmp/pdfs",{recursive:true});
writeFileSync("tmp/pdfs/BizPilot-Proposal-Sample.pdf",Buffer.from(doc.output("arraybuffer")));
