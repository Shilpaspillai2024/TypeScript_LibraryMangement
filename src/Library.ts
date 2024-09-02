import { Book } from "./Book";
import { Member } from "./Member";

export class Library{
    private books:Book[]=[];

    addBook(book:Book):void{
        this.books.push(book);
        console.log(`Added "${book.title}" to the library.`);
    }



    removeBook(book:Book):void{
        this.books=this.books.filter(b=>b.id !==book.id);
        console.log(`Removed "${book.title}" from the Library`)
    }  

    


    listAvailablebooks():void{
        console.log("Available books in the library:")
        this.books.forEach(book=>book.displayInfo())
    }


    borrowBook(member:Member,bookId:number):void{
        const book= this.books.find(b=>b.id=== bookId)
        if(book){
            member.borrowBook(book)
            this.removeBook(book)
        }else{
            console.log("Book not available.")
        }
    }


    returnBook(member:Member,book:Book):void{
        member.returnBook(book)
        this.addBook(book)
    }
}