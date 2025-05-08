// creating the new element and insert into the dom
const header = document.querySelector('.header');
const button = document.querySelector('.btn-button')
const message = document.createElement('div');
const navLink = document.querySelector('.nav_link');
message.classList.add('cookie-message');
message.innerHTML = 'we use cookie to store some data';


// inserting inside the dom
header.prepend(message);
header.append(message);

// removing the element from the domPapillon, this is much more efficient and powerful
button.addEventListener('click', () => message.remove());

message.style.backgroundColor = '#ffffff'

// event propagations=> event bubling
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

document.querySelector('.nav_link').addEventListener('click', function (e) {
    // cannot use the arrow function here, because arrow function does not have this keyword
    this.style.backgroundColor = randomColor();
    console.log('link')
});

// dom traversing
// const h1 = document.querySelector('h1');
// console.log(h1.document.querySelectorAll('.h3'));

// writing the code day and night, and sharping the blade
// oop => the style of code based on the concepts of objects
// two type of writing the code, oop and functional programming
// class=> blue print of the objects
// how do we design classes=> abstraction(hiding details that does not matter), encapsulation(keep some properties and methods private), inheritance, and polymorphism
// all object in the javascript will have prototype

const Person = function (firstName, birthYear) {
    console.log(this);
    this.firstName = firstName;
    this.birthYear = birthYear;

    // never create the methods with the constructor functions
    // never do this. because bad practice where it will slow down the code
    // because it will be inherited in all the object that you created
    this.calcAge = function () {
        console.log(2029 - this.birthYear);
    }
}

const tshewang = new Person('Tshewang', 1990);
const dorji = new Person('Dorji', 2030);
console.log(tshewang);

// behind the scene
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// instead use the prototype
Person.prototype.calcAge = function () {
    console.log(2034 - this.birthYear);
}
console.log(Person.prototype);
tshewang.calcAge();
dorji.calcAge();

// prototype of the aray
const arr = [3, 4, 5, 5, 6];
// __proto__ is the powerful methods to debug and write some code
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

// adding your own methods to prototype, but should not do it
// in the production env
Array.prototype.unique = function () {
    return [...new Set(this)];
}
console.log(arr.unique());

class PersonCl {
    // constructor in javascript
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // methods
    calcAge() {
        console.log(3030 - birthYear);
    }
}

// class instance or called as the object
const jessica = new PersonCl('tshewang', 9830);
console.log(jessica);

// 1. classes are not hoisted
// 2. classes are first-class citizens
// 3. classes are executed in strict mode

// setters and getters in objects 

// simple object literals
const bankAccout = {
    owener: 'tshewang',
    movements: [200, 530, 120],

    // setting up the getter function
    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },

    // set the property that i have already exist
    set fullName(name) {
        if (name.includes(' ')) return this._fullName;
        else {
            return `${name} is not full name`
        }
    },

    get fullName() {
        return this._fullName;
    }
}

// console.log(account.latest);
// account.latest(50);

// Object.create to create the prototypal inheritance
const obje2 = {
    calcAge() {
        console.log('year');
    }
}

const proto = Object.create(obje2);
console.log(proto);

// complete lock on the creativity and the productivity
// my attension is all scattered around the things that does not even matter to me, or
// it does not provide the real growth to me, need to dig down and find the fault in it