const router = require("express").Router();
const User = require("../../models/user.model");

const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/", (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    // Store hash in your password DB.
    User.create({
      ...req.body,
      password: hash
    })
      .then(() => res.send(`${req.body.firstName} ${req.body.lastName} has signed up`))
      .catch(err => res.status(500).json(err));
  });
});

module.exports = router;
