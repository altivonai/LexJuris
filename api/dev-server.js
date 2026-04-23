/**
 * Local dev server that wraps the Azure Functions chat handler.
 * Bypasses Azure Functions Core Tools (which has a known local bug).
 * Usage: node api/dev-server.js
 */
const http = require('http');
const path = require('path');
const fs = require('fs');

// Load env vars from local.settings.json
const settingsPath = path.join(__dirname, 'local.settings.json');
if (fs.existsSync(settingsPath)) {
  const settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));
  if (settings.Values) {
    for (const [key, value] of Object.entries(settings.Values)) {
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  }
}

// Load the handlers
const chatHandler = require('./chat/index.js');
const bookingHandler = require('./booking/index.js');

const PORT = 7071;

const server = http.createServer(async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Route to the correct handler
  let handler = null;
  if (req.url === '/api/chat' && req.method === 'POST') {
    handler = chatHandler;
  } else if (req.url === '/api/booking' && req.method === 'POST') {
    handler = bookingHandler;
  }

  if (handler) {
    // Read request body
    let body = '';
    for await (const chunk of req) {
      body += chunk;
    }

    let parsedBody;
    try {
      parsedBody = JSON.parse(body);
    } catch {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid JSON' }));
      return;
    }

    // Create a mock Azure Functions context
    const context = {
      invocationId: `local-${Date.now()}`,
      log: (...args) => console.log('[api]', ...args),
      res: {},
    };
    context.log.error = (...args) => console.error('[api:error]', ...args);

    // Create a mock request object
    const mockReq = {
      method: req.method,
      headers: req.headers,
      body: parsedBody,
    };

    try {
      await handler(context, mockReq);
      const status = context.res.status || 200;
      const headers = context.res.headers || { 'Content-Type': 'application/json' };
      res.writeHead(status, headers);
      res.end(typeof context.res.body === 'string' ? context.res.body : JSON.stringify(context.res.body || ''));
    } catch (err) {
      console.error('[dev-server] Handler error:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`\n  API dev server running on http://localhost:${PORT}`);
  console.log(`  Chat endpoint: http://localhost:${PORT}/api/chat\n`);
});
