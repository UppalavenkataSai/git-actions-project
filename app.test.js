const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  it("returns healthy response", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("healthy");
    expect(res.body).toHaveProperty("service");
    expect(res.body).toHaveProperty("environment");
  });
});

