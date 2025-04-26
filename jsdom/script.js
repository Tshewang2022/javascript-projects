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
const h1 = document.querySelector('h1');
console.log(h1.document.querySelectorAll('.h3'));