let totalTraffic = 0;
let pathTraffic = {};

module.exports = function(req, res, next) {
	// If this is the first time we're hitting this path,
	// set the path traffic to 0
	if (!pathTraffic[req.path]) {
		pathTraffic[req.path] = 0;
	}

	// If this is their first visit this session, set it to 0
	if (!req.session.totalTraffic) {
		req.session.totalTraffic = 0;
	}

	// If this is their first visit this session, set it to
	// empty object
	if (!req.session.pathTraffic) {
		req.session.pathTraffic = {};
	}

	// If this is their first visit this session TO THIS PATH
	// set path to 0
	if (!req.session.pathTraffic[req.path]) {
		req.session.pathTraffic[req.path] = 0;
	}

	pathTraffic[req.path]++;
	totalTraffic++;
	req.session.totalTraffic++;
	req.session.pathTraffic[req.path]++;

	req.pathTraffic = pathTraffic;
	req.totalTraffic = totalTraffic;
	next();
};
