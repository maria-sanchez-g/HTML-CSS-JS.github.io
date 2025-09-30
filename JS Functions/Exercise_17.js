const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
]; 

//a
function getBookTitle(books) {
   let book = books.find(book => book.title === '1984');
   return book;
}

console.log(getBookTitle(books))

//b
function getOldBooks(books) {
    let OldBook = books.filter(OldBook => OldBook.year <= 1950)
    return OldBook
}

console.log(getOldBooks(books))

//c
function addGenre(books) {
return books.map(newGenre => {
    return {
        ...newGenre,
        genre: "classic"
    };
});
}
const update = addGenre(books);
console.log(update)

function addGenre_1(books){
    let update_1 = books.map(newGenre_1 => {
        return {
            ...newGenre_1,
            genre: "classic"
        };
    });
    return update_1;
}
const updatedBooks = addGenre_1(books);
console.log(updatedBooks);

function addGenre_2(books) {
    return books.map(newGenre_2 => ({
        ...newGenre_2,
        genre: "Classic"
    }));
}
const updatedBooks_1 = addGenre_2(books);
console.log(updatedBooks_1);

//array.map(function(currentValue, index, arr), thisValue)
//The spread operator used to copy properties of an object (or elements of an array) into another object/array.
//const update to keep the original books untouched (no mutation), and you have a separate array with the updated data.

//d
function getTitles(authorInitial) {
    let letter = books.filter(letter => letter.author.startsWith(authorInitial));
    let letter_1 = letter.map(letter_1 => letter_1.title);
    return letter_1
}

console.log(getTitles("A"));

function getTitles_1(authorInitial) {
    return books
    .filter(book => book.author.startsWith(authorInitial)) // step 1: filter authors
    .map(book => book.title);                             // step 2: extract titles
}

console.log(getTitles_1("A"));

//return books is written at the beggining because when we break a long chain into multiple lines, we often start with the variable (here books) on its own line for readability

//e
function latestBook(books) {
    let latest_year = -Infinity;
    books.forEach(book => {
        if (book.year > latest_year) {
            latest_year = book.year;
        }
    });
    return books.find(book => book.year === latest_year);
}

console.log(latestBook(books))

//we use -infinity because when we look for the largest year, we need to start with a number that is guaranteed to be smaller than any year in the data.
//If we were looking for the earliest year we would use infinity
// latest_year = book.year checks if the current book’s year is more recent than the current latestYear. If it is, you update latestYear to hold this new, bigger year.
//At the end, we return books.find(...) to actually give back the book object that matches the year we discovered.