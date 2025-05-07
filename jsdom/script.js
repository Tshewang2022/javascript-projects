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
console.log(tshewang);

// behind the scene
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// instead use the prototype
