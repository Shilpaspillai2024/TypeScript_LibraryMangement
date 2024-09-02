import { Book } from "./Book";
import { Member } from "./Member";
import { Librarian } from "./Librarian";
import { Library } from "./Library";

// create books
const book1 =new Book(1,"1984","George Orwell");
const book2 =new Book(2,"To kill a Mockingbird","Harper Lee");

//create a library

const library=new Library();
library.addBook(book1);
library.addBook(book2);


// create a member and a librarian

const member=new Member("John Doe",1001);
const librarian=new Librarian("Jane Smith",2001);


//member borrows a book

library.borrowBook(member,1);

//list books the memebr has borrowed
member.listBorrowedBooks();

//memebr returns a book

library.returnBook(member,book1);

// list the available books in the library

library.listAvailablebooks();