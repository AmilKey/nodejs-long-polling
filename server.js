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
			var body = '';
			req
				.on('readable', function  () {
					body +=req.read();

					if (body.length > 1e4) {
						res.statusCode = 413;
						res.end("Your message is too big");
					};
				})
				.on('end', function  () {
					try{
						body = JSON.parse(body);						
					}catch(e){
					 res.statusCode = 400;
					 res.end("Bad request");
					 return;
					}

					chat.publish(body.message);
					res.end("ok");
				});
			break;

		default:
			res.statusCode = 404;
			res.end("Not FOUND");
	}

}).listen(3000);