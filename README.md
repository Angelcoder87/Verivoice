# VeriVoice 🔎

**Verify. Understand. Act.** — a multilingual civic information assistant for Kenya.

> In Kenya, the information people act on arrives as voice notes and forwarded screenshots — in Sheng, Kiswahili, and English. VeriVoice lets anyone check it before they share it.

**Core loop:** Receive → Understand → Verify → Explain → Share

Submit information exactly as you received it — **voice note, text, or screenshot** — and VeriVoice transcribes it, extracts the main claims, retrieves evidence, and returns a plain-language verdict for each claim, with sources, a confidence level, honest unknowns, and clear next steps you can act on. A shareable summary card goes straight back to the group chat the message came from.

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
- `docs/demo-video.md` — demo video link and recording notes
- `app/` — working proof of concept: a self-contained web app that runs the full loop (voice / text / screenshot in → transcription & OCR → claim extraction → verdict cards with sources, confidence and next steps → shareable summary card) entirely in the browser

## Links

- **Live demo:** https://angelcoder87.github.io/Verivoice/
- **Demo video:** see `docs/demo-video.md` (link added once published)

---

*Built for the OSF × Andela Hackathon 2026 — Stability & Social Cohesion / Transparency & Accountability (cross-track). Inspired by OSF's Transformative Peace in Africa: Shifting Power to Communities.*
