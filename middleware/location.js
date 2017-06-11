const geoip = require("geoip-lite");

function locationMW(req, res, next) {
	req.location = geoip.lookup("2600:1017:b429:21a0:1161:a746:9fc1:1344");
	next();
}

module.exports = locationMW;
