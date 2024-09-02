"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    displayInfo() {
        console.log(`Book Id ${this.id},Title ${this.title},Author ${this.author}`);
    }
}
exports.Book = Book;
