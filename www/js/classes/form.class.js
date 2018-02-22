class Form extends Base{

	constructor(){
		super();
		this.render('main .container');

	}


	click(){
		let bookAuthor = $('#filter-author').val();
		$.ajax({
			type: 'GET',
			url: `/books/author/${bookAuthor}`,
			dataType: 'json',
			success: (books) => {
				// render books

				for (let book of books) {
					$('.result').append(book.author);
					console.log(book);
				}

			}
		});
	}
}
