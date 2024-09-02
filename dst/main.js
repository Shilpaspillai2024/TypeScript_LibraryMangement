"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./Book");
const Member_1 = require("./Member");
const Librarian_1 = require("./Librarian");
const Library_1 = require("./Library");
// create books
const book1 = new Book_1.Book(1, "1984", "George Orwell");
const book2 = new Book_1.Book(2, "To kill a Mockingbird", "Harper Lee");
//create a library
const library = new Library_1.Library();
library.addBook(book1);
library.addBook(book2);
// create a member and a librarian
const member = new Member_1.Member("John Doe", 1001);
const librarian = new Librarian_1.Librarian("Jane Smith", 2001);
//member borrows a book
library.borrowBook(member, 1);
//list books the memebr has borrowed
member.listBorrowedBooks();
//memebr returns a book
library.returnBook(member, book1);
// list the available books in the library
library.listAvailablebooks();
