// creating the new element and insert into the dom
const header = document.querySelector('.header');
const button = document.querySelector('.btn-button')
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'we use cookie to store some data';

// inserting inside the dom
header.prepend(message);
header.append(message);

// removing the element from the domPapillon, this is much more efficient and powerful
button.addEventListener('click', () => message.remove());

message.style.backgroundColor = '#000000'

