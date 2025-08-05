const book = {
    "title": "my book",
    "description": "Institute of data",
    "author": "maria",
    "number_pages": "100",
};

console.log(book);
console.log(`title: $book.title}`);
console.log(`author: $book.author`);
console.log(book.number_pages);

book.description = "data";
console.log(book.description);

const library = [
  { title: "Book 1", description: "Desc 1", author: "Author 1", number_pages: "120" },
  { title: "Book 2", description: "Desc 2", author: "Author 2", number_pages: "150" },
  { title: "Book 3", description: "Desc 3", author: "Author 3", number_pages: "200" },
  { title: "Book 4", description: "Desc 4", author: "Author 4", number_pages: "180" },
  { title: "Book 5", description: "Desc 5", author: "Author 5", number_pages: "300" }
];

console.log("Library:", library);