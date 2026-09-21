# VeriVoice — Written Summary

**OSF × Andela Hackathon 2026 — Stability & Social Cohesion / Transparency & Accountability (cross-track)**

## The problem

Across Kenya, the information people act on arrives as voice notes, forwarded screenshots, and WhatsApp messages — in Sheng, Kiswahili, and English. A rumour about a school fee change, a fake tender notice, a distorted quote from a county budget briefing: by the time it reaches a market trader in Gikomba or a matatu driver in Kisumu, it is spoken text, not an article with a URL. Conventional fact-checking tools fail at exactly this point. They are text-first, English-first, and assume a literate, high-bandwidth user with time to read. Verification stays a privilege of the already well-informed, and the communities most exposed to harmful misinformation remain the least equipped to challenge it.

## What VeriVoice is

VeriVoice is a multilingual civic information assistant that helps people **verify, understand, and safely share the information they receive** — starting with Kenya as the demonstration environment, and designed from the start for expansion to other African countries and languages.

**Core loop: Receive → Understand → Verify → Explain → Share**

A user submits information exactly as they received it:

- a **voice note** (the dominant format in Kenyan group chats),
- **typed or pasted text**,
- a **screenshot or photo** of a message.

VeriVoice then runs the pipeline:

**Input → Transcription/OCR → Claim Extraction → Evidence Retrieval → AI Reconciliation → Verification Result → Explanation → Shareable Response**

Each main claim in the message is returned as a card that states, in plain language:

1. **The claim**, restated simply.
2. **The verdict**: *Supported*, *Disputed*, *Misleading*, or *Unverified — we could not find enough evidence*.
3. **The evidence**, with named sources the user can open.
4. **A confidence level**, and — critically — what we do **not** know.
5. **Next steps**: what the user can actually do (e.g. "Confirm with the county education office before paying anything", or "Report this number to the DCI via *Hotlini Ya Uhalifu* 0800 722 203"), and a safe, watermark-free summary card they can share back to the group chat where the message came from.

## Design principle: an assistant, never an oracle

VeriVoice **must never present itself as an all-knowing authority on truth**. Verdicts are evidence summaries with confidence levels, not decrees. When evidence is thin, VeriVoice says so in the same words a careful friend would use — *"Hakuna ushahidi wa kutosha. Usiendelee kusambaza hadi uthibitishwe."* ("There is not enough evidence. Do not spread it until it is confirmed.") This is deliberate: trust in civic life is built by showing your work, not by claiming certainty. Every response exposes its sources, its reasoning in brief, and its limits.

## Why it fits the real conditions it will live in

- **Low bandwidth**: responses are text-first and lightweight; voice input is uploaded once and processed server-side; images are downscaled; the share-back card is a few lines of text, not a video.
- **Multilingual by default**: input and output in English and Kiswahili, with Sheng tolerated generously — people do not switch registers to verify a rumour.
- **Accessibility**: voice-first input means a user never has to type; large text and simple language serve low-literacy users.
- **Privacy**: no accounts required in the PoC; recordings and images are processed and not retained; nothing is shared onward without an explicit action by the user.
- **Local relevance**: verdicts and next steps reference Kenyan institutions, hotlines, and official channels — not generic "contact the authorities".
- **Safety**: for claims touching violence, elections, or public health, VeriVoice routes to established reporting and support pathways instead of only scoring the claim.

## Why this matters (and why it is worth developing further)

Misinformation in Kenya is not an abstraction: it has driven mob action, depressed vaccine uptake, and obscured real corruption behind noise. The OSF-backed initiative this hackathon draws on — *Transformative Peace in Africa: Shifting Power to Communities* — is about shifting the power to judge information into the hands of communities themselves. VeriVoice does exactly that: it converts verification from a service performed *about* people into a capability performed *by* them.

**Roadmap after the PoC:** WhatsApp integration (verify by forwarding to a VeriVoice number — no new app to install), partnership with community radio stations for a call-in verification segment, offline-tolerant caching of frequently checked claims, and a public claim-check page so the same verification serves whole communities, not one user at a time.

## Proof of concept scope

The PoC demonstrates the full core loop end-to-end — voice note, text, and image in; transcribed, claim-checked, explained, and shareable out — as a lightweight, self-contained web app that runs entirely in the browser: live speech-to-text for voice input, Tesseract.js OCR for screenshots, rule-based claim extraction, and reconciliation against a curated, citable evidence base covering the demo scenarios. The production design replaces the demo evidence base with AI reconciliation against live, named sources, and moves processing server-side so voice notes can be forwarded straight from WhatsApp. It is an invention sprint, not a product launch: it demonstrates the problem, the users, the loop, and why it deserves to exist.
