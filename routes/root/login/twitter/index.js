const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/", passport.authenticate("twitter"));

module.exports = router;
