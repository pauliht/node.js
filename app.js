//Require Express
const express = require('express');

//Require books.json
const books = require('./books.json');

//Creare Express server
const app = express();

//filter author
app.get('/book/author/:author', (req, res) => {
	let chosen = books.filter((book) =>
		book.author.toLowerCase() == req.params.author.toLowerCase()
	);
	res.json(chosen);
});


//filter country
app.get('/book/country/:country', (req, res) => {
	let chosen = books.filter((book) =>
		book.country.toLowerCase() == req.params.country.toLowerCase()
	);
	res.json(chosen);
});


//filter language
app.get('/book/language/:language', (req, res) => {
	let chosen = books.filter((book) =>
		book.language.toLowerCase() == req.params.language.toLowerCase()
	);
	res.json(chosen);
});

//filter pages
app.get('/book/pages/:pages', (req, res) => {
	let chosen = books.filter((book) =>
		book.pages == req.params.pages
	);
	res.json(chosen);
});


//filter title
app.get('/book/title/:title', (req, res) => {
	let chosen = books.filter((book) =>
		book.title.toLowerCase() == req.params.title.toLowerCase()
	);
	res.json(chosen);
});

//filter year
app.get('/book/year/:year', (req, res) => {
	let chosen = books.filter((book) =>
		book.year == req.params.year
	);
	res.json(chosen);
});


//Respond to everything
app.get('*', (req, res) => {
	res.send('Här är en boklista!');
});

app.listen(3000, () => {
	console.log('Listening to port 3000');
});
