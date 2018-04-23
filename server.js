var express = require('express');
var app = express();
var fs = require('fs');
var nodemailer = require('nodemailer');



var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'oliviadube87@gmail.com',
        pass: 'phishpass'
    }
});


const mailOptions = {
  from: 'oliviadube87@gmail.com', // sender address
  to: 'alexandre.bouillon@formind.fr', // list of receivers
  subject: 'Rapport clics', // Subject line
  html: '<p>Ci-jointe la liste des personnes ayant cliqué</p>',// plain text body
  attachments: [
        {   // utf-8 string as an attachment
            path: 'names.txt'
        }
   ]
};



app.get('/register/:name', function(req, res) {
	fs.appendFile("names.txt", "\r\n"+req.params.name, function(err) {
		if(err) {
			return console.log(err);
		}
		console.log("Saved name")
		transporter.sendMail(mailOptions, function (err, info) {
		   if(err)
		     console.log(err)
		   else
		     console.log(info);
		});
		return res.redirect('https://login.live.com');
		
	});
});

app.listen(8080);
console.log("App listening on port 8080.");
