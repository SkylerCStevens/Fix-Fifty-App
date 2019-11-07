const router = require("express").Router();
const User = require("../../models/user.model");
const passport = require("passport")

router.post("/", (req, res) => {
  
  const user = new User({
    username: req.body.username,
    password: req.body.password
  })

  req.login(user, (err) => {
    if (err) {
      console.log(err)
    } else {
      passport.authenticate("local")(req, res, () => {
        res.send(user);
      });
    }
  })
});

router.delete("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // User.deleteOne({ email: username }, (err, foundUser) => {
  //   if (err) {
  //     res.json(err);
  //   } else {
  //     // Load hash from your password DB.
  //     if (foundUser) {
  //       bcrypt.compare(password, foundUser.password, (err, result) => {
  //         if (result === true) {
  //           res.send("Deleted user")
  //         } else {
  //           res.status(404).send("Password is incorrect")
  //         }
  //       });
  //     } else {
  //       res.status(404).send("User not found")
  //     }
      
  //   }
  // });
});

module.exports = router;
