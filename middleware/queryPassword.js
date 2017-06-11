function queryPasswordMW(password) {
	return function(req, res, next) {
		if (req.query.password !== password) {
			res.status(403);
			res.send("Bad password!");
		}
		else {
			next();
		}
	};
}

module.exports = queryPasswordMW;
