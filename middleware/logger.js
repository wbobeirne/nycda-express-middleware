function loggerMW(req, res, next) {
	console.log("Received " + req.method + " request at " + req.path);
	next();
}

module.exports = loggerMW;
