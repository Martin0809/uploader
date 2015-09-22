var express = require('express');
var multer = require('multer');
var upload = multer({dest: "public/images/uploads"});
var path = require('path');
var fs = require('fs');

var app = express();
var port = process.env.PORT || 3000;

app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('public'));
app.listen(port);

console.log('uploader is started on port ' + port);

app.get('/', function (req, res) {
	res.render('index', {title: 'uploader'});
});

app.post('/uploader', upload.single("files0"), function (req, res) {
	var file = req.file;
	var newFileName = Date.now() + "." + file.originalname.split('.')[1];
	fs.readFile(file.path, function (err, data) {
		if(err) res.send('读文件操作失败');
		else {
			fs.writeFile("public/images/" + newFileName, data, function (err) {
				if(err) res.send('写文件操作失败');
				else {
					res.json({
						status: "1",
						data: {
							url: "images/" + newFileName,
						}
					})
				}
			})
		}
	})
});