class Form extends Base{

	constructor(){
		super();
		this.render('main .container');
	}

	click(){
		$.ajax({
			type: 'GET',
			url: '/books/author/astrid',
			dataType: 'json',
			success: (books) => {
				// render books
				console.log('kjhgf', books)
			}
		});
	}
}
