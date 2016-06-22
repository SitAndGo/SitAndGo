const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/", passport.authenticate("twitter", { failureRedirect: "/login" }), (req, res) => {
    res.redirect("/");
});

module.exports = router;
