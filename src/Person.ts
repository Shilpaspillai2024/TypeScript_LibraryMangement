export class Person{
    constructor(public name:string,public id:number){

    }
    displayInfo():void{
        console.log(`Name: ${this.name},Id:${this.id}`)

    }
}