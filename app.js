/* VeriVoice — fully static proof of concept. No backend, accounts, or data storage. */
const LANGS = ["en", "sw", "sh"];
let currentLang = "en";
let activeTab = "voice";
let recognition = null;
let recognizing = false;

const UI = {
  en: {
    tagline:"check it before you share it.", heroTitle:"Check it before you share it.",
    heroText:"Send information exactly as you received it — a voice note, typed text, or screenshot. VeriVoice checks the claim and gives you an honest verdict, evidence, and practical next steps.",
    howTitle:"How to use", howText:"Keep the message exactly as received. Choose Voice, Text, or Screenshot, then tap “Check this information.”",
    tabVoice:"🎙 Voice", tabText:"⌨ Text", tabScreenshot:"🖼 Screenshot", startListening:"Start live transcription",
    stopListening:"Stop listening", voiceHelp:"Works best in Chrome. Your browser’s speech recognition turns your voice into text in this browser.",
    voicePlaceholder:"Your live transcription will appear here…", textLabel:"Information to check",
    textPlaceholder:"Paste or type the message exactly as you received it.", uploadTitle:"Choose a screenshot",
    uploadText:"The image is downscaled and OCR runs in your browser.", tryTitle:"Try:",
    demo1:"School-fee rumour", demo2:"County bursary", demo3:"Fake tender", demo4:"Election date", demo5:"Fake voter SMS",
    checkBtn:"Check this information", checkingTitle:"Checking the message",
    progress:["Transcription/text extraction","Claim extraction","Evidence retrieval","AI reconciliation","Preparing your verdict cards"],
    safetyTitle:"This message touches safety",
    safetyIntro:"If this concerns an immediate danger, use the relevant Kenyan emergency or support channel:",
    verdicts:{SUPPORTED:"SUPPORTED",DISPUTED:"DISPUTED",MISLEADING:"MISLEADING",UNVERIFIED:"UNVERIFIED"},
    evidenceTitle:"Evidence", unknownTitle:"What we do not know", nextTitle:"Next steps you can act on",
    sourcesTitle:"Sources", shareTitle:"Share back to the group", checked:"Checked with VeriVoice 🔎",
    copy:"Copy summary", copied:"Copied!", noInput:"Add or record some information first.",
    noClaims:"I could not extract a clear claim from this message. Try sending the original wording with more detail.",
    speechUnsupported:"Live speech transcription is not supported by this browser. Try Chrome, or switch to Text.",
    ocrWorking:"Reading the screenshot in your browser…", ocrDone:"Screenshot text extracted.",
    ocrFail:"I could not read that image. Try a clearer screenshot or use Text.",
    safety:{police:"Kenya Police: 999 / 112", dci:"DCI Hotline ya Uhalifu: 0800 722 203", gbv:"GBV helpline: 1195", ncic:"NCIC: 4157"},
    footer:"VeriVoice is an assistant, never an oracle. Verdicts are evidence summaries with confidence levels — when evidence is thin, it says so. This proof of concept runs fully in your browser with a demo evidence base covering the demo scenarios; the production design uses AI reconciliation against live, named sources. No data is retained."
  },
  sw: {
    tagline:"hakiki kabla hujasambaza.", heroTitle:"Hakiki kabla hujasambaza.",
    heroText:"Tuma taarifa kama ulivyoipokea — ujumbe wa sauti, maandishi, au picha ya skrini. VeriVoice hukagua dai na kukupa uamuzi wa uaminifu, ushahidi, na hatua za kuchukua.",
    howTitle:"Jinsi ya kutumia", howText:"Weka ujumbe kama ulivyoipokea. Chagua Sauti, Maandishi, au Picha ya skrini, kisha bonyeza “Hakiki taarifa hii.”",
    tabVoice:"🎙 Sauti", tabText:"⌨ Maandishi", tabScreenshot:"🖼 Picha ya skrini", startListening:"Anza unukuzi wa moja kwa moja",
    stopListening:"Acha kusikiliza", voiceHelp:"Hufanya kazi vizuri zaidi kwenye Chrome. Utambuzi wa sauti wa kivinjari hubadilisha sauti kuwa maandishi ndani ya kivinjari.",
    voicePlaceholder:"Unukuzi wako wa moja kwa moja utaonekana hapa…", textLabel:"Taarifa ya kuhakiki",
    textPlaceholder:"Bandika au andika ujumbe kama ulivyoipokea.", uploadTitle:"Chagua picha ya skrini",
    uploadText:"Picha hupunguzwa ukubwa na OCR hufanywa ndani ya kivinjari.", tryTitle:"Jaribu:",
    demo1:"Uvumi wa ada ya shule", demo2:"Dai la bursary ya kaunti", demo3:"Tangazo bandia la zabuni", demo4:"Tarehe ya uchaguzi", demo5:"SMS bandia ya usajili wa mpiga kura",
    checkBtn:"Hakiki taarifa hii", checkingTitle:"Tunahakiki ujumbe",
    progress:["Unukuzi/uchanganuzi wa maandishi","Uchukuaji wa madai","Utafutaji wa ushahidi","Ulinganishaji wa AI","Kuandaa kadi zako za uamuzi"],
    safetyTitle:"Ujumbe huu unahusu usalama", safetyIntro:"Ikiwa kuna hatari ya haraka, tumia kituo husika cha dharura au msaada nchini Kenya:",
    verdicts:{SUPPORTED:"IMEHAKIKIWA",DISPUTED:"IMEKANUSHWA",MISLEADING:"INAPOTOSHA",UNVERIFIED:"HAIJATHIBITISHWA"},
    evidenceTitle:"Ushahidi", unknownTitle:"Tusichokijua", nextTitle:"Hatua unazoweza kuchukua",
    sourcesTitle:"Vyanzo", shareTitle:"Shiriki tena kwenye kikundi", checked:"Imehakikiwa na VeriVoice 🔎",
    copy:"Nakili muhtasari", copied:"Imenakiliwa!", noInput:"Ongeza au rekodi taarifa kwanza.",
    noClaims:"Sikuweza kutoa dai lililo wazi kutoka kwenye ujumbe huu. Tuma maneno ya awali yenye maelezo zaidi.",
    speechUnsupported:"Unukuzi wa sauti hauhimiliwi na kivinjari hiki. Jaribu Chrome, au tumia Maandishi.",
    ocrWorking:"Tunasoma picha ya skrini ndani ya kivinjari…", ocrDone:"Maandishi ya picha yametolewa.",
    ocrFail:"Sikuweza kusoma picha hiyo. Jaribu picha iliyo wazi zaidi au tumia Maandishi.",
    safety:{police:"Polisi wa Kenya: 999 / 112", dci:"Nambari ya DCI ya Uhalifu: 0800 722 203", gbv:"Nambari ya GBV: 1195", ncic:"NCIC: 4157"},
    footer:"VeriVoice ni msaidizi, si mwamuzi wa mwisho. Maamuzi haya ni muhtasari wa ushahidi wenye viwango vya uaminifu — ushahidi unapokuwa mdogo, tunasema hivyo. Toleo hili la majaribio linafanya kazi ndani ya kivinjari kwa hifadhidata ya ushahidi ya maonyesho haya; toleo la uzalishaji litatumia ulinganishaji wa AI dhidi ya vyanzo hai vilivyotajwa. Hakuna data inayohifadhiwa."
  },
  sh: {
    tagline:"hakikisha kabla u-share.", heroTitle:"Hakikisha kabla u-share.",
    heroText:"Tuma info vile uliipata — voice note, text, ama screenshot. VeriVoice hucheck claim na kukupea verdict ya ukweli, evidence, na next steps.",
    howTitle:"Jinsi ya kutumia", howText:"Usibadilishe message. Chagua Voice, Text, ama Screenshot, then bonyeza “Check this information.”",
    tabVoice:"🎙 Voice", tabText:"⌨ Text", tabScreenshot:"🖼 Screenshot", startListening:"Anza live transcription",
    stopListening:"Acha kuskiza", voiceHelp:"Inawork poa zaidi kwa Chrome. Speech recognition ya browser inaturn voice yako kuwa text hapa.",
    voicePlaceholder:"Live transcription yako itaonekana hapa…", textLabel:"Info ya kucheck",
    textPlaceholder:"Paste ama type message vile uliipata.", uploadTitle:"Chagua screenshot",
    uploadText:"Image inapunguzwa size na OCR inawork ndani ya browser.", tryTitle:"Jaribu:",
    demo1:"Uvumi wa school fee", demo2:"County bursary", demo3:"Fake tender", demo4:"Election date", demo5:"Fake voter SMS",
    checkBtn:"Check hii information", checkingTitle:"Tunacheki message",
    progress:["Kutranscribe/ku-extract text","Ku-extract claims","Kusearch evidence","AI reconciliation","Kuandaa verdict cards"],
    safetyTitle:"Hii message inagusa safety", safetyIntro:"Kama kuna danger ya haraka, tumia channel ya emergency ama support inayofaa Kenya:",
    verdicts:{SUPPORTED:"NI TRUE",DISPUTED:"NI CON",MISLEADING:"HALF-TRUTH",UNVERIFIED:"HAIJAHAKIKIWA"},
    evidenceTitle:"Evidence", unknownTitle:"What hatujui", nextTitle:"Next steps unaweza kuchukua",
    sourcesTitle:"Sources", shareTitle:"Share back kwa group", checked:"Checked with VeriVoice 🔎",
    copy:"Copy summary", copied:"Copied!", noInput:"Weka ama record info kwanza.",
    noClaims:"Sijaweza kutoa claim iliyo clear kwa hii message. Tuma wording ya original na details zaidi.",
    speechUnsupported:"Live speech transcription haisupportwi na browser hii. Jaribu Chrome, ama switch kwa Text.",
    ocrWorking:"Tunasoma screenshot ndani ya browser…", ocrDone:"Text ya screenshot imetolewa.",
    ocrFail:"Sikuweza kusoma hiyo image. Jaribu screenshot clearer ama tumia Text.",
    safety:{police:"Kenya Police: 999 / 112", dci:"DCI Hotline ya Uhalifu: 0800 722 203", gbv:"GBV helpline: 1195", ncic:"NCIC: 4157"},
    footer:"VeriVoice ni assistant, si oracle. Verdicts ni evidence summaries zenye confidence levels — evidence ikiwa thin, tunasema hivyo. Hii proof of concept inawork fully kwa browser na demo evidence base ya hizi scenarios; production design itatumia AI reconciliation na live, named sources. Hakuna data inaretained."
  }
};

/* Use exactly the supplied demo evidence data; translations below only localize presentation. */
const EVIDENCE = [
  {
    id:"school-fee", verdict:"DISPUTED", confidence:72,
    keywords:["ada","school fee","ada mpya","skulz","shule","term","watoto","elfu tatu","registration fee","county schools"],
    anchors:["ada mpya","skulz","shule","elfu tatu","school fee"],
    sources:{
      en:[["Ministry of Education fee guidelines","No county circular announces a KSh 3,000 “return fee”."],["County Education Office","Confirm with the sub-county director before paying."]],
      sw:[["Mwongozo wa ada wa Wizara ya Elimu","Hakuna waraka wa kaunti unaotangaza “ada ya kurudi” ya KSh 3,000."],["Ofisi ya Elimu ya Kaunti","Thibitisha na mkurugenzi wa elimu wa kaunti ndogo kabla ya kulipa."]],
      sh:[["Ministry of Education fee guidelines","Hakuna county circular imetangaza “return fee” ya KSh 3,000."],["County Education Office","Confirm na sub-county director kabla ulipie."]]
    },
    unknown:{
      en:"No original circular has circulated.",
      sw:"Hakuna waraka wa awali uliosambazwa.",
      sh:"Hakuna original circular imecirculate."
    },
    next:{
      en:["Do not pay before confirming with the school head and sub-county office.","Ask the sender for the written circular.","Report fee extortion."],
      sw:["Usilipe kabla ya kuthibitisha na mkuu wa shule na ofisi ya kaunti ndogo.","Mwombe mtumaji akupatie waraka huo kwa maandishi.","Ripoti unyang’anyi wa ada."],
      sh:["Usilipe before uconfirm na mkuu wa shule na sub-county office.","Omba sender akupe circular kwa maandishi.","Report fee extortion."]
    }
  },
  {
    id:"bursary", verdict:"MISLEADING", confidence:64,
    keywords:["bursary","ksh 2 billion","ksh 30,000"],
    anchors:["bursary","ksh 2 billion","ksh 30,000"],
    sources:{
      en:[["County budget estimates","The fund is real but smaller, disbursed via ward committees, not a flat KSh 30,000 for every student."],["Ward bursary committee","Applications go through the MCA office under a public notice, not the chief’s office."]],
      sw:[["Makadirio ya bajeti ya kaunti","Mfuko upo lakini ni mdogo zaidi; hutolewa kupitia kamati za wadi, si KSh 30,000 kwa kila mwanafunzi."],["Kamati ya bursary ya wadi","Maombi hupitia ofisi ya MCA chini ya tangazo la umma, si ofisi ya chifu."]],
      sh:[["County budget estimates","Bursary iko but fund ni smaller; hutolewa kupitia ward committees, si flat KSh 30,000 kwa kila student."],["Ward bursary committee","Applications hupitia MCA office chini ya public notice, si chief’s office."]]
    },
    unknown:{
      en:"The exact current ward allocation and application dates are not established by this demo evidence base.",
      sw:"Kiasi halisi cha sasa cha wadi na tarehe za maombi hazijawekwa wazi na hifadhidata hii ya maonyesho.",
      sh:"Exact current ward allocation na application dates hazijathibitishwa na demo evidence base."
    },
    next:{
      en:["Confirm the real window at the ward committee — applying is free.","Never pay to “register” a bursary application."],
      sw:["Thibitisha muda halisi wa maombi katika kamati ya wadi — maombi ni bure.","Usilipe kamwe ili “kusajili” ombi la bursary."],
      sh:["Confirm window ya kweli kwa ward committee — applying ni free.","Usilipe pesa ya “register” bursary application."]
    }
  },
  {
    id:"tender", verdict:"DISPUTED", confidence:85,
    keywords:["tender","bids","procurement","gikomba"],
    anchors:["tender","bids","procurement","gikomba"],
    sources:{
      en:[["Public Procurement Information Portal","Real tenders are on tenders.go.ke with reference numbers, never via WhatsApp or personal M-PESA."],["PPRA","A “registration fee” to a personal number is not part of any lawful process."]],
      sw:[["Public Procurement Information Portal","Zabuni halali ziko kwenye tenders.go.ke zikiwa na nambari za kumbukumbu, si kupitia WhatsApp au M-PESA ya mtu binafsi."],["PPRA","“Ada ya usajili” kwa nambari ya mtu binafsi si sehemu ya mchakato halali."]],
      sh:[["Public Procurement Information Portal","Real tenders ziko tenders.go.ke na reference numbers, si WhatsApp ama personal M-PESA."],["PPRA","“Registration fee” kwa personal number si part ya lawful process."]]
    },
    unknown:{
      en:"This evidence base does not verify whether any specific Gikomba tender currently exists.",
      sw:"Hifadhidata hii haithibitishi kama zabuni maalum ya Gikomba ipo kwa sasa.",
      sh:"Demo evidence base hai-confirm kama specific Gikomba tender iko sai."
    },
    next:{
      en:["Check tenders.go.ke first.","Report the number to the DCI hotline."],
      sw:["Angalia tenders.go.ke kwanza.","Ripoti nambari hiyo kwa nambari ya DCI."],
      sh:["Check tenders.go.ke kwanza.","Report number hiyo kwa DCI hotline."]
    }
  },
  {
    id:"election-date", verdict:"SUPPORTED", confidence:88,
    keywords:["election","second tuesday","2027"],
    anchors:["election","second tuesday","2027"],
    sources:{
      en:[["Constitution of Kenya Article 136(1)","Elections are held the second Tuesday of August every fifth year — the next one is 10 August 2027."],["IEBC","Date changes come via gazette notice, never forwarded messages."]],
      sw:[["Katiba ya Kenya Ibara ya 136(1)","Uchaguzi hufanyika Jumanne ya pili ya Agosti kila baada ya miaka mitano — unaofuata ni 10 Agosti 2027."],["IEBC","Mabadiliko ya tarehe hutolewa kupitia tangazo la gazeti rasmi, si ujumbe uliotumwa mbele."]],
      sh:[["Constitution of Kenya Article 136(1)","Election huwa second Tuesday ya August kila five years — next ni 10 August 2027."],["IEBC","Date change lazima itoke kwa gazette notice, si forwarded messages."]]
    },
    unknown:{
      en:"A future legal or gazetted change could alter the date; this demo relies on the cited constitutional rule and current evidence.",
      sw:"Mabadiliko ya kisheria au tangazo rasmi la baadaye linaweza kubadilisha tarehe; demo hii inategemea kanuni ya Katiba iliyotajwa na ushahidi wa sasa.",
      sh:"Future legal ama gazette change inaweza change date; demo hii inadepend na constitutional rule na current evidence."
    },
    next:{
      en:["Confirm registration at an IEBC office or Huduma centre — free.","Do not believe postponement rumours without a gazette notice."],
      sw:["Thibitisha usajili katika ofisi ya IEBC au Huduma centre — ni bure.","Usiamini uvumi wa kuahirishwa bila tangazo rasmi la gazeti."],
      sh:["Confirm registration kwa IEBC office ama Huduma centre — ni free.","Usiamini postponement rumours bila gazette notice."]
    }
  },
  {
    id:"voter-sms", verdict:"DISPUTED", confidence:82,
    keywords:["voter registration","iebc","paybill"],
    anchors:["voter registration","iebc","paybill"],
    sources:{
      en:[["IEBC","Registration is free, in-person, never paid via M-PESA."],["DCI","Paybill payment demands are a known fraud pattern."]],
      sw:[["IEBC","Usajili ni bure, hufanywa ana kwa ana, na haulipiwi kupitia M-PESA."],["DCI","Madai ya malipo kupitia Paybill ni mbinu inayojulikana ya ulaghai."]],
      sh:[["IEBC","Registration ni free, in-person, si ya kulipa kupitia M-PESA."],["DCI","Paybill payment demands ni fraud pattern inayojulikana."]]
    },
    unknown:{
      en:"This demo does not verify who controls the specific Paybill number; treat an unsolicited payment demand as unsafe.",
      sw:"Demo hii haithibitishi nani anayedhibiti nambari hiyo ya Paybill; chukulia ombi la malipo lisiloombwa kuwa si salama.",
      sh:"Demo hii hai-confirm mwenye hiyo Paybill; payment demand usiyoexpect ichukulie unsafe."
    },
    next:{
      en:["Register free at IEBC/Huduma.","Never send money to “confirm” registration.","Report to the DCI hotline."],
      sw:["Jisajili bila malipo katika IEBC/Huduma.","Usitume pesa kamwe ili “kuthibitisha” usajili.","Ripoti kwa nambari ya DCI."],
      sh:["Register free kwa IEBC/Huduma.","Usitume pesa ya “confirm” registration.","Report kwa DCI hotline."]
    }
  }
];

const DEMOS = {
  1:"Wasee wanasema shule za county zimeongeza ada mpya ya elfu tatu ya kurudi, registration fee lazima ilipwe before term ianze. Pia leo nilinunua sukuma kwa bei poa.",
  2:"The county has a KSh 2 billion bursary and every student will get a flat KSh 30,000 through the chief’s office.",
  3:"A Gikomba tender is open and your bids will be accepted only after you send a registration fee to this personal M-PESA number.",
  4:"Kenya’s next general election is the second Tuesday of August 2027.",
  5:"IEBC voter registration closes Friday, confirm by sending KSh 200 to M-PESA Paybill 111222."
};

const SAFETY_WORDS = ["election","uchaguzi","violence","uvamizi","health","afya"];

function t(key) {
  const value = UI[currentLang][key];
  return value ?? UI.en[key] ?? key;
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;" }[c]));
}
function normalize(s) {
  return String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
}
function setPlaceholders() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (UI[currentLang][key] !== undefined) el.textContent = UI[currentLang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
  const tr = document.getElementById("voiceTranscript");
  tr.dataset.placeholder = t("voicePlaceholder");
  document.getElementById("checkBtn").textContent = t("checkBtn");
  if (!document.getElementById("results").hidden) rerenderResults();
}
function setLanguage(lang) {
  if (!LANGS.includes(lang)) return;
  currentLang = lang;
  document.documentElement.lang = lang === "sw" ? "sw" : "en";
  document.querySelectorAll(".lang-btn").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  setPlaceholders();
}
function getActiveInput() {
  if (activeTab === "text") return document.getElementById("textInput").value.trim();
  if (activeTab === "screenshot") return document.getElementById("ocrText").textContent.trim();
  return document.getElementById("voiceTranscript").textContent.trim();
}
function splitClaims(input) {
  const pieces = input.replace(/\r/g," ").split(/(?<=[.!?])\s+|\n+/).map(s => s.trim()).filter(Boolean);
  const longEnough = pieces.filter(s => s.length > 25);
  return (longEnough.length ? longEnough : (input.length > 25 ? [input.trim()] : [])).slice(0,4);
}
function matchClaim(claim) {
  const n = normalize(claim);
  const matches = EVIDENCE.map(s => {
    const keywordHits = s.keywords.filter(k => n.includes(normalize(k)));
    const anchorHits = s.anchors.filter(a => n.includes(normalize(a)));
    return { s, keywordHits, anchorHits, score:keywordHits.length + anchorHits.length };
  }).filter(x => x.keywordHits.length >= 2 && x.anchorHits.length >= 1);
  matches.sort((a,b) => b.score - a.score);
  return matches[0]?.s || null;
}
function analyzeClaims(claims) {
  const grouped = [];
  const seenScenario = new Set();
  claims.forEach(claim => {
    const scenario = matchClaim(claim);
    if (scenario && seenScenario.has(scenario.id)) return;
    if (scenario) seenScenario.add(scenario.id);
    grouped.push({claim, scenario});
  });
  return grouped;
}
function hasSafety(input) {
  const n = normalize(input);
  return SAFETY_WORDS.some(w => n.includes(normalize(w)));
}
function renderSafety() {
  const el = document.getElementById("safetyBanner");
  if (!window.__verivoiceSafety) { el.hidden = true; return; }
  const s = UI[currentLang].safety;
  el.innerHTML = `<strong>⚠️ ${escapeHtml(t("safetyTitle"))}</strong><span>${escapeHtml(t("safetyIntro"))}</span>
  <ul><li>${escapeHtml(s.police)}</li><li>${escapeHtml(s.dci)}</li><li>${escapeHtml(s.gbv)}</li><li>${escapeHtml(s.ncic)}</li></ul>`;
  el.hidden = false;
}
function renderProgress() {
  const list = document.getElementById("progressList");
  list.innerHTML = t("progress").map((label,i) =>
    `<li class="progress-step" data-step="${i}"><span class="tick">${i === 0 ? "…" : "○"}</span><span>${escapeHtml(label)}</span></li>`
  ).join("");
}
async function runProgress() {
  const steps = [...document.querySelectorAll(".progress-step")];
  for (let i=0;i<steps.length;i++) {
    steps[i].classList.add("active");
    await new Promise(r => setTimeout(r, 400));
    steps[i].classList.remove("active"); steps[i].classList.add("done");
    steps[i].querySelector(".tick").textContent = "✓";
  }
}
function sourceHtml(scenario) {
  const sources = scenario.sources[currentLang];
  return sources.map(([name,note]) => `<div class="source"><strong>${escapeHtml(name)}</strong><span>${escapeHtml(note)}</span></div>`).join("");
}
function listHtml(items) { return `<ul>${items.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>`; }
function verdictCard(item) {
  const s = item.scenario;
  const verdict = s ? s.verdict : "UNVERIFIED";
  const confidence = s ? s.confidence : 30;
  const evidence = s ? sourceHtml(s) : `<p>${escapeHtml(currentLang==="sw" ? "Hakuna chanzo cha kutosha katika hifadhidata hii kinacholingana na dai hili kwa masharti yetu ya uaminifu." : currentLang==="sh" ? "Hakuna evidence ya kutosha kwa demo evidence base inayomatch hii claim bila kubahatisha." : "No evidence in this demo base meets the matching rules for this claim, so no verdict is guessed.")}</p>`;
  const unknown = s ? s.unknown[currentLang] : (currentLang==="sw" ? "Dai hili halikulingana na scenario iliyothibitishwa katika hifadhidata hii." : currentLang==="sh" ? "Hii claim haimatch scenario iliyothibitishwa kwa demo base." : "This claim did not match a verified scenario in the demo evidence base.");
  const next = s ? s.next[currentLang] : (currentLang==="sw" ? ["Usisambaze dai hili kama ukweli.","Omba chanzo cha awali au waraka rasmi.","Thibitisha na taasisi husika kabla ya kuchukua hatua."] : currentLang==="sh" ? ["Usi-share hii claim kama true.","Omba original source ama official notice.","Confirm na institution husika before uchukue action."] : ["Do not share this claim as fact.","Ask for the original source or official notice.","Confirm with the relevant institution before acting."]);
  return `<article class="verdict-card card">
    <div class="verdict-head"><span class="badge badge-${verdict.toLowerCase()}">${escapeHtml(UI[currentLang].verdicts[verdict])}</span><span class="confidence">${confidence}%</span></div>
    <div class="claim">“${escapeHtml(item.claim)}”</div>
    <section class="verdict-section"><h3>${escapeHtml(t("evidenceTitle"))}</h3>${evidence}</section>
    <section class="verdict-section"><h3>${escapeHtml(t("unknownTitle"))}</h3><p>${escapeHtml(unknown)}</p></section>
    <section class="verdict-section"><h3>${escapeHtml(t("nextTitle"))}</h3>${listHtml(next)}</section>
  </article>`;
}
function renderVerdicts(items) {
  document.getElementById("verdicts").innerHTML = items.map(verdictCard).join("");
}
function renderShare(items) {
  const share = document.getElementById("shareCard");
  const rows = items.map(x => {
    const v = x.scenario ? x.scenario.verdict : "UNVERIFIED";
    return `<li><span>${escapeHtml(x.claim)}</span> <strong>→ ${escapeHtml(UI[currentLang].verdicts[v])}</strong></li>`;
  }).join("");
  share.innerHTML = `<h2>${escapeHtml(t("shareTitle"))}</h2><ul class="share-list">${rows}</ul><p><strong>${escapeHtml(t("checked"))}</strong></p><button id="copyBtn" class="copy-btn" type="button">${escapeHtml(t("copy"))}</button>`;
  share.hidden = false;
  document.getElementById("copyBtn").addEventListener("click", copySummary);
}
function summaryText(items) {
  const lines = items.map(x => {
    const v = x.scenario ? x.scenario.verdict : "UNVERIFIED";
    return `• ${x.claim} → ${UI[currentLang].verdicts[v]} (${x.scenario ? x.scenario.confidence : 30}%)`;
  });
  return `${t("shareTitle")}\n${lines.join("\n")}\n${t("checked")}`;
}
async function copySummary() {
  const btn = document.getElementById("copyBtn");
  try {
    await navigator.clipboard.writeText(summaryText(window.__verivoiceItems));
  } catch {
    const ta = document.createElement("textarea"); ta.value = summaryText(window.__verivoiceItems);
    document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove();
  }
  btn.textContent = t("copied"); btn.classList.add("copied");
  setTimeout(() => { if (btn) btn.textContent = t("copy"); btn?.classList.remove("copied"); }, 1800);
}
function rerenderResults() {
  renderSafety();
  if (window.__verivoiceItems) { renderVerdicts(window.__verivoiceItems); renderShare(window.__verivoiceItems); }
}
async function checkInformation() {
  const input = getActiveInput();
  if (!input) { alert(t("noInput")); return; }
  const results = document.getElementById("results");
  results.hidden = false;
  window.__verivoiceSafety = hasSafety(input);
  renderSafety();
  const progress = document.getElementById("progressCard");
  progress.hidden = false; renderProgress();
  document.getElementById("verdicts").innerHTML = ""; document.getElementById("shareCard").hidden = true;
  await runProgress();
  const claims = splitClaims(input);
  const items = claims.length ? analyzeClaims(claims) : [{claim:input,scenario:null}];
  window.__verivoiceItems = items;
  renderVerdicts(items); renderShare(items);
  results.scrollIntoView({behavior:"smooth",block:"start"});
}
function setTab(tab) {
  activeTab = tab;
  document.querySelectorAll(".tab").forEach(b => { const on=b.dataset.tab===tab; b.classList.toggle("active",on); b.setAttribute("aria-selected",String(on)); });
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.toggle("active", p.id === `${tab}-panel`));
}
function setupSpeech() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const notice = document.getElementById("speechNotice");
  const btn = document.getElementById("recordBtn");
  if (!SpeechRecognition) {
    notice.hidden = false; notice.textContent = t("speechUnsupported"); btn.disabled = true; return;
  }
  recognition = new SpeechRecognition();
  recognition.continuous = true; recognition.interimResults = true; recognition.lang = "en-KE";
  recognition.onresult = event => {
    let finalText = "", interim = "";
    for (let i=0;i<event.results.length;i++) {
      const part = event.results[i][0].transcript;
      if (event.results[i].isFinal) finalText += part + " ";
      else interim += part;
    }
    const box = document.getElementById("voiceTranscript");
    box.textContent = (box.dataset.final || "") + finalText + interim;
    box.dataset.final = (box.dataset.final || "") + finalText;
  };
  recognition.onerror = () => { recognizing=false; btn.classList.remove("listening"); btn.querySelector("span").textContent=t("startListening"); };
  recognition.onend = () => { if (recognizing) { try { recognition.start(); } catch(e){} } };
  btn.addEventListener("click", () => {
    if (!recognizing) {
      recognizing=true; document.getElementById("voiceTranscript").dataset.final="";
      recognition.start(); btn.classList.add("listening"); btn.querySelector("span").textContent=t("stopListening");
    } else {
      recognizing=false; recognition.stop(); btn.classList.remove("listening"); btn.querySelector("span").textContent=t("startListening");
    }
  });
}
function downscaleImage(file, maxSide=1400) {
  return new Promise((resolve,reject) => {
    const img = new Image(), url=URL.createObjectURL(file);
    img.onload=() => {
      const scale=Math.min(1,maxSide/Math.max(img.width,img.height));
      const c=document.createElement("canvas"); c.width=Math.round(img.width*scale); c.height=Math.round(img.height*scale);
      c.getContext("2d").drawImage(img,0,0,c.width,c.height); URL.revokeObjectURL(url);
      resolve(c.toDataURL("image/jpeg",.88));
    };
    img.onerror=reject; img.src=url;
  });
}
async function handleOCR(file) {
  const status=document.getElementById("ocrStatus"), out=document.getElementById("ocrText"), preview=document.getElementById("preview");
  status.hidden=false; status.textContent=t("ocrWorking");
  try {
    const dataUrl=await downscaleImage(file);
    preview.src=dataUrl; preview.hidden=false;
    if (!window.Tesseract) throw new Error("OCR library unavailable");
    const result=await Tesseract.recognize(dataUrl,"eng",{logger:m => { if (m.status==="recognizing text" && m.progress) status.textContent=`${t("ocrWorking")} ${Math.round(m.progress*100)}%`; }});
    out.textContent=result.data.text.trim(); status.textContent=t("ocrDone");
  } catch(e) { status.textContent=t("ocrFail"); out.textContent=""; }
}
function loadDemo(n) {
  setTab("text"); document.getElementById("textInput").value=DEMOS[n];
  window.scrollTo({top:document.getElementById("textInput").getBoundingClientRect().top+window.scrollY-90,behavior:"smooth"});
}

document.addEventListener("DOMContentLoaded", () => {
  setPlaceholders(); setupSpeech();
  document.querySelectorAll(".lang-btn").forEach(b => b.addEventListener("click",()=>setLanguage(b.dataset.lang)));
  document.querySelectorAll(".tab").forEach(b => b.addEventListener("click",()=>setTab(b.dataset.tab)));
  document.querySelectorAll(".demo-btn").forEach(b => b.addEventListener("click",()=>loadDemo(b.dataset.demo)));
  document.getElementById("checkBtn").addEventListener("click",checkInformation);
  document.getElementById("imageInput").addEventListener("change",e => { const f=e.target.files?.[0]; if(f) handleOCR(f); });
});
