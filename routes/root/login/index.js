const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
	res.render("login", {
		login: true,
		title: "login",
		partials: {
			header: "header",
			footer: "footer"
		}
	});
});

module.exports = router;
