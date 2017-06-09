const geoip = require("geoip-lite");

function locationMW(req, res, next) {
	req.location = geoip.lookup("98.116.10.64");
	next();
}

module.exports = locationMW;
