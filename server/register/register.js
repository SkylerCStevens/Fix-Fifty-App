const router = require("express").Router();
const User = require("../../models/user.model");

router.post("/", (req, res) => {
  User.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
