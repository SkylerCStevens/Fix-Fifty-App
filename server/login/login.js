const router = require("express").Router()
const User = require("../../models/user.model");


router.post("/", (req,res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({email: username}, (err, foundUser) => {
    if (err) {
      res.json(err)
    } else {
      if (foundUser.password === password) {
       res.send('your authenicated') 
      } else {
        res.send("wrong password")
      }
    }
  })
})

module.exports = router;