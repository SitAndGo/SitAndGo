const routes = (app) => {
	app.use("/", require("./root/index"));
	app.use("/login/", require("./root/login/index"));
};

module.exports = routes;
