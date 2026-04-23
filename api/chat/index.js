const { AzureOpenAI } = require('openai');
const knowledgeBase = require('../knowledge-base.json');

const SYSTEM_PROMPT = `Du er en venlig og hjælpsom assistent for FAVNA Dalum Dyreklinik i Odense.

Regler:
- Svar KUN baseret på den medfølgende information fra klinikken.
- Svar altid på dansk.
- Vær venlig, professionel og kortfattet.
- Forstå brugerens intention: Hvis de spørger generelt om et emne (f.eks. "jeg vil have en hund"), så giv relevant information om hvad klinikken tilbyder for det emne (vaccinationer, sundhedsundersøgelser, FAVNA Plan osv.) — spring IKKE direkte til booking.
- Henvis KUN til booking (https://my.provet.com/favna-dyreklinikker/favna-dalum-dyreklinik) når brugeren tydeligt beder om at bestille en tid.
- Nævn FAVNA Plan med pris og fordele når det er relevant, men kun henvis til tilmeldingslinket hvis brugeren aktivt vil tegne en plan.
- Hvis du ikke kan finde svaret i den medfølgende kontekst, bed venligst kunden kontakte klinikken på telefon +45 66 13 23 86 eller email dalum@favna.dk.
- Brug aldrig information der ikke kommer fra den medfølgende kontekst.
- Formater svar med korte afsnit. Brug punktlister når det er relevant.
- Formater alle links som markdown: [linktekst](url) — skriv ALDRIG bare en rå URL.
- Nævn aldrig at du er en AI eller at du har en "kontekst". Svar som om du er klinikkens digitale assistent.

Her er information om klinikken:

${knowledgeBase.content}`;

const MAX_HISTORY = 8;
const MAX_MESSAGE_LENGTH = 500;

module.exports = async function (context, req) {
  const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
  const apiKey = process.env.AZURE_OPENAI_API_KEY;
  const deployment = process.env.AZURE_OPENAI_DEPLOYMENT || 'gpt-4-1-nano';

  if (!endpoint || !apiKey) {
    context.res = {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Azure OpenAI is not configured' }),
    };
    return;
  }

  const body = req.body;
  if (!body || !body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
    context.res = {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'messages array is required and must not be empty' }),
    };
    return;
  }

  // Validate and sanitize messages
  const validMessages = body.messages
    .filter((m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.trim().length > 0)
    .map((m) => ({
      role: m.role,
      content: m.content.trim().slice(0, MAX_MESSAGE_LENGTH),
    }));

  if (validMessages.length === 0) {
    context.res = {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'No valid messages provided' }),
    };
    return;
  }

  // Keep only last N messages
  const recentMessages = validMessages.slice(-MAX_HISTORY);

  try {
    const client = new AzureOpenAI({
      endpoint,
      apiKey,
      apiVersion: '2024-10-21',
    });

    const completion = await client.chat.completions.create({
      model: deployment,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...recentMessages,
      ],
      max_tokens: 800,
      temperature: 0.3,
    });

    const reply = completion.choices[0]?.message?.content || 'Beklager, jeg kunne ikke generere et svar. Kontakt venligst klinikken direkte.';

    context.res = {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply }),
    };
  } catch (err) {
    context.log('Azure OpenAI error:', err.message);
    context.res = {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Der opstod en fejl. Prøv venligst igen.' }),
    };
  }
};
