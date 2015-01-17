var express = require('express'),
	app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res){
	res.render('index.jade');
});

app.listen(8010);