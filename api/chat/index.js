const { OpenAI } = require("openai");

const requestCounts = new Map();
const RATE_LIMIT_WINDOW_MS = 60000;
const MAX_REQUESTS_PER_WINDOW = 10;

const SYSTEM_PROMPT = "Du er en juridisk assistent for LexJuris i Viborg. YDELSER: Koberadgivning 5800 kr, Testamente fra 2495 kr. KONTAKT: 70 70 71 22, info@lexjuris.dk. Svar kort og dansk.";

function checkRateLimit(ip) {
  const now = Date.now();
  const userRequests = requestCounts.get(ip) || [];
  const recentRequests = userRequests.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) return false;
  recentRequests.push(now);
  requestCounts.set(ip, recentRequests);
  return true;
}

module.exports = async function (context, req) {
  context.log("Chat called");
  context.res = { headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type" }};
  if (req.method === "OPTIONS") { context.res.status = 200; context.res.body = ""; return; }
  try {
    const clientIp = req.headers["x-forwarded-for"] || "unknown";
    if (!checkRateLimit(clientIp)) { context.res.status = 429; context.res.body = JSON.stringify({ error: "For mange." }); return; }
    const { message, conversationHistory } = req.body || {};
    if (!message) { context.res.status = 400; context.res.body = JSON.stringify({ error: "Besked påkrævet." }); return; }
    const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
    const apiKey = process.env.AZURE_OPENAI_API_KEY;
    const deployment = process.env.AZURE_OPENAI_DEPLOYMENT;
    if (!endpoint || !apiKey || !deployment) { context.log.error("Missing config"); context.res.status = 500; context.res.body = JSON.stringify({ error: "Service fejl." }); return; }
    const client = new OpenAI({ apiKey, baseURL: endpoint + "openai/deployments/" + deployment, defaultQuery: { "api-version": "2024-08-01-preview" }, defaultHeaders: { "api-key": apiKey }});
    const messages = [{ role: "system", content: SYSTEM_PROMPT }];
    if (Array.isArray(conversationHistory)) { messages.push(...conversationHistory.slice(-10)); }
    messages.push({ role: "user", content: message });
    const result = await client.chat.completions.create({ model: deployment, messages, max_tokens: 800, temperature: 0.7 });
    const responseMessage = result.choices[0]?.message?.content;
    if (!responseMessage) throw new Error("No response");
    context.res.status = 200;
    context.res.body = JSON.stringify({ response: responseMessage, conversationId: context.invocationId, timestamp: new Date().toISOString() });
  } catch (error) {
    context.log.error("Error:", error);
    context.res.status = 500;
    context.res.body = JSON.stringify({ error: "Der opstod en fejl. Kontakt 70 70 71 22." });
  }
};
