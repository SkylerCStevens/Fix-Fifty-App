const router = require("express").Router();
const passport = require("passport");
// authenticate google login
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

module.exports = router;
