require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

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
