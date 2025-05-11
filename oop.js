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
// somehow the things that i have learned does not get connected while i am working on the project.
const Person3 = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

// this is the server side code
const Student = function (firstName, birthYear, course) {

    // inherit the properties from the Person3
    Person3.call(this, firstName, birthYear);
    this.course = course
}
Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and i study ${this.course}`)
}

// this is the client side code
const mike = new Student('mike', 1990, 'computer science');
console.log(mike);


//using the es6 class
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    calcAge() {
        console.log(2024 - this.birthYear);
    }
}


// extends keyword will setup the prototype chain for us
class StudentCl extends PersonCl {
    constructor(firstName, birthYear, course) {
        // inherit the properties from the Person3
        // super => PersonCl.call(this, firstName, birthYear);
        super(firstName, birthYear);
        this.course = course
    }
    introduce() {
        console.log(`My name is ${this.firstName} and i study ${this.course}`)
    }
}

const tshewang = new StudentCl('tshewang', 1990, 'computer science');

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

// creating the prototype chain
const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firsName, birthYear) {
    this.course = this.course;
}

// Object.create linking the object togather
const jay = Object.create(StudentProto);
jay.init('tshewang', 2020, 'computer science')


// this is the server side code
class Account {
    #movements = [] // this is the private property
    locale = navigator.nivations // this public property
    // init the class object
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;

        this.movements = [];
        this.locale = navigator.language;
        console.log(`thank for opening an account, ${owner}`);
    }

    deposit(val) {
        this.movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }
    approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this.approveLoan(val)) {
            this.deposit(val);
            console.log(`Approved loan`);
        }
        // the methods of chaining
        return this;
    }
}

// this is the client side code
const acct = new Account('Jonas', 'EUR', 111);

// arguments
acct.deposit(250);
acct.withdraw(140);

//output
console.log(acct);

// security risk
acct.requestLoan(); // this should not be avaiable to anyone
// thats why need need to encapsulation

// i get up every day to be best of what i am really capable of, that is the moto of my life
// push each and every inches of the life, because life fucks bad
// they may not understand the thing about it, but every thing need to be calculated with precision to min risk
// after all, everything is a strategy, you need too take risk, and do not play save, because you have nothing to lose

/** chaining methods **/ // some can fool you very easily, because they seems very convincing to you, just be careful
const chaining = acct.requestLoan().deposit(90).deposit(10).withdraw(90); // this is chaining methods, that we can commonly see in the object oriented programming

console.log(chaining);
class Car {

}
// challenging myself 
class Carcl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = this.speed * 1.6;
    };


}

class EVCL extends Carcl {
    // making the property private
    #charge
    constructor(make, speed, charge) {
        supper(make, speed);
        this.charge = charge;
    }
    chargeBattery(chargeTo) {
        this.charge = chargeTo
    }

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} is going at ${this.speed} km/h with charge of ${this.#charge}`);
    }
};

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;

}

EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
};// lets see how the code have been written inside the node_modules file

