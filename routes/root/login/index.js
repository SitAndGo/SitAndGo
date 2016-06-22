const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
	res.render("login", {
		title: "login",
		partials: {
			header: "header",
			footer: "footer"
		}
	});
});

module.exports = router;
