export default async (request, context) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  const apiKey = Netlify.env.get("OPENAI_API_KEY");
  if (!apiKey) {
    return new Response("Missing OPENAI_API_KEY environment variable in Netlify.", { status: 500 });
  }
  const sdp = await request.text();
  if (!sdp || sdp.length > 200000) {
    return new Response("Invalid session offer.", { status: 400 });
  }
  const form = new FormData();
  form.set("sdp", sdp);
  form.set("session", JSON.stringify({
    type: "realtime",
    model: "gpt-realtime-2.1",
    instructions: "You are VolstarTutor, a warm, patient English speaking tutor. Have a natural spoken conversation with the learner. Speak clearly and fairly briefly, then invite them to respond. Gently correct important grammar mistakes by saying the natural version and a short simple explanation, without interrupting every sentence. Adapt to the learner's level and never shame them. The learner may speak in English; encourage them to keep speaking.",
    audio: { output: { voice: "marin" } }
  }));
  try {
    const upstream = await fetch("https://api.openai.com/v1/realtime/calls", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}` },
      body: form
    });
    const answer = await upstream.text();
    return new Response(answer, {
      status: upstream.status,
      headers: { "Content-Type": "application/sdp", "Cache-Control": "no-store" }
    });
  } catch {
    return new Response("Could not reach the realtime voice service.", { status: 502 });
  }
};
