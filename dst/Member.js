"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const Person_1 = require("./Person");
class Member extends Person_1.Person {
    constructor() {
        super(...arguments);
        this.borrowedBooks = [];
    }
    borrowBook(book) {
        this.borrowedBooks.push(book);
        console.log(`${this.name} borrowed ${book.title}`);
    }
    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(b => b.id !== book.id);
        console.log(`${this.name} returned "${book.title}"`);
    }
    listBorrowedBooks() {
        console.log(`${this.name} has borrowed:`);
        this.borrowedBooks.forEach(book => console.log(book.title));
    }
}
exports.Member = Member;
