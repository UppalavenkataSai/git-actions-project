const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    service: "github-actions-ci-cd-demo",
    status: "healthy",
    environment: process.env.NODE_ENV || "dev",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/info", (req, res) => {
  res.json({
    version: "1.0.0",
    maintainer: "DevOps Team",
    pipeline: "GitHub Actions"
  });
});

// ✅ Export the real express app (not a function)
module.exports = app;

// ✅ Only start server if file run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

