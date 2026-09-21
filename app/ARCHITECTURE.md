# VeriVoice PoC — Architecture

A serverless, entity-triggered pipeline built entirely on [Base44](https://base44.com).
No external verification APIs: the AI agent itself does the research, and every
verdict must cite sources a human can open and read.

## Pipeline

```
User (mobile web app)
   │  paste text OR record voice note (MediaRecorder, in-browser)
   ▼
verivoiceSubmit (backend function, POST)
   │  rate-limit (6 req/hr/IP) → validate → create VerificationRequest
   │  status: "queued"
   ▼
Entity trigger (record created, status == queued)
   ▼
"VeriVoice Request Verifier" workflow → invoke_superagent_step (agent turn)
   │  1. Read the record
   │  2. If audio: decode base64 → Whisper transcription
   │  3. 2–4 targeted web searches (Kenyan gov / reputable media first)
   │  4. Compose verdict: label, confidence, bilingual explanation,
   │     sources, next steps, caveats
   │  5. Write back via verivoiceWriteVerdict (service-role function call)
   ▼
verivoiceResult (backend function, GET ?id=)
   │  frontend polls until status == verified
   ▼
Verdict card (mobile UI): label chip + confidence meter + explanation
   (EN/SW) + sources + next steps + caveats + WhatsApp share-back
```

## Backend functions (Base44, Deno)

| Function | Method | Role |
|---|---|---|
| `verivoiceApp` | GET | Serves the single-page mobile web app (text/html) |
| `verivoiceSubmit` | POST | Rate-limited intake; creates the `VerificationRequest` record |
| `verivoiceResult` | GET | Public, minimal field projection of a record for polling |
| `verivoiceWriteVerdict` | POST | Service-role write of the agent's verdict (idempotent-ish: refuses finalized records) |

## Entity: `VerificationRequest`

| Field | Type | Notes |
|---|---|---|
| `input_type` | enum text/audio/image | PoC uses text + audio |
| `input_text` | string | Claim as received (or transcribed) |
| `audio_b64` | string | Base64 voice note (audio input only) |
| `language` | string | en / sw / mixed |
| `status` | enum queued/processing/verified/error | Drives trigger + polling |
| `verdict` | object | See below |

### Verdict object

```json
{
  "verdict_label": "Verified | False | Misleading | Unverifiable | Opinion",
  "confidence": "High | Medium | Low",
  "claim_summary": "one neutral English sentence",
  "explanation_en": "2-4 simple sentences on what the evidence shows",
  "explanation_sw": "same in simple Kiswahili",
  "sources": [{ "title": "", "url": "", "note": "" }],
  "next_steps": ["2-3 concrete plain-language actions"],
  "caveats": "one sentence on remaining uncertainty"
}
```

## Design decisions worth noting

- **Assistant, never an oracle.** Every verdict carries a confidence level,
  openable sources, and an explicit caveats line. "Unverifiable" is a valid,
  honest answer.
- **Voice-first.** Voice notes are transcribed by the agent turn itself
  (Whisper), so the mobile client stays tiny (~24 KB HTML, no framework, no build).
- **Low bandwidth.** One-page app, system fonts + one webfont, text-first
  payloads, no images required for the core flow.
- **Privacy.** No account, no analytics; audio is used for transcription only
  and not retained after verification.
- **Reliability of the write-back.** The agent turn writes its verdict through
  a service-role function call (`verivoiceWriteVerdict`) instead of a direct
  entity update, then re-reads the record to confirm the write landed.
- **Safety.** Next steps reference real Kenyan institutions (county offices,
  DCI hotline, official portals) rather than invented support channels.
