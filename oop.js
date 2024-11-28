// // constructor functions only start with capital, it simulates the class
// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // this is very bad practice, never use this, by performance
//     // this.calcAge = function () {
//     //     console.log(2024 - 2000)
//     // }
// }
// const jonas = new Person('Jonas', 1998);
// console.log(jonas);
// const tshewang = new Person('tshewang', 1998);
// const gyaltshen = new Person('gyaltshen', 2000);
// // 1. new {empty object is being created} created
// // 2. function is called, this ={}
// // 3. {} linked to prototype;
// // 4. function automatically return {}

// // console.log(jonas instanceof Person);

// //protypes, each and every functions is javascript contains the property called prototype, including the constructor functions
// // also contains for the objects
// Person.prototype.calcAge = function () {
//     console.log(2024, -this.birthYear);
// }

// // without the prototype property it wont be able to access it
// jonas.calcAge();
// tshewang.calcAge();

// // very important in debugging while developing the frontend
// // console.log(jonas.hasOwnProperty('firstName'));
// // when the methods is envoked, first it will take a look inside the functions and if it cannot find there, it will look inside the function prototype
// // console.log(jonas.__proto__);
// // console.dir(Person.prototype.constructor);

// const arr = [2, 3, 4, 56];
// console.log(arr.__proto__);

// // extending the prototype of arrays, do not it in the partical
// Array.prototype.unique = function () {
//     return [...new Set(this)]
// }

// console.log(arr.unique());


// // ES6 class, does not work like traditional classes in language like java and c++
// // class expression
// const PersonClq = class {

// }
// // class delcaration
// class PersonCl {
//     // add the constructor methods, its just like the constructor functions that we have seen
//     // all are the inherited methods
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     // this is a prototype property, methods will added to .prototype prototype
//     calcAge() {
//         console.log(2024 - this.birthYear);
//     }

//     // static methods,
//     static hey() {

//     }
// }
// const jessica = new PersonCl('jessica', 1900);
// console.log(jessica);

// // important things about the class

// // 1. classes are not hoisted
// // 2. class are first-class citizes,
// // 3. class are executed in strict mode


// // every objects will have getter and setter property
// const account = {
//     ower: "tshewang",
//     movements: [200, 520, 120, 202],

//     // setting the setters and getters
//     get lastest() {
//         return this.movements.slice(-1).pop();
//     },

//     set lastest(mov) {
//         this.movements.push(mov);
//     },



// }

// console.log(account.lastest);
// account.set = 50;

// // implementing the prototyple inheritance
// // using the Object.create(), manually set the prototype of the object

// const PersonProto = {
//     calcAge() {
//         console.log(2023 - this.birthYear);
//     },
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear
//     }

// }
// const tshewang2 = Object.create(PersonProto);
// tshewang2.name = 'tshewang gyaltshen';
// tshewang2.birthYear = 1990;
// tshewang2.calcAge();
// tshewang2.init('sara', 1990);
// tshewang2.calcAge();

// // inheritance-> inheriting the methods and property from the parent class

// const Person = function (firsName, birthYear) {
//     this.firsName = firsName;
//     this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function () {
//     console.log(2024 - this.birthYear);
// }

// // child class of the Person
// const Student = function (firstName, birthYear, course) {
//     // this.firsName = firstName; // this needs to inherit from Person
//     // this.birthYear = birthYear; // this needs to inherit from Person
//     Person.call(this, firstName, birthYear);
//     this.course = course;
// }
// Person.prototype.calcAge = function () {
//     console.log(2024 - this.birthYear);
// }
// // linking the prototype
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//     console.log(`My name is ${this.firsName} and i study ${this.course}`)
// }
// const mike = new Student('Mike', 2020, 'computer science');
// mike.introduce();
// mike.calcAge();
// console.log(mike.__proto__);



// class PersonCl {
//     // add the constructor methods, its just like the constructor functions that we have seen
//     // all are the inherited methods
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     // this is a prototype property, methods will added to .prototype prototype
//     calcAge() {
//         console.log(2024 - this.birthYear);
//     }

//     // static methods,
//     static hey() {

//     }
// }

// // inheritance, needs extends and super
// class Student extends PersonCl {
//     constructor(firstName, birthYear, course) {
//         // always need to happen first
//         super(firstName, birthYear);
//         this.course = course;
//     }
//     introduce() {
//         console.log(`My name is ${this.firstName} and i study ${this.course}`)
//     }
// }

// const phurpha = new Student('phuba', 2012, 'computer science');
// console.log(phurpha);
// phurpha.introduce();
// phurpha.calcAge();


// inheritance between classes and Object.create
// const PersonProto = {
//     calcAge() {
//         console.log(2017 - this.birthYear);
//     },
//     init(firsName, birthYear) {
//         this.firsName = firsName;
//         this.birthYear = birthYear;
//     }
// }
// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// const jay = Object.create(StudentProto);
// const student = StudentProto.init();

// StudentProto.init = function () {
//     PersonProto.init.call(this, firsName, birthYear);
//     this.course = course
// }
// console.log(student);


class account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin

        // protected property
        this._movements = []

        console.log('thanks for opening an account')
    }

    //public interface of our objects
    deposit(val) {
        this._movements.push(val);
    }
    withdraw(val) {
        this.deposit(-val)
    }

    withdraw(val) {
        this.deposit(-val)
    }
    approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this.approveLoan(val)) {
            this.deposit(val);
            console.log('loan approved');
        }
    }

    // public interface, for the _movements
    getMovements() {
        return this._movements;
    }
}

const account1 = new account('tshewang', 'EUR', 111);
account1.deposit(250);
account1.withdraw(140);
account1.requestLoan(1000);
account1.approveLoan(1000);
console.log(account1);
console.log(account1.getMovements());

// encapsulation, ->data privacy

// private class fields and methods ->encapsulation

