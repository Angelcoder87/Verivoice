# VeriVoice — Demo Video Script (~2.5 min)

**Tone:** calm, clear, Kenyan-context. Narration over screen recording of the **live app** (the real verification pipeline — every verdict you see is checked against live sources at recording time).

**Live app:** https://base44.app/api/apps/6a9e4cb08678ebe6e78deea3/functions/verivoiceApp

| # | Time | Visual | Narration |
|---|------|--------|-----------|
| 1 | 0:00–0:20 | Title card: VeriVoice logo, "Verify. Understand. Act." | "In Kenya, the information we act on arrives as voice notes and forwarded messages — in Sheng, Kiswahili, and English. But how do you check it before you share it?" |
| 2 | 0:20–0:40 | Problem montage: WhatsApp-style voice note, forwarded message (can be the simulated tender notice from `demo-assets/`) | "A rumour about a county budget. A fake tender. A distorted quote. Fact-checking sites are text-first and English-first. And Kenya's general elections are due in August 2027 — the season when forwarded claims are most dangerous, and most believed." |
| 3 | 0:40–0:55 | Live app home screen: EN/SW toggle, the two input tabs | "VeriVoice meets people where they are. Send it exactly what you received: paste the message, or record a voice note in whatever language you think in." |
| 4 | 0:55–1:25 | Paste the county budget claim (`demo-assets/demo_claim_county_budget.txt`), tap *Check this for me*; show the Receive–Understand–Verify–Explain progress loop | "This real message mixes Sheng and English and asks three things at once. VeriVoice takes it exactly as received — no cleaning up, no translating first — and an AI agent researches it against current, authoritative sources." |
| 5 | 1:25–1:50 | Verdict card appears: **VERIFIED, High confidence**; scroll through: sources (Citizen Digital, county records), EN explanation, SW explanation, next steps, caveats | "The core figures check out — with the actual sources, a confidence level, and honest caveats. Notice what it does NOT do: it doesn't call anything '100% true'. It shows its work." |
| 6 | 1:50–2:10 | Submit the tender-fee scam message (or the SHA/NHIF WhatsApp-bot scam); verdict: **FALSE**; highlight the DCI hotline and PPIP portal in next steps | "Now a scam. It comes back false — and instead of just 'debunked', you get what to do about it: don't pay, verify on the official portal, report the paybill. That's the Act in our loop." |
| 7 | 2:10–2:30 | Toggle SW — the same verdict card in Kiswahili; tap *Share on WhatsApp* | "Explanations come in English or Kiswahili. And a one-tap share sends the verdict — with sources — straight back to the group chat the rumour came from. Correction travels the same road as the rumour." |
| 8 | 2:30–2:45 | Closing cards: pipeline diagram, then roadmap bullets; end card with repo + live demo URL | "Voice-first. No account. Real sources, real confidence, real next steps. Built for Kenya, designed for Africa. Next: verify by simply forwarding to a VeriVoice WhatsApp number — ready for 2027. VeriVoice: information you can trust — and act on." |

**Recording checklist:**
- [ ] Record at 1080p, phone-width browser window, hide bookmarks bar
- [ ] Real pipeline latency is 1–2 minutes per claim: submit each demo claim BEFORE narrating, then screen-record the verdict card when it appears (cut the waiting time in editing — the progress loop makes a natural bridge shot)
- [ ] Have the three claims ready: county budget (Verified), tender fee scam (False), SHA registration scam (False)
- [ ] Test each claim once before recording so there are no surprises on camera
- [ ] Slow, deliberate cursor movement; pause 2s after each verdict appears
- [ ] Narration: record yourself or TTS; background music optional at -20dB

**Research anchors (for narration depth or judge Q&A):**
- Kenya's next general election is constitutionally due in **August 2027** (second Tuesday of August, every fifth year) — a foreseeable misinformation surge VeriVoice is built for.
- Misinformation around Kenyan elections is well documented (e.g. Mozilla's 2022 report on hired influencers shaping online opinion — verify exact title/link before citing in the video).
- Voice notes and forwarded screenshots circulate beyond the reach of text-first, English-first fact-checking — VeriVoice's Sheng/Kiswahili support targets exactly that gap.
