const expect = require("chai").expect;
const request = require("request");

describe("Checking if hashing is correct", () => {
  before(() => {
    request.post({
      url: "http://localhost:5000/register",
      form: {
        firstName: "Kurt",
        lastName: "Kobain",
        email: "hi@gmail.com",
        password: "password123"
      }
    });
  });

  it("POST - Registering in a correct user", done => {
    request.post(
      {
        url: "http://localhost:5000/register",
        form: {
          firstName: "Marshall",
          lastName: "Mathers",
          email: "mm@gmail.com",
          password: "password123"
        }
      },
      (err, httpResponse, body) => {
        expect(body).to.equal("Marshall Mathers has signed up");
        done();
      }
    );
  });

  it("POST - Login in a correct user", done => {
    request.post(
      {
        url: "http://localhost:3000/login",
        form: {
          username: "hi@gmail.com",
          password: "password123"
        }
      },
      (err, httpResponse, body) => {
        expect(body).to.equal("Logged in");
        done();
      }
    );
  });

  it("POST - Login in an incorrect user password", done => {
    request.post(
      {
        url: "http://localhost:3000/login",
        form: {
          username: "hi@gmail.com",
          password: "password12"
        }
      },
      (err, httpResponse, body) => {
        expect(body).to.equal("Password is incorrect");
        done();
      }
    );
  });

  it("POST - Login in an incorrect user username", done => {
    request.post(
      {
        url: "http://localhost:3000/login",
        form: {
          username: "hi@gmail",
          password: "password12"
        }
      },
      (err, httpResponse, body) => {
        expect(body).to.equal("User not found");
        done();
      }
    );
  });

  after(() => {
    request.delete({
      url: "http://localhost:5000/login",
      form: {
        username: "hi@gmail.com",
        password: "password123"
      }
    });
  });
});
