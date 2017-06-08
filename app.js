const Express = require("express");
const app = Express();

const port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on port " + port);
});
