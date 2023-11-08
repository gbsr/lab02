import { books } from "./books.js";

listAllItemsInStore(books); // 1
listAllBooks(books); // 2
listAllFantasyBooks(books); // 3
calculateTotalWorth(books); // 6
calculateMaxGenreWorth(books); // 7 
listBooksByGenre(books);
listExpensiveBooks(books);

// 1 Hur många böcker finns det i affären?
function listAllItemsInStore(list) {
	let i = 0;
	let numOfStockItems = 0;
	for (i = 0; i < books.length; i++) {
		numOfStockItems++;
	}
	console.log("We currently have " + numOfStockItems + " books in store");
	console.log("");
}

// 2 Skriv ut namnen på alla böcker. (Skapa först en lista som bara innehåller namnen.)
function listAllBooks(list) {
	let i = 0;
	console.log("These are the titles in store:");
	console.log("");
	for (i = 0; i < list.length; i++) {
		console.log("Title: " + i + " " + list[i].title);
	}
}

// 6 Hur mycket är hela bokinnehavet värt? (Vad är det totala priset, om man skulle sälja alla böcker?)
function calculateTotalWorth(list) {
	let total = 0;
	let totalSum = 0;
	books.forEach(book => { total += book.price; });
	totalSum = Math.round(total);
	console.log('');
	console.log('The entire stock of books is currently worth ' + totalSum + ' amount of money-units.');
}

// 7 Vilka böcker är sammanlagt värda mest, dystopian eller mystery?
// TODO: make helper function to list any selected genre
// TODO: refactor this function

function calculateMaxGenreWorth(list, genre) {

	let genreDystopian = books.filter(book => book.genre === 'Dystopian');
	let genreMystery = books.filter(book => book.genre === 'Mystery');
	let maxGenreWorth = '';

	// total here is a var we define as 0
	let totalDystopianPrice = genreDystopian.reduce((total, book) => total + book.price, 0);
	let totalMysteryPrice = genreMystery.reduce((total, book) => total + book.price, 0);

	if (totalMysteryPrice < totalDystopianPrice) maxGenreWorth = 'Dystopian ';
	else if (totalMysteryPrice > totalDystopianPrice) maxGenreWorth = 'Mystery';

	console.log('');
	if (totalMysteryPrice === totalDystopianPrice) console.log('Well, what do you know, the two happens to have the exact same worth :o');
	else console.log('Comparing the genres Dystopian and Mystery, we can see that the genre ' + maxGenreWorth + ' is worth the most.');
	console.log('');
}

// 3 Skriv ut namn och pris för alla böcker av typen "Fantasy".
function listAllFantasyBooks() {
	console.log("These are the books with the Fantasy genre:");
	books.forEach((book) => {
		if (book.genre === "Fantasy") {
			console.log(`${book.title} and it costs ${book.price}`);
		}
	});
}
// 4 Skriv ut namn och genre för alla klassiker, dystopier och mysterieböcker.

function listBooksByGenre(books, genre) {
	console.log(`Böcker inom genren ${genre}:`);
	books.forEach(book => {
		if (book.genre === genre) {
			console.log(`Titel: ${book.title}, Genre: ${book.genre}`);
		}
	});
}

// 5 Skriv ut namn och pris för alla böcker som kostar över $10.

function listExpensiveBooks(books) {
	console.log("Böcker som kostar över $10:");
	books.forEach(book => {
		if (book.price > 10) {
			console.log(`Titel: ${book.title}, Pris: $${book.price}`);
		}
	});
}

