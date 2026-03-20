const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static frontend
app.use(express.static(__dirname));

// Middleware
app.use(express.json());

// Health check (good for debugging)
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

// Main API route
app.get("/api/insights", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "product.json");

    const data = await fs.readFile(filePath, "utf-8");
    const parsed = JSON.parse(data);

    res.json(parsed);

  } catch (err) {
    console.error("❌ Error reading product.json:", err.message);

    res.status(500).json({
      error: "Failed to read product.json",
      details: err.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log("🚀 DevIntel Server Running");
  console.log(`👉 Local: http://localhost:${PORT}`);
  console.log(`👉 API:   http://localhost:${PORT}/api/insights`);
});