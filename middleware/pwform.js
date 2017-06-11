function pwformMW(password) {
	return function(req, res, next) {
		if (req.query.password !== password) {
			let message = "";

			if (req.query.password) {
				message = "Incorrect password, please try again";
				console.log("Failed password attempt from " + req.ip);
			}

			res.status(403);
			res.render("pwform", { message: message });
		}
		else {
			next();
		}
	};
}

module.exports = pwformMW;
