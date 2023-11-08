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
	let priceDystopian = 0;
	let priceMystery = 0;
	let maxGenreWorth = '';
	books.forEach((book) => {

		if (book.genre === "Dystopian") priceDystopian = book.price;
		else if (book.genre === "Mystery") priceMystery = book.price;

	});

	if (priceDystopian < priceMystery) maxGenreWorth = 'Mystery';
	else maxGenreWorth = 'Dystopian';

	console.log('');
	console.log('Comparing the genres Dystopian and Mystery, we can see that ' + maxGenreWorth + ' is worth the most.');
}

// ChatGPt refactors this code as the following for reference::
// function calculateMaxGenreWorth(list, genres) {
//     const genreTotalPrices = {};

//     list.forEach((item) => {
//         if (genres.includes(item.genre)) {
//             genreTotalPrices[item.genre] = (genreTotalPrices[item.genre] || 0) + item.price;
//         }
//     });

//     let maxGenre = '';
//     let maxPrice = 0;

//     for (const genre in genreTotalPrices) {
//         if (genreTotalPrices[genre] > maxPrice) {
//             maxPrice = genreTotalPrices[genre];
//             maxGenre = genre;
//         }
//     }

//     if (maxGenre !== '') {
//         console.log(`Comparing the genres ${genres.join(' and ')}, we can see that ${maxGenre} is worth the most.`);
//     } else {
//         console.log('No relevant genres found in the list.');
//     }
// }


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
 
 