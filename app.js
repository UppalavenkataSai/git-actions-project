const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  it("returns correct health payload", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toBe(200);
    expect(res.body.service).toBe("github-actions-ci-cd-demo");
    expect(res.body.status).toBe("healthy");
    expect(res.body.environment).toBeDefined();
    expect(res.body.timestamp).toBeDefined();
  });
});

describe("GET /api/info", () => {
  it("returns pipeline info", async () => {
    const res = await request(app).get("/api/info");

    expect(res.statusCode).toBe(200);
    expect(res.body.version).toBe("1.0.0");
    expect(res.body.pipeline).toBe("GitHub Actions");
  });
});

