export class Book{
    constructor(public id:number,public title:string,public author:string){

    }
    displayInfo():void{
        console.log(`Book Id ${this.id},Title ${this.title},Author ${this.author}`)
    }
}