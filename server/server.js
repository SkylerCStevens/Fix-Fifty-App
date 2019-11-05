require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();
const port = process.env.PORT || 5000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// checking the node_env
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // handling the index route
  app.get("/", (req, res) => {
    // serving the complied react application
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}
// connection to database
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection is live ");
});
mongoose.set("useFindAndModify", false);

const register = require("./register/register");
app.use("/register", register);

const login = require("./login/login");
app.use("/login", login);

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       callbackURL: "http://localhost:3000/",
//       userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
//     },
//     (accessToken, refreshToken, profile, cb) => {
//       User.findOrCreate({ googleId: profile.id }, (err, user) => {
//         return cb(err, user);
//       });
//     }
//   )
// );

app.listen(port, () => console.log(`Listening on port ${port}`));
