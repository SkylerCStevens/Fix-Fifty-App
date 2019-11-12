require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const session = require("express-session");
const User = require("../models/user.model");

const app = express();
const port = process.env.PORT || 5000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// importing routes
const users = require('../routes/users')
app.use(users)

// checking the node_env
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // handling the index route
  app.get("/", (req, res) => {
    // serving the complied react application
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

// app.use(
//   session({
//     secret: "secret",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
//   })
// );

// Express session to use cookies
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
  })
);

// Initializing passport
app.use(passport.initialize());
// Allowing passport to use sessions
app.use(passport.session());

// connection to database
mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3000",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
    },
    (accessToken, refreshToken, profile, cb) => {
      User.findOrCreate({ googleId: profile.id }, (err, user) => {
        return cb(err, user);
      });
    }
  )
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection is live ");
});
mongoose.set("useFindAndModify", false);

const auth = require("./auth/auth")
app.use("/auth", auth);

const register = require("./register/register");
app.use("/register", register);

const login = require("./login/login");
app.use("/login", login);

const logout = require("./logout/logout");
app.use("/logout", login);

const job = require("./job/job");
app.use("/job", job);

app.listen(port, () => console.log(`Listening on port ${port}`));
