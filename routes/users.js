const router = require("express").Router();

let User = require("../models/user.model");

// Edit: allows user to update their info

router.put("/update/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.set(req.body);
    const result = await user.save();
    res.send(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//  Delete: delete account

router.delete("/delete/:id", async (req, res) => {
  try {
    const user = await User.remove({ _id: req.params.id });
    res.send(user);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;