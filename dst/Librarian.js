"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Librarian = void 0;
const Person_1 = require("./Person");
class Librarian extends Person_1.Person {
    manageBook(book, action) {
        if (action === "add") {
            console.log(`Librarian ${this.name} added "${book.title}" to the library.`);
        }
        else if (action === "remove") {
            console.log(`Librarian ${this.name} removed "${book.title}" from the Library.`);
        }
    }
}
exports.Librarian = Librarian;
