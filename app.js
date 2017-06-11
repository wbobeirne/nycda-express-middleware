const Express = require("express");
const app = Express();
const locationMW = require("./middleware/location");
const qpMW = require("./middleware/queryPassword");
const trafficMW = require("./middleware/traffic");

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

app.get("/traffic", function(req, res) {
	res.send({
		totalTraffic: req.totalTraffic,
		pathTraffic: req.pathTraffic,
	});
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on port " + port);
});
