const router = require("express").Router();
const User = require("../../models/user.model");
const passport = require("passport");


router.post("/", (req, res) => {
  User.register(
    { username: req.body.username },
    req.body.password,
    (err, user) => {
      if (err) {
        console.log(err);
        console.log(req.body.password)
        console.log("hiiii")
        res.status(404).send(err.message);
      } else {
        passport.authenticate("local")(req, res, () => {
          res.send(user);
        });
      }
    }
  );
});

// router.delete("/", (req, res) => {
//   User.register(
//     { username: req.body.username },
//     req.body.password,
//     (err, user) => {
//       if (err) {
//         console.log(err);
//         console.log(req.body.password)
//         console.log("hiiii")
//         res.status(404).send(err.message);
//       } else {
//         passport.authenticate("local")(req, res, () => {
//           res.send(user);
//         });
//       }
//     }
//   );
// });

module.exports = router;
