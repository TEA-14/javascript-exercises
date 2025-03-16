const Book  = {
    title: 'Title: Ego is the Enemy,',
    author: 'Author: Ryan Holiday,',
    year: 'Year: 2016,',
    availble: 'Available: true',
    borrowBook: function() {
            console.log("Borrowed the book");
            this.availble = false;
    },

    returnBook: function() {
    
            console.log("Returning the book");
            this.availble = true;
        }
};

console.log(Book.title, Book.author, Book.year, Book.availble);    
Book.borrowBook();
console.log(Book.title, Book.author, Book.year, Book.availble);
Book.returnBook();
console.log(Book.title, Book.author, Book.year, Book.availble);