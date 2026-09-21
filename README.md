# VeriVoice 🔎

**Verify. Understand. Act.** — a multilingual civic information assistant for Kenya.

> In Kenya, the information people act on arrives as voice notes and forwarded screenshots — in Sheng, Kiswahili, and English. VeriVoice lets anyone check it before they share it.

**Core loop:** Receive → Understand → Verify → Explain → Share

Submit information exactly as you received it — **voice note or text** — and VeriVoice transcribes it, extracts the main claims, retrieves evidence, and returns a plain-language verdict with sources, a confidence level, honest unknowns, and clear next steps you can act on. A shareable summary goes straight back to the group chat the message came from.

> **PoC scope:** this proof of concept implements voice + text end-to-end. Screenshot/image checking is designed but deliberately out of scope for the sprint — see the roadmap in the written summary.

## Design principle

**An assistant, never an oracle.** VeriVoice summarises evidence with sources and confidence levels. When evidence is thin, it says "Unverified" in plain words — *Hakuna ushahidi wa kutosha* — instead of guessing. Trust is built by showing your work.

## Built for real conditions

- **Voice-first input** — no typing required
- **English & Kiswahili**, Sheng tolerated generously
- **Low bandwidth**: lightweight text-first responses
- **Privacy**: no account needed; inputs processed, not retained
- **Local relevance**: next steps reference real Kenyan institutions and hotlines
- **Safety**: claims touching violence or public health route to established support pathways

## Pipeline

**Input → Transcription/OCR → Claim Extraction → Evidence Retrieval → AI Reconciliation → Verification Result → Explanation → Shareable Response**

## Contents of this repo

- `docs/written-summary.md` — full written submission
- `docs/pitch-deck.pdf` — 10-slide pitch deck
- `docs/demo-script.md` — demo video script
- `docs/demo-video.md` — demo video link
- `app/` — working proof-of-concept source (mobile web app + backend functions + workflow, built on Base44) — see `app/ARCHITECTURE.md`
- `demo-assets/` — demo inputs (real verified claim + clearly-labelled simulated scam notice)

## Links

- **Live demo (mobile web app):** https://base44.app/api/apps/6a9e4cb08678ebe6e78deea3/functions/verivoiceApp
- **Demo video:** link in `docs/demo-video.md` (being recorded — added before submission)

## Try it

1. Open the live demo on your phone (or a phone-width browser window).
2. Paste the claim from `demo-assets/demo_claim_county_budget.txt` and tap *Check this for me*.
3. The pipeline runs end-to-end (typically 1–2 minutes): the request is queued, an AI agent turn researches the claim against authoritative Kenyan sources, and the bilingual verdict card appears — with sources, confidence, next steps and caveats.
4. Toggle EN/SW for the explanation language, and use *Share on WhatsApp* to send the verdict back to the chat the claim came from.

---

*Built for the OSF × Andela Hackathon 2026 — Stability & Social Cohesion / Transparency & Accountability (cross-track). Inspired by OSF's Transformative Peace in Africa: Shifting Power to Communities.*
