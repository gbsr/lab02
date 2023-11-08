import { books } from './books.js';


listAllBooks(books);


// functions
function listAllBooks(list) {

	for (var i = 0; i < list.length; i++) {
		console.log('Title: ' + list[i].title);
	}

}