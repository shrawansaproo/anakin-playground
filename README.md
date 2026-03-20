# DevIntel — Signal Matrix (Anakin API Edition)

> AI-powered dev intelligence across **Substack · Dev.to · Stack Overflow · GitHub · Hacker News**
> Uses **Anakin API** via a **local Node proxy** (solves browser CORS)

---

## Why a proxy?

Anakin's API doesn't send CORS headers for direct browser requests.
The proxy fixes this cleanly:

```
Browser → localhost:3000/api/chat → api.anakin.ai
```

Your key never touches any third-party server — only your machine and Anakin.

---

## Quick Start

### 1. Get your Anakin API key
1. Go to **https://app.anakin.ai** → sign in
2. **Settings → API Keys → Create New Key**
3. Copy the key (starts with `sk-`)

### 2. (Optional) Set key in .env
```bash
cp .env.example .env
# Edit .env and set ANAKIN_API_KEY=sk-your-key-here
```
Or skip this — you can enter the key directly in the browser UI.

### 3. Start the server
```bash
node server.js
```

Output:
```
╔══════════════════════════════════════════════╗
║     DevIntel — Signal Matrix  (Anakin)       ║
╠══════════════════════════════════════════════╣
║  Local:   http://localhost:3000              ║
║  API Key: ✓ loaded from .env                 ║
╚══════════════════════════════════════════════╝
```

### 4. Open in browser
```
http://localhost:3000
```

### 5. Configure in the UI modal
- Paste your Anakin key
- Pick a model
- Click **Test Connection** → **Save & Connect**

---

## File structure

```
devintel/
├── index.html      ← full dashboard UI
├── server.js       ← Node proxy + static file server (zero deps)
├── package.json    ← project metadata
├── .env.example    ← copy to .env and add your key
├── .gitignore
└── README.md
```

---

## Models via Anakin

| Model | Notes |
|---|---|
| `claude-sonnet-4-20250514` | Best balance ✅ |
| `claude-opus-4-20250514` | Most capable |
| `claude-haiku-4-5-20251001` | Fastest / cheapest |
| `gpt-4o` | OpenAI option |
| `gpt-4o-mini` | OpenAI fast/cheap |

---

## Troubleshooting

| Error | Fix |
|---|---|
| `Cannot reach proxy` | Run `node server.js` first |
| `Failed to fetch` | Make sure URL is `http://localhost:3000` not `file://` |
| `401 Invalid key` | Regenerate key at app.anakin.ai |
| `429 Rate limit` | Wait 30s and retry |
| Proxy error on startup | Make sure Node.js ≥ 14 is installed |

---

## How the Signal Matrix metrics work

- **SNR (Signal-to-Noise Ratio)** — quality of useful signal vs. noise per platform
- **Topic Velocity** — how fast AI/LLM topics are gaining traction right now
- **Community Sentiment** — net positive/negative lean of the developer community

---

## License
MIT
