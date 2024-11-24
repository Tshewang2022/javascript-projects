// the concept of the nested functions scopes

// let a = 10;
// function outer() {
//     let b = 40;
//     function inner() {
//         let c = 80;
//         console.log(a, b, c);
//     }
//     inner();
// }
// outer();

//understanding the closure

// function outer(){
//     let counter = 0;
//     function inner(){
//         counter ++;
//         console.log(counter);
//     }
//     return inner;
// }
// const ok = outer();
// ok();
// ok();


// function myName(name) {
//     console.log(`my name is ${name}`);
// }
// myName('tshewang');

// understanding the this keyword is js(implicit, explicit, new, default)

// implicit binding
const person = {
    name: "tshewang",
    sayMyName: function () {
        console.log(`my name is ${this.name}`);
    }
}
//person.sayMyName();

// explicit
// function sayMyName() {
//     console.log(`my name is ${this.name}`);
// }
// sayMyName.call(person);

// new binding

// function Person(name) {
//     // this={}
//     this.name = name;
// }

// const p1 = new Person('TSHEWANG');
// const p2 = new Person('gyaltshen');
// console.log(p1.name);

// function prototype in js

// function Person(fName, lName) {
//     this.firstName = fName,
//         this.lastName = lName
// }
// const person1 = new Person('Bruce', 'Wayne');
// const person2 = new Person('Tshewang', 'Gyaltshen');

// // attaching the new objects
// Person.prototype.getFullName = function () {
//     return this.firstName + " " + this.lastName
// }
// console.log(person1.getFullName());


// // inheritance concept
// function superHero(fName, lName) {
//     Person.call(this, fName, lName)
//     this.isSuperHero = true;
// }
// superHero.prototype.fightCrime = function () {
//     console.log('figthing crime')
// }

// // to inherit getFullName
// superHero.prototype = Object.create(Person.prototype);
// const batman = new superHero('bruce', 'wayna');


class Person {
    constructor(fName, lName) {
        this.firstName = fName,
            this.lastName = lName
    }
    sayMyName() {
        return this.firstName + " " + this.lastName
    }
}

const classP1 = new Person('Bruce', 'Wayne')
console.log(classP1.sayMyName());

class SuperHero extends Person {
    constructor(fName, lName) {
        super(fName, lName);
        this.isSuperHero = true
    }
    fightingCrime(){
        console.log('figthing crime')
    }
}
const batman = new SuperHero('tshewang', 'gayltshen');
console.log(batman.sayMyName());