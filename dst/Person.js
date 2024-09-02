"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    displayInfo() {
        console.log(`Name: ${this.name},Id:${this.id}`);
    }
}
exports.Person = Person;
