import { books } from "./books.js";

listAllItemsInStore(books);
listAllBooks(books);
listAllFantasyBooks(books);
// 1 Hur många böcker finns det i affären?
function listAllItemsInStore(list) {
    let i = 0;
    let numOfStockItems = 0;
    for (i = 0; i < books.length; i++) {
        numOfStockItems++;
    }
    console.log("WeCurrently have " + numOfStockItems + " books in store");
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

  function listExpensiveBooks(books, thresholdPrice) {
    console.log(`Böcker som kostar över $${thresholdPrice}:`);
    books.forEach(book => {
      if (book.price > thresholdPrice) {
        console.log(`Titel: ${book.title}, Pris: $${book.price}`);
      }
    });
  } 
 