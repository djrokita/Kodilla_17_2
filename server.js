var express = require('express');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function(request, response) {
	console.log('Otrzymałem żądanie GET do strony głównej');
	response.send('Hello GET!');
});

app.post('/add_user', function(request, response) {
	console.log('Otrzymałem żądanie POST do strony głównej');
	response.send('Hello POST!');
});
/*
app.post('/', function (req, res) {
    console.log('Otrzymałem żądanie POST do strony głównej');
    res.send('Hello POST!')
});
*/
app.delete('/del_user', function(request, response) {
	console.log('Otrzymałem żądanie DELETE do strony /del_user');
	response.send('Hello DELETE!');
});

app.get('/list_user', function(request, response) {
	console.log('Otrzymałem żądanie GET do strony /list_user');
	response.send('Strona z listą użytkowników');
});

app.get('/ab*cd', function(request, response) {
	console.log('Otrzymałem żądanie GET do strony /ab*cd');
	response.send('Wzór pasuje');
});

var server = app.listen(3000, function() {
	console.log('nasłuch na http://localhost:3000');
});