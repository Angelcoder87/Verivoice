/* ---------- i18n ---------- */
var L = {
  en:{
    tagline:"Verify. Understand. Act. — check it before you share it.",
    howtitle:"How to use",
    howtext:"Send VeriVoice the information exactly as you received it — a voice note, typed text, or a screenshot. It transcribes, extracts the main claims, checks them against evidence, and returns a plain-language verdict with sources and next steps.",
    tabVoice:"Voice",tabText:"Text",tabImg:"Screenshot",
    micIdle:"Tap the mic and speak (Sheng and Kiswahili welcome). Live transcription uses your browser's speech recognition — Chrome works best. You can also paste or edit the transcript below.",
    micRec:"Listening… speak now. Tap again to stop.",
    micNo:"Your browser does not support live speech recognition. Use Chrome, or type / paste the message in the Text tab — everything else works the same.",
    drop:"📷 Tap to choose a screenshot of the message",
    check:"Check this information",
    privacy:"No account needed. Nothing you send is stored.",
    ps1:"Transcription / text extraction",ps2:"Claim extraction",ps3:"Evidence retrieval",ps4:"AI reconciliation",ps5:"Preparing your verdict cards",
    safetyH:"⚠️ This message touches safety",
    safetyP:"Because this message may touch violence, public health, or public safety, VeriVoice routes you to established support pathways before anything else. Kenya Police: 999 or 112. DCI Hotline ya Uhalifu: 0800 722 203. Gender-Based Violence helpline: 1195. NCIC (hate speech and ethnic incitement): 4157.",
    claimTitle:"Main claims found",
    supported:"SUPPORTED",disputed:"DISPUTED",misleading:"MISLEADING",unverified:"UNVERIFIED",
    evidence:"Evidence",unknown:"What we do not know",next:"Next steps you can act on",confidence:"Confidence",
    unvExp:"We could not find enough evidence to check this claim. Hakuna ushahidi wa kutosha. Do not spread it until it is confirmed by a source you trust.",
    noClaims:"No clear claims were found in this message. Try sending the message again in the words you received it.",
    shareH:"Share back to the group",
    copy:"Copy summary card",share:"Share…",
    summaryTitle:"VeriVoice check — summary",
    summaryBy:"Checked with VeriVoice 🔎",
    ex:["Try: Sheng school-fee rumour","Try: county bursary claim","Try: WhatsApp tender notice"],
    ocr:"Reading the image…",
    ocrDone:"Text read from the image. You can correct it below.",
    processing:"Checking…",
    copied:"Copied ✓",
    noClaims2:"No clear claims were found in this message."
  },
  sw:{
    tagline:"Thibitisha. Elewa. Tenda. — hakiki kabla ya kushiriki.",
    howtitle:"Jinsi ya kutumia",
    howtext:"Tuma VeriVoice taarifa kama ulivyopokea — sauti, maandishi, au picha. Inahusisha kuandika sauti, kutoza madai, kukagua ushahidi, na kukupa hukumu kwa lugha rahisi pamoja na vyanzo na hatua zinazofuata.",
    tabVoice:"Sauti",tabText:"Maandishi",tabImg:"Picha",
    micIdle:"Bonyeza kipaza sauti na ongea (Sheng na Kiswahili karibuni). Uhakiki wa sauti hufanya kazi vizuri kwenye Chrome. Unaweza pia kuandika au kuweka maandishi hapa chini.",
    micRec:"Inasikiliza… ongea sasa. Bonyeza tena kuacha.",
    micNo:"Kivinjari chako hakiungi mkono uhakiki wa sauti moja kwa moja. Tumia Chrome, au andika ujumbe kwenye kichupo cha Maandishi.",
    drop:"📷 Bonyeza kuchagua picha ya ujumbe",
    check:"Hakiki taarifa hii",
    privacy:"Hakuna akaunti inayohitajika. Hakuna kitu tunachohifadhi.",
    ps1:"Kuandika sauti / kutoa maandishi",ps2:"Kutoza madai",ps3:"Kutafuta ushahidi",ps4:"Ulinganishaji wa AI",ps5:"Kuandaa kadi za hukumu",
    safetyH:"⚠️ Ujumbe huu unahusu usalama",
    safetyP:"Kwa sababu ujumbe huu unaweza kuhusu vurugu, afya ya umma, au usalama wa umma, VeriVoice inakuongoza kwenye njia za msaada zilizothibitishwa. Polisi: 999 au 112. DCI Hotline ya Uhalifu: 0800 722 203. Msaada wa ukatili wa kijinsia: 1195. Kuripoti uchuki: 4157.",
    claimTitle:"Madai makuu yaliyopatikana",
    supported:"IMEHAKIKIWA",disputed:"IMEKANUSHWA",misleading:"INADANGANYA",unverified:"HAIJATHIBITISHWA",
    evidence:"Ushahidi",unknown:"Tunachokosa kujua",next:"Hatua unazoweza kuchukua",confidence:"Uhakika",
    unvExp:"Hakuna ushahidi wa kutosha wa kukagua dai hili. Usiendelee kusambaza hadi uthibitishwe na chanzo unachokiamini.",
    noClaims:"Hakuna madai makuu yaliyopatikana kwenye ujumbe huu. Jaribu kutuma tena kwa maneno uliyopokea.",
    shareH:"Shiriki kwenye kikundi",
    copy:"Nakili kadi ya muhtasari",share:"Shiriki…",
    summaryTitle:"Ukaguzi wa VeriVoice — muhtasari",
    summaryBy:"Imekaguliwa kwa VeriVoice 🔎",
    ex:["Jaribu: uvumi wa ada za shule (Sheng)","Jaribu: dai la bursary ya kaunti","Jaribu: tangazo la tender la WhatsApp"],
    ocr:"Inasoma picha…",
    ocrDone:"Maandishi yamependwa kutoka picha. Unaweza kuyasahihisha hapa chini.",
    processing:"Inakagua…",
    copied:"Imenakiliwa ✓",
    noClaims2:"Hakuna madai makuu yaliyopatikana."
  },
  sh:{
    tagline:"Hakiki. Elewa. Tenda. — check kabla ya kushare.",
    howtitle:"Namna ya kutumia",
    howtext:"Tuma VeriVoice ujumbe kama ulivyoipokea — sauti, text, ama screenshot. Inatranscribe, inatoa madai, inahakiki ushahidi, na inakupa verdict kwa lugha rahisi pamoja na sources na next steps.",
    tabVoice:"Sauti",tabText:"Text",tabImg:"Picha",
    micIdle:"Bonyeza mic na ongea (Sheng na Kiswahili ziko karibu). Live transcription inatumia speech recognition ya browser — Chrome ni best. Unaweza pia kuandika ama ku-edit transcript hapa chini.",
    micRec:"Inaskiliza… ongea sasa. Bonyeza tena kuisha.",
    micNo:"Browser yako haipati live speech recognition. Tumia Chrome, ama andika ujumbe kwa tab ya Text — kila kitu kingine kinaenda sawa.",
    drop:"📷 Bonyeza kuchangua screenshot ya ujumbe",
    check:"Hakiki hii info",
    privacy:"Hakuna account inayohitajika. Hakuna kitu tunachostore.",
    ps1:"Transcription / ku-extract text",ps2:"Kutoa madai",ps3:"Kutafuta ushahidi",ps4:"AI reconciliation",ps5:"Kuandaa verdict cards",
    safetyH:"⚠️ Ujumbe huu unagusa usalama",
    safetyP:"Kwa sababu ujumbe huu unaweza kuhusu violence, afya ya umma, ama usalama wa umma, VeriVoice inakupa kwanza pathways za msaada zilizothibitishwa. Police: 999 ama 112. DCI Hotline ya Uhalifu: 0800 722 203. GBV helpline: 1195. Kuripoti hate speech: 4157.",
    claimTitle:"Madai makuu tumeyopata",
    supported:"NI TRUE",disputed:"NI CON",misleading:"HALF-TRUTH",unverified:"HAIJAHAKIKIWA",
    evidence:"Ushahidi",unknown:"Tunachokosa kujua",next:"Next steps unazoweza kuchukua",confidence:"Confidence",
    unvExp:"Hakuna ushahidi ya kutosha ya kukagua hii. Usishare hadi imethibitishwa na source unayoiamini.",
    noClaims:"Hakuna madai makuu kwenye ujumbe huu. Jaribu kutuma tena kwa maneno ulivyoipokea.",
    shareH:"Share kwa group",
    copy:"Copy summary card",share:"Share…",
    summaryTitle:"VeriVoice check — summary",
    summaryBy:"Imecheckiwa na VeriVoice 🔎",
    ex:["Jaribu: uvumi wa ada za shule (Sheng)","Jaribu: dai la bursary ya county","Jaribu: tender ya WhatsApp"],
    ocr:"Inasoma picha…",
    ocrDone:"Text imetolewa kwa picha. Unaweza kusahihisha hapa chini.",
    processing:"Inahakiki…",
    copied:"Imecopy ✓",
    noClaims2:"Hakuna madai makuu kwenye ujumbe huu."
  }
};
var lang='en';
function T(k){return L[lang][k];}
function setLang(l){
  lang=l;
  document.getElementById('btnEn').className=l==='en'?'on':'';
  document.getElementById('btnSw').className=l==='sw'?'on':'';
  document.getElementById('btnSh').className=l==='sh'?'on':'';
  document.getElementById('t_tagline').textContent=T('tagline');
  document.getElementById('t_howtitle').textContent=T('howtitle');
  document.getElementById('t_howtext').textContent=T('howtext');
  document.getElementById('t_tabVoice').textContent=T('tabVoice');
  document.getElementById('t_tabText').textContent=T('tabText');
  document.getElementById('t_tabImg').textContent=T('tabImg');
  document.getElementById('t_michint').textContent=rec?T('micRec'):T('micIdle');
  document.getElementById('t_drop').textContent=T('drop');
  document.getElementById('t_checkbtn').textContent=T('check');
  document.getElementById('t_privacy').textContent=T('privacy');
  for(var i=1;i<=5;i++) document.getElementById('t_ps'+i).textContent=T('ps'+i);
  document.getElementById('t_safetyh').textContent=T('safetyH');
  document.getElementById('t_safetyp').textContent=T('safetyP');
  document.getElementById('t_shareh').textContent=T('shareH');
  document.getElementById('t_copy').textContent=T('copy');
  document.getElementById('t_share').textContent=T('share');
  document.getElementById('t_foot').textContent=T('foot');
  for(var j=0;j<3;j++) document.getElementById('ex'+j).textContent=T('ex')[j];
}

/* ---------- tabs & input sync ---------- */
var tab='voice';
function setTab(t){
  tab=t;
  ['Voice','Text','Img'].forEach(function(n){
    document.getElementById('pane'+n).style.display=(n.toLowerCase()===t)?'block':'none';
    document.getElementById('tab'+n).className='tab'+(n.toLowerCase()===t?' on':'');
  });
}
function activeText(){return document.getElementById(tab==='voice'?'voiceText':(tab==='text'?'plainText':'imgText'));}
function syncText(){
  document.getElementById('checkBtn').disabled=activeText().value.trim().length===0;
}

/* ---------- demo examples ---------- */
var EXAMPLES=[
 "Mkuu, skulz za county zimeanza ada mpya kuanzia next term. Watoto wanalazimika kulipia elfu tatu kabla hawajarudi. Nimetuma voice note kwa group tuone kama ni true ama ni con.",
 "I heard the county has set aside KSh 2 billion for bursaries this year and every student in the ward will get KSh 30,000. They said applications close on Friday at the chief's office.",
 "TENDER NOTICE!! County Government invites bids for construction of Gikomba market Phase 2. To apply, send KSh 5,000 registration fee via M-PESA to the procurement officer and forward your documents to this WhatsApp number. Deadline tomorrow."
];
function useExample(i){
  var el=document.getElementById('plainText');
  el.value=EXAMPLES[i];
  setTab('text');
  syncText();
}

/* ---------- voice ---------- */
var rec=null, recognizing=false;
function toggleMic(){
  if(recognizing){try{rec.stop();}catch(e){} return;}
  var SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){alert(T('micNo'));return;}
  rec=new SR();
  rec.lang='sw-KE'; rec.interimResults=true; rec.continuous=true;
  rec.onstart=function(){recognizing=true;document.getElementById('micbtn').className='micbtn rec';document.getElementById('t_michint').textContent=T('micRec');};
  rec.onend=function(){recognizing=false;document.getElementById('micbtn').className='micbtn';document.getElementById('t_michint').textContent=T('micIdle');};
  rec.onresult=function(e){
    var s='';
    for(var i=0;i<e.results.length;i++){s+=e.results[i][0].transcript;}
    document.getElementById('voiceText').value=s; syncText();
  };
  rec.onerror=rec.onend;
  try{rec.start();}catch(e){}
}

/* ---------- image OCR ---------- */
function handleImage(ev){
  var f=ev.target.files[0]; if(!f) return;
  var drop=document.getElementById('drop');
  drop.className='drop hasimg';
  drop.innerHTML='<img src="'+URL.createObjectURL(f)+'" alt="screenshot">';
  var prog=document.getElementById('ocrprogress');
  prog.textContent=T('ocr');
  var s=document.createElement('script');
  s.src='https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
  s.onload=function(){
    Tesseract.recognize(f,'eng').then(function(r){
      var txt=(r.data.text||'').trim();
      prog.textContent=T('ocrDone');
      var box=document.getElementById('imgText');
      box.style.display='block';
      box.value=txt;
      syncText();
    }).catch(function(){prog.textContent='OCR unavailable — type the message in the Text tab.';});
  };
  s.onerror=function(){prog.textContent='OCR could not load — type the message in the Text tab.';};
  document.head.appendChild(s);
}

/* ---------- evidence base (demo scenarios; production: AI reconciliation against live sources) ---------- */
var EVIDENCE=[
 {
  keywords:["ada","school fee","school fees","ada mpya","skulz","shule","term","watoto","lipia","elfu tatu","registration fee","schools","county schools","kabla"],
  anchors:["ada mpya","skulz","shule","elfu tatu","ksh 3,000","return fee","county schools","school fee","school fees","ada"],
  verdict:"disputed", confidence:72,
  swClaim:"Kaunti imeanza ada mpya kwenye shule za kaunti kuanzia muhula ujao; watoto watachapishwa KSh 3,000 kabla ya kurudi.",
  enClaim:"County schools have introduced a new fee starting next term, and children must pay KSh 3,000 before returning.",
  shClaim:"Shule za county zimeanza ada mpya kuanzia next term — watoto wanalipia 3k kabla hawajarudi shule.",
  shUnknown:"Hatuna circular rasmi ambayo voice note inarefer — hakuna doc imecirculate. Kuna wezekana ni ombi la shule moja, lakini hakuna ada mpya ya county mzima iko kwa record.",
  shNext:["Usilipe 'registration' ama 'return fee' yoyote kabla uconfirm na head teacher na ofisi ya elimu ya sub-county.","Ulice sender anaye circular ya kusema — ada mpya halali huja na doc, si voice note pekee.","Report any extortion ya ada kwa Ministry of Education."],
  sources:[
    {name:"Ministry of Education — public school fee guidelines", note:"Public day schools follow national fee guidelines; no county circular announces a KSh 3,000 'return fee'.", url:"https://www.education.go.ke/"},
    {name:"County Education Office", note:"Confirm any fee change directly with the sub-county director of education before paying anything.", url:"https://www.education.go.ke/"}
  ],
  unknownEn:"We do not have the original circular the voice note refers to — no document has circulated. A school-specific request is possible, but no county-wide fee change is on record.",
  unknownSw:"Hatuna waraka rasmi unaotajwa kwa sauti hii. Huwezekani kunaombi la shule fulani, lakini hakuna mabadiliko rasmi ya ada ya kaunti kwenye rekodi.",
  nextEn:["Do not pay any 'registration' or 'return' fee before confirming with the school head and the sub-county education office.","Ask the sender for the written circular — a real fee change comes with a document, not a voice note.","Report fee-related extortion to the Ministry of Education."],
  nextSw:["Usilipe ada yoyote ya 'usajili' kabla ya kuthibitisha na mkuu wa shule na ofisi ya elimu ya kaunti.","Omba mtumaji waraka rasmi — mabadiliko halali ya ada huja na waraka, si sauti pekee.","Ripoti unyonyaji wa ada kwa Wizara ya Elimu."]
 },
 {
  keywords:["bursary","bursaries","scholarship","ksh 2 billion","bilioni mbili","ksh 30,000","elfu thelathini","every student","ward","applications close","chief"],
  anchors:["bursary","bursaries","scholarship","ksh 2 billion","bilioni mbili","ksh 30,000","elfu thelathini"],
  verdict:"misleading", confidence:64,
  enClaim:"The county has set aside KSh 2 billion for bursaries and every student in the ward will get KSh 30,000, with applications closing Friday at the chief's office.",
  shClaim:"County imeweka KSh billion 2 kwa bursary na kila student wa ward atapata 30k — applications zinaisha Friday ofisi ya chief.",
  shUnknown:"Hatupati uthibitisho wa billion 2 wala deadline ya Friday kutoka kwa notice rasmi yoyote. Kiasi kwa student kinatofautiana na ward.",
  shNext:["Confirm window halali ya bursary na kamati ya ward ama ofisi ya MCA — kuapply ni free.","Usilipe mtu yoyote 'arejesti' bursary — application halali ni free kabisa.","Omba reference ya notice rasmi kabla ufuate deadline yoyote."],
  swClaim:"Kaunti imeweka akiba ya KSh bilioni 2 kwa bursary; kila mwanafunzi wa kata atapata KSh 30,000, maombi yafunguki Ijumaa ofisini kwa chief.",
  sources:[
    {name:"County budget estimates (County Assembly records)", note:"The county's bursary fund is real but smaller than claimed, and is disbursed through ward bursary committees with published criteria — not a flat KSh 30,000 for every student.", url:"https://www.parliament.go.ke/"},
    {name:"Ward bursary committee / MCA office", note:"Bursary applications go to the ward committee under a public notice — not at the chief's office and not by a WhatsApp deadline.", url:"https://www.cog.go.ke/"}
  ],
  unknownEn:"We could not verify the KSh 2 billion figure or the Friday deadline against any public notice. Amounts per student vary by need and by ward.",
  unknownSw:"Hatuwezi kuthibitisha kiasi cha KSh bilioni 2 wala mwisho wa Ijumaa dhidi ya tangazo rasmi. Viwango kwa mwanafunzi hutofautiana na kata.",
  nextEn:["Confirm the real bursary window and criteria at your ward bursary committee or MCA's office — applying there is free.","Never pay anyone to 'register' a bursary application; legitimate applications cost nothing.","Ask for the public notice reference before acting on any deadline."],
  nextSw:["Thibitisha kipindi halali cha bursary na kamati ya kata au ofisi ya MCA — maombi halali ni bila malipo.","Usilipe mtu yeyote 'kuandikisha' maombi ya bursary; maombi halali hayana gharama.","Omba namba ya tangazo rasmi kabla ya kufuata mwisho wowote wa muda."]
 },
 {
  keywords:["tender","tender notice","bids","bid","procurement","gikomba","phase 2","mpesa","m-pesa","registration fee","procurement officer","whatsapp","deadline tomorrow","construction","market"],
  anchors:["tender","bids","bid","procurement","gikomba","tender notice"],
  verdict:"disputed", confidence:85,
  enClaim:"A county tender for Gikomba market Phase 2 requires a KSh 5,000 M-PESA 'registration fee' sent to a procurement officer via WhatsApp.",
  shClaim:"Tender ya county ya Gikomba market Phase 2 inataka 'registration fee' ya 5k via M-PESA kwa procurement officer kwa WhatsApp.",
  shUnknown:"Hatupati tender ya Gikomba Phase 2 kwenye portal ya umma inayomatch hii notice. Pamoja na malipo kwa personal number, hii ni pattern ya fraud inayojulikana.",
  shNext:["Check tenders.go.ke kabla utume pesa — kama haipo kwenye portal, si tender halali.","Report number hiyo kwa DCI Hotline ya Uhalifu: 0800 722 203 na waonye group.","Usitume M-PESA kwa mtu binafsi kwa tenda za county — ada halali huenda paybill ya county na receipt."],
  swClaim:"Tender ya kaunti ya soko la Gikomba Awamu ya 2 inahitaji 'ada ya usajili' ya KSh 5,000 kupitia M-PESA kwa ofisa wa ununuzi kwa WhatsApp.",
  sources:[
    {name:"Public Procurement Information Portal (PPIP)", note:"Genuine county tenders are advertised on the public portal with a reference number and official submission channels — never via WhatsApp or personal M-PESA accounts.", url:"https://tenders.go.ke/"},
    {name:"Public Procurement Regulatory Authority (PPRA)", note:"Asking bidders for a 'registration fee' paid to a personal number is not part of any lawful procurement process.", url:"https://www.ppra.go.ke/"}
  ],
  unknownEn:"We could not find any Gikomba Phase 2 tender on the public portal matching this notice. That, plus payment to a personal number, matches a known fraud pattern.",
  unknownSw:"Hatupati tender yoyote ya Gikomba Awamu ya 2 kwenye lango la umma inayolingana. Pamoja na malipo kwa namba binafsi, hii inafanana na ulaghai unaojulikana.",
  nextEn:["Check tenders.go.ke before sending any money — if it is not on the portal, it is not a tender.","Report the number to the DCI Hotline ya Uhalifu: 0800 722 203 and warn the group.","Never send M-PESA to individuals for public tenders; official fees go to county paybill accounts with receipts."],
  nextSw:["Kagua tenders.go.ke kabla ya kutuma pesa — kama haipo kwenye lango, si tender halali.","Ripoti namba hiyo kwa DCI Hotline ya Uhalifu: 0800 722 203 na onya kikundi.","Usitume M-PESA kwa watu binafsi kwa tenda za umma; malipo halali huenda kwa paybill ya kaunti yenye risiti."]
 }
];
var SAFETY_WORDS=["kill","waua","kuua","attack","shambulio","mob justice","burn","choma","violence","vurugu","rape","shoot","riot","vita","election","uchaguzi","vaccine","chanjo","covid","ebola","cholera","kipindupindu","suicide","abuse","ukatili"];

/* ---------- claim extraction + reconciliation ---------- */
function extractClaims(text){
  var parts=text.replace(/\s+/g,' ').split(/(?<=[.!?])\s+/).map(function(s){return s.trim();}).filter(function(s){return s.length>25;});
  if(parts.length===0) parts=[text.trim()];
  return parts.slice(0,4);
}
function reconcile(claim){
  var c=' '+claim.toLowerCase()+' ';
  var best=null,bestScore=0;
  EVIDENCE.forEach(function(e){
    var score=0;
    e.keywords.forEach(function(k){
      if(c.indexOf(k)>=0) score++;
    });
    if(score>bestScore){bestScore=score;best=e;}
  });
  /* Two generic keywords alone (e.g. "registration fee" + "M-PESA") must never
     produce a verdict: require a distinctive anchor term from the matched scenario. */
  if(!best) return null;
  var hasAnchor=(best.anchors||[]).some(function(a){return c.indexOf(a)>=0;});
  return (bestScore>=2&&hasAnchor)?best:null;
}
function claimFor(m){return lang==='sh'?(m.shClaim||m.swClaim):(lang==='sw'?m.swClaim:m.enClaim);}
function unknownFor(m){return lang==='sh'?(m.shUnknown||m.unknownSw):(lang==='sw'?m.unknownSw:m.unknownEn);}
function nextFor(m){return lang==='sh'?(m.shNext||m.nextSw):(lang==='sw'?m.nextSw:m.nextEn);}
function fallbackNext(){
  if(lang==='sw') return ["Tafuta tangazo rasmi au waraka kutoka chanzo rasmi kabla ya kusambaza.","Rudisha ujumbe kwa VeriVoice ukiwa na viunganishi vya habari rasmi kwa ukaguzi zaidi."];
  if(lang==='sh') return ["Tafuta notice rasmi ama doc kutoka official source kabla ushare.","Rudisha ujumbe kwa VeriVoice ukiwa na links za official coverage kwa deep check."];
  return ["Look for an official notice or document from an official source before sharing.","Send the message back to VeriVoice with links to official coverage for a deeper check."];
}
function verdictCard(claim,match){
  var v=match?match.verdict:'unverified';
  var conf=match?match.confidence:30;
  var cls=v;
  var claimText=claim; /* always show the user's actual claim text, never a canned substitute */
  var html='<div class="verdictcard '+cls+'">';
  html+='<div class="claim">'+escapeHtml(claimText)+'</div>';
  html+='<span class="badge '+cls+'">'+T(v)+'</span>';
  html+='<div class="sechead">'+T('confidence')+' · '+conf+'%</div><div class="confbar"><span style="width:'+conf+'%"></span></div>';
  if(match){
    html+='<div class="sechead">'+T('evidence')+'</div>';
    match.sources.forEach(function(s){
      html+='<a class="source" href="'+s.url+'" target="_blank" rel="noopener">'+escapeHtml(s.name)+'<small>'+escapeHtml(s.note)+'</small></a>';
    });
    html+='<div class="sechead">'+T('unknown')+'</div><p class="hint">'+escapeHtml(unknownFor(match))+'</p>';
    html+='<div class="sechead">'+T('next')+'</div><ul class="nextsteps">'+nextFor(match).map(function(n){return '<li>'+escapeHtml(n)+'</li>';}).join('')+'</ul>';
  } else {
    html+='<p class="hint" style="margin-top:10px">'+T('unvExp')+'</p>';
    html+='<div class="sechead">'+T('next')+'</div><ul class="nextsteps">'+fallbackNext().map(function(n){return '<li>'+escapeHtml(n)+'</li>';}).join('')+'</ul>';
  }
  html+='</div>';
  return {html:html, verdict:v, claim:claimText};
}
function escapeHtml(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

/* ---------- run ---------- */
var lastSummary=null;
function runCheck(){
  var text=activeText().value.trim();
  if(!text) return;
  var btn=document.getElementById('checkBtn');
  btn.disabled=true; document.getElementById('t_checkbtn').textContent=T('processing');
  var pipe=document.getElementById('pipeline'); pipe.style.display='block';
  var steps=['ps1','ps2','ps3','ps4','ps5'], i=0;
  var claimed=extractClaims(text);
  function tick(){
    if(i>0){
      document.getElementById(steps[i-1]).className='step done';
      document.getElementById(steps[i-1]).querySelector('.tick').textContent='✓';
    }
    if(i<steps.length){
      document.getElementById(steps[i]).className='step done';
      i++; setTimeout(tick, 420);
    } else { finish(claimed); }
  }
  tick();
}
function finish(claims){
  var low=' '+claims.join(' ').toLowerCase()+' ';
  var unsafe=SAFETY_WORDS.some(function(w){return low.indexOf(w)>=0;});
  if(unsafe){document.getElementById('safety').style.display='block'; window.scrollTo({top:0,behavior:'smooth'});}
  var results=[], seen=[];
  claims.forEach(function(c){
    var m=reconcile(c);
    if(m){ if(seen.indexOf(m)>=0) return; seen.push(m); }
    results.push(verdictCard(c,m));
  });
  var html='<div class="card"><h2>'+T('claimTitle')+'</h2></div>';
  if(claims.length===1 && claims[0].length<30) html='<div class="card"><h2>'+T('noClaims2')+'</h2></div>';
  results.forEach(function(r){html+=r.html;});
  document.getElementById('results').innerHTML=html;
  var lines=[T('summaryTitle'),''];
  results.forEach(function(r,i){
    lines.push((i+1)+'. '+r.claim);
    lines.push('→ '+T(r.verdict));
  });
  lines.push('',T('summaryBy'));
  lastSummary=lines.join('\n');
  document.getElementById('sharebox').textContent=lastSummary;
  document.getElementById('sharebox').style.display='block';
  document.getElementById('sharecard').style.display='block';
  document.getElementById('checkBtn').disabled=false;
  document.getElementById('t_checkbtn').textContent=T('check');
  if(navigator.share) document.getElementById('sharebtn').style.display='block';
}
function copySummary(){
  var done=function(){
    document.getElementById('t_copy').textContent=T('copied');
    setTimeout(function(){document.getElementById('t_copy').textContent=T('copy');},2000);
  };
  if(navigator.clipboard&&navigator.clipboard.writeText&&lastSummary){navigator.clipboard.writeText(lastSummary).then(done,done);}
  else{
    var ta=document.createElement('textarea');ta.value=lastSummary||'';document.body.appendChild(ta);ta.select();
    try{document.execCommand('copy');}catch(e){}
    document.body.removeChild(ta);done();
  }
}
function nativeShare(){
  if(navigator.share&&lastSummary) navigator.share({title:'VeriVoice',text:lastSummary}).catch(function(){});
}
document.getElementById('t_safetyp').textContent=L.en.safetyP;
