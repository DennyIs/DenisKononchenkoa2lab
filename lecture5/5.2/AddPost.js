var express = require("express")
var url = require("url")
var mysql = require("mysql")
var bodyParser = require("body-parser")

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express()
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "posts"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);
app.get('/', function(req, res) {
	 con.query("SELECT * FROM poststable", function (err, result, fields){
        if (err) throw err;
        console.log(result);
        console.log(fields);
        text = "<html><head><title>Новостной портал</title><h1 align=\"center\">Публикация статьи</h1><script src=\"AddPost.js\"></script><link rel=\"stylesheet\" href=\"style.css\" media=\"screen\" type=\"text/css\" /><ul><li><a href=\"/\">Новости</a></li><li><a href=\"./admin_panel\">Администратор</a></li></ul><meta charset=\"UTF-8\"></head><body><table align=\"center\" border=\"1\">";
        for (i=0; i<result.length; i++) {
            text += "<tr><td>" + result[i].title + "</td><td>" + result[i].desc + "</td></tr>";
        }
        text += "</table></body></html>";
        res.write(text);
        res.end();
    });
    });
app.get('/admin_panel', function(req, res){
	res.render('admin_panel.html')
})
app.post('/admin_panel', urlencodedParser, function(req, res){
	if (!req.body) return res.sendStatus(400);
	console.log(req.body);
	var title = req.body.title;
	var desc = req.body.desc;
	con.query("INSERT INTO poststable(`title`, `desc`) VALUES(" + con.escape(title) + "," + con.escape(desc) + ")", function (err, result) {
        if (err) throw err;
	})
	res.render('adding_success.html', {data: req.body})
})
setInterval(function () {
    con.query('SELECT 1');
}, 5000);
app.use(express.static(__dirname + '/'));

app.listen(8080);