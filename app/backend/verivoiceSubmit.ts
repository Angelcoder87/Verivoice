// VeriVoice PoC — submit a verification request (text or voice note).
// Creates a VerificationRequest record; the entity-triggered workflow wakes the
// VeriVoice agent, which verifies the claim and writes a bilingual verdict back.
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// simple in-memory per-isolate rate limit: max 6 submissions per IP per hour
const hits = new Map();
function limited(ip: string): boolean {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((t: number) => now - t < 3600_000);
  if (arr.length >= 6) {
    hits.set(ip, arr);
    return true;
  }
  arr.push(now);
  hits.set(ip, arr);
  return false;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: CORS });

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ ok: false, error: "POST only" }), {
      status: 405,
      headers: { ...CORS, "content-type": "application/json" },
    });
  }

  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (limited(ip)) {
    return new Response(JSON.stringify({ ok: false, error: "Too many requests. Please wait a bit." }), {
      status: 429,
      headers: { ...CORS, "content-type": "application/json" },
    });
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "Invalid JSON" }), {
      status: 400,
      headers: { ...CORS, "content-type": "application/json" },
    });
  }

  const inputType = body.inputType === "audio" ? "audio" : "text";
  const text = typeof body.text === "string" ? body.text.trim() : "";
  const audioB64 = typeof body.audioB64 === "string" ? body.audioB64.trim() : "";

  if (inputType === "text" && (!text || text.length > 4000)) {
    return new Response(JSON.stringify({ ok: false, error: "Text required (max 4000 chars)." }), {
      status: 400,
      headers: { ...CORS, "content-type": "application/json" },
    });
  }
  if (inputType === "audio" && (!audioB64 || audioB64.length > 1_400_000)) {
    return new Response(JSON.stringify({ ok: false, error: "Voice note required (max ~1MB)." }), {
      status: 400,
      headers: { ...CORS, "content-type": "application/json" },
    });
  }

  try {
    const { createClientFromRequest } = await import("npm:@base44/sdk@0.8.31");
    const base44 = createClientFromRequest(req);
    const rec = await base44.entities.VerificationRequest.create({
      input_type: inputType,
      input_text: inputType === "text" ? text : "",
      audio_b64: inputType === "audio" ? audioB64 : null,
      language: typeof body.language === "string" ? body.language : null,
      status: "queued",
    });
    return new Response(JSON.stringify({ ok: true, id: rec.id }), {
      headers: { ...CORS, "content-type": "application/json" },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ ok: false, error: "Could not queue request." }), {
      status: 500,
      headers: { ...CORS, "content-type": "application/json" },
    });
  }
});
