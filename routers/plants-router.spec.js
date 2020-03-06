const server = require("../api/server");
const request = require("supertest");
const db = require("../database/dbConfig.js");

describe("GET /api/1/plants", () => {
  it("Returns 200 OK", async () => {
    const token = await request(server)
      .post("/api/auth/login")
      .send({
        username: "test",
        password: "testing"
      })
      .then(res => {
        return res.body.token;
      });
    return await request(server)
      .get("/api/1/plants")
      .set("Authorization", token)
      .expect(200);
  });
});

describe("POST /api/1/plants", () => {
  it("Returns 201 Created", async () => {
    const token = await request(server)
      .post("/api/auth/login")
      .send({
        username: "test",
        password: "testing"
      })
      .then(res => {
        return res.body.token;
      });
    return await request(server)
      .post("/api/1/plants")
      .set("Authorization", token)
      .send({
        nickname: "Ava",
        species: "Aloe Vera",
        h2o_frequency: "Every 2 days"
      })
      .expect(201);
  });

  beforeEach(async () => {
    await db("plants").truncate();
  });
});

