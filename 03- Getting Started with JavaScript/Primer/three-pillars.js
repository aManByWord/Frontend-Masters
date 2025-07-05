let BOOK_API = "https://some.url/api";

class Bookshelf {
    constructor() {
        this.favoriteBooks = [];
    }

    // TODO: define methods `addFavoriteBook(..)`
    addFavoriteBook(book) {
        if (!String(book).includes("Great"))
            this.favoriteBooks.push(book);
    }

    // and `printFavoriteBooks()`
    printFavoriteBooks() {
        console.log(`favorite Books: ${this.favoriteBooks.length}`);
        this.favoriteBooks.forEach(book => {
            console.log(book);
        });
    }
}

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
    setTimeout(function fakeLoadingDelay() {
        cb([
            "A Song of Ice and Fire",
            "The Great Gatsby",
            "Crime & Punishment",
            "Great Expectations",
            "You Don't Know JS"
        ]);
    }, 500);
}

function loadBooks(addBooks) {
    // TODO: call fakeAjax( .. );
    fakeAjax(BOOK_API, function getingTheBooks(booksArray) {
        for (let book of booksArray) {
            addBooks.addFavoriteBook(book);
        }
        addBooks.printFavoriteBooks();
    });
}

let newBook = new Bookshelf();
loadBooks(newBook);