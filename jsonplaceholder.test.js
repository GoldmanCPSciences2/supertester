const request = require("supertest");
const url = request("https://jsonplaceholder.typicode.com");

describe("json placeholder api test", () => {
  let data = {
    stuff: 27,
    otherstuff: "stupid stuff",
    morestuff: 2.7,
  };

  it("can get a comment", (done) => {
    url.get("/posts/1/comments").expect(200, done);
  });

  it("can get some photos", (done) => {
    url
      .post("/albums/1/photos")
      .send(data)
      .set("Accept", "application/json")
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it("can get a users albums", (done) => {
    url.get("/users/1/albums").expect(200, done);
  });

  it("can get a to do list", (done) => {
    url.get("/users/1/todos").expect(200, done);
  });

  it("can get a post", (done) => {
    url.get("/users/1/posts").expect(200, done);
  });
});
