import { Person } from "./Person";
import { Book } from "./Book";

export class Member extends Person{

    private borrowedBooks:Book[]=[];

    borrowBook(book:Book):void{
        this.borrowedBooks.push(book);
        console.log(`${this.name} borrowed ${book.title}`);
    }

    returnBook(book:Book):void{
        this.borrowedBooks=this.borrowedBooks.filter(b=>b.id !==book.id)
        console.log(`${this.name} returned "${book.title}"`);
    }

    listBorrowedBooks():void{
        console.log(`${this.name} has borrowed:`)
        this.borrowedBooks.forEach(book=>console.log(book.title))
    }

}