const Express = require("express");
const app = Express();
const loggerMW = require("./middleware/logger");
const locationMW = require("./middleware/location");
const qpMW = require("./middleware/queryPassword");

app.use(loggerMW);

app.get("/", function(req, res) {
	res.send("Hello!");
});

app.get("/location", locationMW, function(req, res) {
	res.send("Hello " + req.location.region);
});

app.get("/secret", qpMW("don"), function(req, res) {
	res.send("You discovered my hidden page!");
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on port " + port);
});
