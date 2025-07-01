let favoriteBooks = [];
// TODO: define addFavoriteBook(..) function
function addFavoriteBook(book) {
    if (!book.includes("Great"))
        favoriteBooks.push(book);
}

// TODO: define printFavoriteBooks() function
function printFavoriteBooks(books) {
    books.forEach(book => {
        console.log(book);
    });
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
console.log(`favorite Books: ${favoriteBooks.length}`);
printFavoriteBooks(favoriteBooks);
