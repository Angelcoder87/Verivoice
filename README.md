# VeriVoice 🔎

**Verify. Understand. Act.** — a multilingual civic information assistant for Kenya.

> In Kenya, the information people act on arrives as voice notes and forwarded messages — in Sheng, Kiswahili, and English. VeriVoice lets anyone check it before they share it.

**Core loop:** Receive → Understand → Verify → Explain → Share

Submit information exactly as you received it — **voice note or text** — and VeriVoice transcribes it, researches the main claims against live sources, and returns a plain-language verdict with sources, a confidence level, honest unknowns, and clear next steps you can act on. A shareable summary goes straight back to the group chat the message came from.

> **PoC scope:** this proof of concept implements voice + text end-to-end, live. Screenshot checking and a full Sheng interface are explored in the companion static prototype (`prototype/`).

## Design principle

**An assistant** VeriVoice summarises evidence with sources and confidence levels. When evidence is thin, it says "Unverified" in plain words — *Hakuna ushahidi wa kutosha* — instead of guessing. Trust is built by showing your work.

## Built for real conditions

- **Voice-first input** — no typing required
- **English & Kiswahili**, Sheng tolerated generously
- **Low bandwidth**: lightweight, no-framework web app; text-first responses
- **Privacy**: no account needed; recordings used for transcription only, not retained
- **Local relevance**: next steps reference real Kenyan institutions, portals and hotlines
- **Safety**: claims touching violence or public health route to established support pathways

## Live pipeline

**Input → Transcription → Claim Extraction → Evidence Retrieval (live web research) → AI Reconciliation → Verdict → Bilingual Explanation → Share-back**

Every verdict returned by the live demo is checked against real, current sources at the moment you test it — nothing is canned.

## Try it

1. Open https://angelcoder87.github.io/Verivoice/ on your phone or a phone-width browser.
2. Paste the claim from `demo-assets/demo_claim_county_budget.txt` and tap *Check this for me*.
3. The pipeline runs end-to-end (typically 1–2 minutes): the request is queued, an AI agent researches the claim against authoritative Kenyan sources, and the bilingual verdict card appears — sources, confidence, next steps, caveats.
4. Toggle EN/SW for the explanation language, then use *Share on WhatsApp* to send the verdict back where the claim came from.

## Links

- **Concept prototype:** https://angelcoder87.github.io/Verivoice/

---

*Built for the OSF × Andela Hackathon 2026 — Stability & Social Cohesion / Transparency & Accountability (cross-track). Inspired by OSF's Transformative Peace in Africa: Shifting Power to Communities.*
