const request = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig");

describe("POST to /register", () => {
  it("Returns in JSON format", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "test", password: "testing" });
    expect(res.type).toBe("application/json");
  });

  it("Returns in JSON format", async () => {
    await request(server)
      .post("/api/auth/register")
      .send({ username: "test", password: "testing" })
    expect(200);
  });
});

describe("POST to /login", () => {
  it("Returns 200 OK", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "test", password: "testing" });
    expect(res.status).toBe(200);
  });

  it("Generates token", async () => {
    const res = await request(server)
      .post("/api/auth/login")
      .send({ username: "test", password: "testing" });
    expect(res.body.token).toBeDefined();
  });
});
