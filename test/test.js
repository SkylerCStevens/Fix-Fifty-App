const expect = require("chai").expect;
const request = require("request");

describe("Checking if hashing is correct", () => {
  before(() => {
    request.post({
      url: "http://localhost:3000/register",
      form: {
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
    request.delete({
      url: "http://localhost:5000/login",
      form: {
        username: "mm@gmail.com",
        password: "password123"
      }
    });
  });
});

//Test Getting User Info Back As Object

//Test Creating User

//Test Deleting User

//Test Updating User

//Test for Error for Incorrect Data in User

//Test for Error for Incorrect User Id on Delete

//Test Getting Jobs Back As Object

//Test Creating Jobs

//Test Deleting Jobs

//Test Updating Jobs

//Test for Error for Incorrect Data in Jobs

//Test for Error for Incorrect Job Id on Delete

//Test Getting Companies Back As Object

//Test Creating Company

//Test Deleting Company

//Test Updating Company

//Test for Error for Incorrect Data Company

//Test for Error for Incorrect Company Id on Delete

//Test 404

//Test 200 for home page

//Test login
