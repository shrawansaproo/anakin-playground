DevIntel Signal Matrix · Anakin API Edition
============================================

Understand what developers are talking about, what is trending, and what actually
matters across Substack, Dev.to, Stack Overflow, GitHub, and Hacker News.

This project uses the Anakin API with a local Node proxy to avoid browser CORS
issues and keep your API key secure.


What This Does
==============

  Signal to Noise Ratio (SNR)  ·  Filters useful insights from noise
  Topic Velocity               ·  Shows what is gaining traction right now
  Community Sentiment          ·  Captures how developers feel about topics


Why a Proxy Is Used
===================

Browsers block direct requests to the Anakin API due to CORS restrictions.

Request flow:

  Browser  →  localhost:3000/api/chat  →  api.anakin.ai

  ◆  API key stays on your machine
  ◆  No external proxy or backend needed
  ◆  Simple local setup


Quick Start
===========


1 · Clone the Project
---------------------

  git clone <your-repo-url>
  cd devintel


2 · Add Your API Key
--------------------

  cp .env.example .env

Open the file and set:

  ANAKIN_API_KEY=sk-your-key-here

You can also enter the key directly in the UI.


3 · Check Node Installation
----------------------------

  node -v

If Node is not installed, download it from https://nodejs.org


4 · Run the Server
------------------

  node server.js

Expected output:

  DevIntel Signal Matrix running at http://localhost:3000


5 · Open in Browser
--------------------

  http://localhost:3000


6 · Connect Anakin
------------------

  ▸  Paste your API key
  ▸  Select a model
  ▸  Click Test Connection
  ▸  Save


Project Structure
=================

  devintel/
  ├── index.html       UI
  ├── server.js        Node proxy and static server
  ├── package.json
  ├── .env.example
  ├── .gitignore
  └── README.md


Models
======

  claude-sonnet-4    ·  Best balance of speed and capability
  claude-opus-4      ·  Most capable, for complex analysis
  claude-haiku       ·  Fast and lightweight
  gpt-4o             ·  Strong general-purpose performance
  gpt-4o-mini        ·  Fast and low cost


Troubleshooting
===============

  ◆  Cannot reach proxy      →  Run node server.js
  ◆  Page not loading        →  Use http://localhost:3000
  ◆  Invalid key             →  Regenerate from Anakin dashboard
  ◆  Rate limit              →  Wait and retry
  ◆  Node not found          →  Install Node from nodejs.org


How to Use It
=============

  ▸  Compare signals across platforms to spot cross-community patterns
  ▸  Track velocity to catch trends before they peak
  ▸  Use sentiment to validate ideas and gauge developer reception


License
=======

MIT
