//Require Express
const express = require('express');

//Require books.json
const books = require('./books.json');

//Creare Express server
const app = express();

app.get('/book/author/:author', (req, res) => {
	let chosen = books.filter((book) =>
		book.author.toLowerCase() == req.params.author.toLowerCase()

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
