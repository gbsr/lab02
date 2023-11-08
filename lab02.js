import { books } from './books.js';

listAllItemsInStore(books);
listAllBooks(books);

// 1 Hur många böcker finns det i affären?
function listAllItemsInStore(list) {

	let i = 0;
	let numOfStockItems = 0;
	for (i = 0; i < books.length; i++) {
		numOfStockItems++;
	}
	console.log('WeCurrently have ' + numOfStockItems + ' books in store');
	console.log('');
}

// 2 Skriv ut namnen på alla böcker. (Skapa först en lista som bara innehåller namnen.)
function listAllBooks(list) {
	let i = 0;

	console.log('These are the titles in store:');
	console.log('');
	for (i = 0; i < list.length; i++) {
		console.log('Title: ' + i + ' ' + list[i].title);
	}
}



