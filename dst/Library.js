"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Added "${book.title}" to the library.`);
    }
    removeBook(book) {
        this.books = this.books.filter(b => b.id !== book.id);
        console.log(`Removed "${book.title}" from the Library`);
    }
    listAvailablebooks() {
        console.log("Available books in the library:");
        this.books.forEach(book => book.displayInfo());
    }
    borrowBook(member, bookId) {
        const book = this.books.find(b => b.id === bookId);
        if (book) {
            member.borrowBook(book);
            this.removeBook(book);
        }
        else {
            console.log("Book not available.");
        }
    }
    returnBook(member, book) {
        member.returnBook(book);
        this.addBook(book);
    }
}
exports.Library = Library;
