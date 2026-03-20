# DevIntel Signal Matrix
### Anakin API Edition

<img width="1909" height="840" alt="image" src="https://github.com/user-attachments/assets/055d2de9-bd9a-49fa-8c85-fdfc67781460" />

> Understand what developers are talking about, what is trending, and what actually matters — across Substack, Dev.to, Stack Overflow, GitHub, and Hacker News.


## Overview

DevIntel uses the **Anakin API** with a local Node.js proxy to aggregate and analyze developer signals. It filters noise, tracks topic velocity, and surfaces community sentiment in one place.

| Feature | What It Does |
|---|---|
| Signal to Noise Ratio (SNR) | Filters useful insights from noise |
| Topic Velocity | Shows what is gaining traction right now |
| Community Sentiment | Captures how developers feel about topics |

## Why a Proxy?

Browsers cannot make direct requests to the Anakin API due to CORS restrictions. A lightweight local Node.js server sits in between and handles all API calls.

```
Browser  →  localhost:3000/api/chat  →  api.anakin.ai
```

- Your API key never leaves your machine
- No external proxy or third-party backend
- One command to run, nothing to deploy


## Requirements

- [Node.js](https://nodejs.org) v18 or later
- An [Anakin API](https://anakin.io/) key


## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd devintel
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure your API key

```bash
cp .env.example .env
```

Open `.env` and add your key:

```env
ANAKIN_API_KEY=sk-your-key-here
```

> You can also paste the key directly in the UI — no restart needed.

### 4. Start the server

```bash
node server.js
```

You should see:

```
DevIntel Signal Matrix running at http://localhost:3000
```

### 5. Open the app

```
http://localhost:3000
```

### 6. Connect Anakin in the UI

1. Paste your API key
2. Select a model (see options below)
3. Click **Test Connection**
4. Click **Save**



## Supported Models

| Model | Best For |
|---|---|
| `claude-sonnet-4` | Best balance of speed and capability |
| `claude-opus-4` | Most capable — deep analysis |
| `claude-haiku` | Fast and lightweight |
| `gpt-4o` | Strong general-purpose performance |
| `gpt-4o-mini` | Fast and low cost |


## How to Use It

- **Compare signals** across platforms to spot cross-community patterns
- **Track velocity** to catch trends before they peak
- **Use sentiment** to validate ideas and gauge developer reception



## Project Structure

```
devintel/
├── index.html        UI
├── server.js         Node proxy and static file server
├── package.json      Dependencies and scripts
├── .env.example      API key template
├── .gitignore
└── README.md
```



## Troubleshooting

| Problem | Fix |
|---|---|
| Cannot reach proxy | Run `node server.js` |
| Page not loading | Make sure you are on `http://localhost:3000` |
| Invalid API key | Regenerate your key from the Anakin dashboard |
| Rate limit error | Wait a moment and retry |
| Node not found | Install from [nodejs.org](https://nodejs.org) |


## License

MIT
