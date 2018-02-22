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
					$('.result').append(`
						<h1 class="text-center mb-3">Your book</h1>
						<ul>
							<li class="title">Title: ${book.title}</li>
							<li class="title">Author: ${book.author}</li>
							<li class="title">Country: ${book.country}</li>
							<li class="title">Language: ${book.language}</li>
							<li class="title">Pages: ${book.pages}</li>
							<li class="title">Year: ${book.year}</li>
						</ul>
						`);
					console.log(book);
				}

			}
		});
	}
}
