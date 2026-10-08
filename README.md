# VeriVoice 🔎

**Verify. Understand. Act.** — a multilingual civic information assistant for Kenya.

> In Kenya, the information people act on arrives as voice notes and forwarded messages — in Sheng, Kiswahili, and English. VeriVoice lets anyone check it before they share it.

**Core loop:** Receive → Understand → Verify → Explain → Share

Submit information exactly as you received it — **voice note or text** — and VeriVoice transcribes it, researches the main claims against live sources, and returns a plain-language verdict with sources, a confidence level, honest unknowns, and clear next steps you can act on. A shareable summary goes straight back to the group chat the message came from.

> **PoC scope:** the live demo (this repo: `index.html` + `styles.css` + `app.js`, deployed below) runs the full interface — voice, text and screenshot inputs, EN/SW/SH languages, safety routing, and share-back — with a curated demo evidence base. A production build replaces that base with live AI reconciliation against named sources.

**Repo structure:** the app itself is at the root (`index.html`, `styles.css`, `app.js` — vanilla JS, no build step, deploys as-is to GitHub Pages); `docs/` holds the pitch deck and written summary.

## Design principle

**An assistant** VeriVoice summarises evidence with sources and confidence levels. When evidence is thin, it says "Unverified" in plain words — *Hakuna ushahidi wa kutosha* — instead of guessing. Trust is built by showing your work.

## Built for real conditions

- **Voice-first input** — no typing required
- **English & Kiswahili**, Sheng tolerated generously
- **Low bandwidth**: lightweight, no-framework web app; text-first responses
- **Privacy**: no account needed; recordings used for transcription only, not retained
- **Local relevance**: next steps reference real Kenyan institutions, portals and hotlines
- **Safety**: claims touching violence or public health route to established support pathways

## How it works

**Input → Transcription → Claim Extraction → Evidence Matching → Verdict → Bilingual Explanation → Share-back**

The demo ships with five evidence-backed scenarios: a school-fee rumour (disputed), a county bursary claim (misleading), a fake tender notice (disputed), the 2027 general-election date (supported — sourced to the Constitution and IEBC), and a fake voter-registration SMS (disputed — election-fraud pattern). Anything that doesn't match a scenario returns an honest **Unverified** — *Hakuna ushahidi wa kutosha* — instead of a guess. Claims touching violence, public health or elections route to established Kenyan support pathways first.

## Try it

1. Open https://angelcoder87.github.io/Verivoice/ on your phone or a phone-width browser.
2. Tap a **Try:** button (school-fee rumour, bursary claim, tender notice, election date, or fake voter-registration SMS) — or speak, type, or drop a screenshot of any forwarded message.
3. Verdict cards appear one by one: each claim gets a verdict (Supported / Disputed / Misleading / Unverified), its sources, a confidence level, what we *do not* know, and next steps referencing real Kenyan institutions and hotlines.
4. Toggle EN/SW/SH for the interface and explanation language, then copy the summary card back into the group chat.

## Links

- **Live demo:** https://angelcoder87.github.io/Verivoice/
- **The code:** [`index.html`](index.html) · [`styles.css`](styles.css) · [`app.js`](app.js)

---

*Built for the OSF × Andela Hackathon 2026 — Stability & Social Cohesion / Transparency & Accountability (cross-track). Inspired by OSF's Transformative Peace in Africa: Shifting Power to Communities.*
