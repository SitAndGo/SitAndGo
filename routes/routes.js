const routes = (app) => {
	app.use("/", require("./root/index"));
	app.use("/login/", require("./root/login/index"));
	app.use("/logout/", require("./root/logout/index"));
	app.use("/login/twitter", require("./root/login/twitter/index"));
	app.use("/login/twitter/callback", require("./root/login/twitter/callback/index"));
};

module.exports = routes;
