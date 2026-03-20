DevIntel Signal Matrix · Anakin API Edition
============================================

  Understand what developers are talking about, what is trending, and what
  actually matters across Substack, Dev.to, Stack Overflow, GitHub, and
  Hacker News. Built on the Anakin API with a local Node proxy to keep your
  key secure and bypass browser CORS restrictions.


What This Does
==============

  ◆  Signal to Noise Ratio (SNR)  ·  Filters useful insights from noise
  ◆  Topic Velocity               ·  Shows what is gaining traction right now
  ◆  Community Sentiment          ·  Captures how developers feel about topics


Why a Proxy Is Used
===================

  Browsers block direct requests to the Anakin API due to CORS restrictions.
  A lightweight local Node server handles all API communication instead.

  Request flow

    Browser  →  localhost:3000/api/chat  →  api.anakin.ai

  ◆  API key stays on your machine
  ◆  No external proxy or backend needed
  ◆  Simple one-command local setup


Project Structure
=================

  devintel/
  ├── index.html      ·  UI
  ├── server.js       ·  Node proxy and static server
  ├── package.json    ·  Dependencies
  ├── .env.example    ·  API key template
  ├── .gitignore
  └── README.md


Models
======

  claude-sonnet-4   ·  Best balance of speed and capability
  claude-opus-4     ·  Most capable, for deep analysis
  claude-haiku      ·  Fast and lightweight
  gpt-4o            ·  Strong general-purpose performance
  gpt-4o-mini       ·  Fast and low cost


Quick Start
===========

  Step 1  ·  Clone the project
  ─────────────────────────────
    git clone <your-repo-url>
    cd devintel


  Step 2  ·  Add your API key
  ────────────────────────────
    cp .env.example .env

  Open .env and set:

    ANAKIN_API_KEY=sk-your-key-here

  You can also paste the key directly in the UI at any time.


  Step 3  ·  Check Node installation
  ────────────────────────────────────
    node -v

  Not installed? Download from https://nodejs.org


  Step 4  ·  Run the server
  ──────────────────────────
    node server.js

  Expected output:

    DevIntel Signal Matrix running at http://localhost:3000


  Step 5  ·  Open in browser
  ───────────────────────────
    http://localhost:3000


  Step 6  ·  Connect Anakin
  ──────────────────────────
    ▸  Paste your API key
    ▸  Select a model
    ▸  Click Test Connection
    ▸  Save


How to Use It
=============

  ▸  Compare signals across platforms to spot cross-community patterns
  ▸  Track velocity to catch trends before they peak
  ▸  Use sentiment to validate ideas and gauge developer reception


Troubleshooting
===============

  Issue                   Fix
  ──────────────────────  ──────────────────────────────────────
  Cannot reach proxy      Run node server.js
  Page not loading        Use http://localhost:3000
  Invalid API key         Regenerate from the Anakin dashboard
  Rate limit hit          Wait briefly and retry
  Node not found          Install from nodejs.org


License
=======

  MIT
