let totalTraffic = 0;
let pathTraffic = {};

module.exports = function(req, res, next) {
	if (!pathTraffic[req.path]) {
		pathTraffic[req.path] = 0;
	}

	pathTraffic[req.path]++;
	totalTraffic++;

	req.pathTraffic = pathTraffic;
	req.totalTraffic = totalTraffic;
	next();
};
