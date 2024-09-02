import { Person } from "./Person";
import { Book } from "./Book";


export class Librarian extends Person{
    manageBook(book:Book,action:string):void{
        if(action ==="add"){
            console.log(`Librarian ${this.name} added "${book.title}" to the library.`);

        }else if(action ==="remove"){
            console.log(`Librarian ${this.name} removed "${book.title}" from the Library.`);
        }
    }
}