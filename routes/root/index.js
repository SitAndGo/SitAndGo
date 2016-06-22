const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
	res.render("home", {
		login: !req.user,
		logout: !!req.user,
		title: "Sit And Go",
		message: req.user ? "Hello, " + req.user.displayName  + " !" : "",
		partials: {
			header: "header",
			footer: "footer"
		}
	});
});

module.exports = router;
