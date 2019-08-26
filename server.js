
var express = require('express');
bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(express.static('css'));

app.set('view engine', 'pug');
app.set('views','./views');


app.get('/', function(req, res){
    res.render('index');
});

app.get('/auth/google', function (req, res) {
    res.render('google');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});