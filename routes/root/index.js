const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
	res.render("index", {
		title: "Sit And Go",
		partials: {
			header: "header",
			footer: "footer"
		}
	});
});

module.exports = router;
