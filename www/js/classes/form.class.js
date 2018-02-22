class Form extends Base{

	constructor(){
		super();
		this.render('main .container');
		this.clickBtnAuther();
		this.clickBtnTitle();
	}


	clickBtnAuther(){
		$(document).on('click', '.btn', function(){
				let bookAuthor = $('#filter-author').val();
				$.ajax({
					type: 'GET',
					url: `/books/author/${bookAuthor}`,
					dataType: 'json',
					success: (books) => {
						// render books
						for (let book of books) {
							$('.result').append(`
								<ul>
									<li class="title">Title: ${book.title}</li>
									<li class="title">Author: ${book.author}</li>
									<li class="title">Country: ${book.country}</li>
									<li class="title">Language: ${book.language}</li>
									<li class="title">Pages: ${book.pages}</li>
									<li class="title">Year: ${book.year}</li>
								</ul>
								`);
							 $('#filter-author').val('');
							console.log(book);
						}
					}
				});
			})
		}

	clickBtnTitle(){
		$(document).on('click', '.btn', function(){
				let bookTitle = $('#filter-title').val();
				$.ajax({
					type: 'GET',
					url: `/books/title/${bookTitle}`,
					dataType: 'json',
					success: (books) => {
						// render books
						for (let book of books) {
							$('.result').append(`
								<ul>
									<li class="title">Title: ${book.title}</li>
									<li class="title">Author: ${book.author}</li>
									<li class="title">Country: ${book.country}</li>
									<li class="title">Language: ${book.language}</li>
									<li class="title">Pages: ${book.pages}</li>
									<li class="title">Year: ${book.year}</li>
								</ul>
								`);
							 $('#filter-title').val('');
							console.log(book);
						}
					}
				});
			})
		}


}
