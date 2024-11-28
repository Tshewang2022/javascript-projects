// constructor functions only start with capital, it simulates the class
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // this is very bad practice, never use this, by performance
    // this.calcAge = function () {
    //     console.log(2024 - 2000)
    // }
}
const jonas = new Person('Jonas', 1998);
console.log(jonas);
const tshewang = new Person('tshewang', 1998);
const gyaltshen = new Person('gyaltshen', 2000);
// 1. new {empty object is being created} created
// 2. function is called, this ={}
// 3. {} linked to prototype;
// 4. function automatically return {}

// console.log(jonas instanceof Person);

//protypes, each and every functions is javascript contains the property called prototype, including the constructor functions
// also contains for the objects
Person.prototype.calcAge = function () {
    console.log(2024, -this.birthYear);
}

// without the prototype property it wont be able to access it
jonas.calcAge();
tshewang.calcAge();

// very important in debugging while developing the frontend
// console.log(jonas.hasOwnProperty('firstName'));
// when the methods is envoked, first it will take a look inside the functions and if it cannot find there, it will look inside the function prototype
// console.log(jonas.__proto__);
// console.dir(Person.prototype.constructor);

const arr = [2, 3, 4, 56];
console.log(arr.__proto__);

// extending the prototype of arrays, do not it in the partical
Array.prototype.unique = function () {
    return [...new Set(this)]
}

console.log(arr.unique());


// ES6 class, does not work like traditional classes in language like java and c++
// class expression
const PersonClq = class {

}
// class delcaration
class PersonCl {
    // add the constructor methods, its just like the constructor functions that we have seen
    // all are the inherited methods
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // this is a prototype property, methods will added to .prototype prototype
    calcAge() {
        console.log(2024 - this.birthYear);
    }

    // static methods, 
    static hey() {

    }
}
const jessica = new PersonCl('jessica', 1900);
console.log(jessica);

// important things about the class

// 1. classes are not hoisted
// 2. class are first-class citizes, 
// 3. class are executed in strict mode


// every objects will have getter and setter property
const account = {
    ower: "tshewang",
    movements: [200, 520, 120, 202],

    // setting the setters and getters
    get lastest() {
        return this.movements.slice(-1).pop();
    },

    set lastest(mov) {
        this.movements.push(mov);
    },



}

console.log(account.lastest);
account.set = 50;

// implementing the prototyple inheritance
// using the Object.create(), manually set the prototype of the object

const PersonProto = {
    calcAge(){
        console.log(2023-this.birthYear);
    },
    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear
    }

}
const tshewang2 = Object.create(PersonProto);
tshewang2.name = 'tshewang gyaltshen';
tshewang2.birthYear = 1990;
tshewang2.calcAge();
tshewang2.init('sara', 1990);
tshewang2.calcAge();
