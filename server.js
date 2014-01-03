var http = require('http');
var fs = require('fs');
var chat = require('./js/chat');

http.createServer(function  (req,res) {

	switch(req.url){
		case '/':
			fs.readFile("index.html", function  (err, data) {
				if (err) throw err;
				res.end(data);
			});
			break;

		case '/subscribe':
			chat.subscribe(req,res);
			break;

		case '/publish':
		chat.publish("...");
			break;

		default:
			res.statusCode = 404;
			res.end("Not FOUND");
	}

}).listen(3000);