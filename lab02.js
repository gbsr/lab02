import { books } from "./books.js";

listAllBooks(books);
listAllFantasyBooks(books);

// functions
function listAllBooks(list) {
    console.log("We currently have these titles:");
    console.log("");
    for (var i = 0; i < list.length; i++) {
        console.log("Title: " + list[i].title);
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
