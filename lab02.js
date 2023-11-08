import { books } from "./books.js";

listAllItemsInStore(books);				 						// 1
listAllBooks(books); 											// 2
listAllFantasyBooks(books); 									// 3
listBooksByGenre(books, "Classic");								// 4
listExpensiveBooks(books);										// 5
calculateTotalWorth(books); 									// 6
calculateMaxGenreWorth(books, 'Dystopian', 'Classic'); 			// 7 
// 8
// 9
// 10
// 11
// 12
// 13
// 14

// 1 Hur många böcker finns det i affären?
function listAllItemsInStore(books) {
	let i = 0;
	let numOfStockItems = 0;
	for (i = 0; i < books.length; i++) {
		numOfStockItems++;
	}
	console.log("We currently have " + numOfStockItems + " books in store");
	console.log("");
}

// 2 Skriv ut namnen på alla böcker. (Skapa först en lista som bara innehåller namnen.)
function listAllBooks(books) {
	let i = 0;
	console.log("These are the titles in store:");
	console.log("");
	for (i = 0; i < books.length; i++) {
		console.log("Title: " + i + " " + books[i].title);
	}
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

// 6 Hur mycket är hela bokinnehavet värt? (Vad är det totala priset, om man skulle sälja alla böcker?)
function calculateTotalWorth(books) {
	let total = 0;
	let totalSum = 0;
	books.forEach(book => { total += book.price; });
	totalSum = Math.round(total);
	console.log('');
	console.log('The entire stock of books is currently worth ' + totalSum + ' amount of money-units.');
}

// 7 Vilka böcker är sammanlagt värda mest, dystopian eller mystery?
function calculateMaxGenreWorth(list, genre1, genre2) {
	// TODO: error checking

	let genreA = list.filter(book => book.genre === genre1);
	let genreB = list.filter(book => book.genre === genre2);
	let maxGenreWorth = '';

	// total here is a var we define as 0
	let totalPrice_GenreA = genreA.reduce((total, book) => total + book.price, 0);
	let totalPrice_GenreB = genreB.reduce((total, book) => total + book.price, 0);

	if (totalPrice_GenreB < totalPrice_GenreA) maxGenreWorth = genre1;
	else if (totalPrice_GenreB > totalPrice_GenreA) maxGenreWorth = genre2;

	console.log('');
	if (totalPrice_GenreB === totalPrice_GenreA) console.log('Well, what do you know, the two happens to have the exact same worth :o');
	else console.log('Comparing the genres ' + genre1 + ' and ' + genre2 + ' , we can see that the genre ' + maxGenreWorth + ' is worth the most.');
	console.log('');
}





//10 Vilka författare har ett namn som består av mer än 2 ord? 
//Ta inte med författare som har punkter i sina namn.

function findAuthorsWithLongNames(books) {
	const authors = [];
	books.forEach(book => {
		const authorName = book.author;
		const words = authorName.split(' ');
		const formattedWords = words.filter(word => word !== "");
		if (formattedWords.length > 2 && !authorName.includes('.')) {
			authors.push(authorName);
		}
	});
	return authors;
}

const authorsWithLongNames = findAuthorsWithLongNames(books);
console.log("Författare med namn som består av mer än 2 ord och inga punkter:");
console.log(authorsWithLongNames);

//11 Skriv ut namnen på alla författare i bokstavsordning. Sortera efter författarens efternamn.

