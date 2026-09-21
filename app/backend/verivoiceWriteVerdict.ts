// VeriVoice PoC — write a verification verdict to a request record (service role).
// Called by the verification agent turn over HTTP so the verdict lands reliably.
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: CORS });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ ok: false, error: "POST only" }), { status: 405, headers: { ...CORS, "content-type": "application/json" } });
  }
  let body: any;
  try { body = await req.json(); } catch {
    return new Response(JSON.stringify({ ok: false, error: "Invalid JSON" }), { status: 400, headers: { ...CORS, "content-type": "application/json" } });
  }
  const id = typeof body.id === "string" ? body.id.trim() : "";
  const verdict = body.verdict;
  if (!id || id.length > 64) {
    return new Response(JSON.stringify({ ok: false, error: "id required" }), { status: 400, headers: { ...CORS, "content-type": "application/json" } });
  }
  const isErrVerdict = verdict && typeof verdict === "object" && verdict.verdict_label === "error";
  if (!verdict || typeof verdict !== "object" || Array.isArray(verdict) ||
      !(typeof verdict.verdict_label === "string") || !(typeof verdict.confidence === "string")) {
    return new Response(JSON.stringify({ ok: false, error: "verdict must be a JSON object with verdict_label and confidence" }), { status: 400, headers: { ...CORS, "content-type": "application/json" } });
  }
  try {
    const { createClientFromRequest } = await import("npm:@base44/sdk@0.8.31");
    const base44 = createClientFromRequest(req);
    const rec = await base44.asServiceRole.entities.VerificationRequest.get(id);
    if (rec.status !== "queued" && rec.status !== "processing") {
      return new Response(JSON.stringify({ ok: false, error: "record already finalized", status: rec.status }), { status: 409, headers: { ...CORS, "content-type": "application/json" } });
    }
    const data: any = {
      status: isErrVerdict ? "error" : "verified",
      verdict,
    };
    if (typeof body.language === "string" && body.language.length <= 20) data.language = body.language;
    if (typeof body.input_text === "string" && body.input_text.length <= 8000) data.input_text = body.input_text;
    await base44.asServiceRole.entities.VerificationRequest.update(id, data);
    const check = await base44.asServiceRole.entities.VerificationRequest.get(id);
    return new Response(JSON.stringify({ ok: true, status: check.status }), { headers: { ...CORS, "content-type": "application/json" } });
  } catch (e: any) {
    return new Response(JSON.stringify({ ok: false, error: "Update failed." }), { status: 500, headers: { ...CORS, "content-type": "application/json" } });
  }
});
