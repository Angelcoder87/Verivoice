// VeriVoice PoC — poll the result of a verification request by record id.
// Returns the processing status and, once ready, the bilingual verdict card.
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: CORS });

  const url = new URL(req.url);
  const id = url.searchParams.get("id") ?? "";
  if (!id || id.length > 64) {
    return new Response(JSON.stringify({ ok: false, error: "id required" }), {
      status: 400,
      headers: { ...CORS, "content-type": "application/json" },
    });
  }

  try {
    const { createClientFromRequest } = await import("npm:@base44/sdk@0.8.31");
    const base44 = createClientFromRequest(req);
    const rec = await base44.entities.VerificationRequest.get(id);
    const payload: any = {
      ok: true,
      id: rec.id,
      status: rec.status,
      inputText: rec.input_text,
      language: rec.language,
    };
    if (rec.verdict) payload.verdict = rec.verdict;
    // never echo audio back
    return new Response(JSON.stringify(payload), {
      headers: { ...CORS, "content-type": "application/json" },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ ok: false, error: "Request not found." }), {
      status: 404,
      headers: { ...CORS, "content-type": "application/json" },
    });
  }
});
