require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const locationMW = require("./middleware/location");
const qpMW = require("./middleware/queryPassword");
const trafficMW = require("./middleware/traffic");
const pwFormMW = require("./middleware/pwform");

const cookieSecret = process.env.COOKIE_SECRET || "dev";

app.set("view engine", "ejs");
app.set("json spaces", 2);
app.use(cookieParser(cookieSecret));
app.use(session({ secret: cookieSecret }));
app.use(trafficMW);

app.get("/", function(req, res) {
	res.send("Hello!");
});

app.get("/location", locationMW, function(req, res) {
	res.send("Hello " + req.location.region);
});

app.get("/secret", qpMW("don"), function(req, res) {
	res.send("You discovered my hidden page!");
});

app.get("/traffic", pwFormMW(process.env.PASSWORD), function(req, res) {
	res.json({
		totalTraffic: req.totalTraffic,
		pathTraffic: req.pathTraffic,
		session: {
			totalTraffic: req.session.totalTraffic,
			pathTraffic: req.session.pathTraffic,
		},
	});
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on port " + port);
});
