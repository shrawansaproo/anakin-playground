# DevIntel Signal Matrix Anakin API Edition

Understand what developers are talking about what is trending and what actually matters across Substack Devto Stack Overflow GitHub and Hacker News

This project uses the Anakin API with a local Node proxy to avoid browser CORS issues and keep your API key secure


## What this does

Signal to Noise Ratio SNR filters useful insights from noise  
Topic Velocity shows what is gaining traction right now  
Community Sentiment captures how developers feel about topics  

## Why a proxy is used

Browsers block direct requests to the Anakin API due to CORS

Flow

```
Browser → localhost 3000 api chat → api anakin ai
```

API key stays on your machine  
No external proxy or backend needed  
Simple local setup  

## Quick start build and run

### 1 Clone the project

```bash
git clone <your repo url>
cd devintel
```

### 2 Add your API key optional

```bash
cp .env.example .env
```

Edit the file and add

```
ANAKIN_API_KEY=sk your key here
```

You can also enter the key in the UI

### 3 Check Node installation

```bash
node -v
```

If not installed download from https://nodejs.org

### 4 Run the server

```bash
node server.js
```

Expected output

```
DevIntel Signal Matrix running at
http://localhost:3000
```

### 5 Open in browser

```
http://localhost:3000
```

### 6 Connect Anakin

Paste API key  
Select model  
Click Test Connection  
Save  

## Project structure

```
devintel
│
├── index.html      UI
├── server.js       Node proxy and static server
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Models

claude sonnet 4 best balance  
claude opus 4 most capable  
claude haiku fast and light  
gpt 4o strong general use  
gpt 4o mini fast and low cost  

## Troubleshooting

Cannot reach proxy run node server.js  
Page not loading use http localhost 3000  
Invalid key regenerate from Anakin  
Rate limit wait and retry  
Node not found install Node  

## How to use it

Compare signals across platforms  
Track velocity to catch trends early  
Use sentiment to validate ideas  

## License

MIT
