var express = require('express');
var app = express();
var fs = require('fs');




app.get('/register/:name', function(req, res) {
	fs.appendFile("names.txt", "\r\n"+req.params.name, function(err) {
		if(err) {
			return console.log(err);
		}
		console.log("Saved name")
		return res.redirect('https://login.live.com');
		
	});
});

app.listen(8080);
console.log("App listening on port 8080.");
