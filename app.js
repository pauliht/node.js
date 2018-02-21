//Require Express
const express = require('express');

//Require books.json
const books = require('./books.json');

//Creare Express server
const app = express();

//filter author
app.get('/books/author/:author', (req, res) => {
	let chosen = books.filter((book) =>
		book.author.toLowerCase().includes(req.params.author.toLowerCase())
	);
	res.json(chosen);
});


//filter country
app.get('/books/country/:country', (req, res) => {
	let chosen = books.filter((book) =>
		book.country.toLowerCase() == req.params.country.toLowerCase()
	);
	res.json(chosen);
});


//filter language
app.get('/books/language/:language', (req, res) => {
	let chosen = books.filter((book) =>
		book.language.toLowerCase() == req.params.language.toLowerCase()
	);
	res.json(chosen);
});

//filter pages
app.get('/books/pages/:pages', (req, res) => {
	let chosen = books.filter((book) =>
		book.pages == req.params.pages
	);
	res.json(chosen);
});

//pages from
app.get('/books/pages/from/:from', (req, res) => {
	let chosen = books.filter((book) =>
		book.pages >= req.params.from / 1
		);
	res.json(chosen);
});

//pages to
app.get('/books/pages/to/:to', (req, res) => {
	let chosen = books.filter((book) =>
		book.pages <= req.params.to / 1
		);
	res.json(chosen);
});

//pages between...
app.get('/books/pages/from/:from/to/:to', (req, res) => {
	let chosen = books.filter((book) =>
		book.pages >= req.params.from / 1 &&
		book.pages <= req.params.to / 1
		);
	res.json(chosen);
});

//filter title
app.get('/books/title/:title', (req, res) => {
	let chosen = books.filter((book) =>
		book.title.toLowerCase().includes(req.params.title.toLowerCase()) 
	);
	res.json(chosen);
});


//filter year
app.get('/books/year/:year', (req, res) => {
	let chosen = books.filter((book) =>
		book.year == req.params.year
	);
	res.json(chosen);
});

//filter year from...
app.get('/books/year/from/:from', (req, res) => {
	let chosen = books.filter((book) =>
	 	book.year >= req.params.from / 1
	);
	res.json(chosen);
});

//filter year to...
app.get('/books/year/to/:to', (req, res) => {
	let chosen = books.filter((book) =>
	 	book.year <= req.params.to / 1
	);
	res.json(chosen);
});

// /books/year/from/:from/to/:to
app.get('/books/year/from/:from/to/:to', (req, res) => {
	let chosen = books.filter((book) =>
	 	book.year >= req.params.from / 1 &&
	 	book.year <= req.params.to / 1
	);
	res.json(chosen);
});

app.use(express.static('www'));

//Respond to everything
app.get('*', (req, res) => {
	// res.send('Här är en boklista!');
	res.sendFile(__dirname + '/www/index.html');

});

app.listen(3000, () => {
	console.log('Listening to port 3000');
});
