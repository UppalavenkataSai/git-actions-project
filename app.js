const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    service: "github-actions-ci-cd-demo",
    status: "v2-active",
    environment: process.env.NODE_ENV || "prod",
    version: "2.0.0",
    deployedBy: "github-actions",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/info", (req, res) => {
  res.json({
    version: "2.0.0",
    maintainer: "DevOps Team",
    pipeline: "GitHub Actions",
    build: "CI/CD Enabled"
  });
});

// Export the real express app
module.exports = app;

// Start server only if run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

