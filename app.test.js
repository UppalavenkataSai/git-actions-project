const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  it("returns correct v2 payload", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toBe(200);
    expect(res.body.service).toBe("github-actions-ci-cd-demo");
    expect(res.body.status).toBe("v2-active");
    expect(res.body.version).toBe("2.0.0");
    expect(res.body.deployedBy).toBe("github-actions");
  });
});

describe("GET /api/info", () => {
  it("returns pipeline info", async () => {
    const res = await request(app).get("/api/info");

    expect(res.statusCode).toBe(200);
    expect(res.body.version).toBe("2.0.0");
    expect(res.body.pipeline).toBe("GitHub Actions");
    expect(res.body.build).toBe("CI/CD Enabled");
  });
});

