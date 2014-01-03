var http = require('http');
var fs = require('fs');

http.createServer(function  (req,res) {

	switch(req.url){
		case '/':
			fs.readFile("index.html", function  (err, data) {
				if (err) throw err;
				res.end(data);
			});
			break;

		case '/subscribe':
			break;

		case '/publish':
			break;

		default:
			res.statusCode = 404;
			res.end("Not FOUND");
	}

}).listen(3000);