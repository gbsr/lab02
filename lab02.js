import { books } from './books.js';


listAllBooks(books);


// functions
function listAllBooks(list) {

	console.log('We currently have these titles:');
	console.log('');
	for (var i = 0; i < list.length; i++) {
		console.log('Title: ' + list[i].title);
	}

}