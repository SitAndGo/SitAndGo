const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
	console.log("logout " + req.user.username);
	req.logout();
	res.redirect("/");
});

module.exports = router;
