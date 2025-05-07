'use strict';

// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//injecting  html to the DOM element
const displayMovements = function (movements) {
    containerMovements.innerHTML = '';
    movements.forEach((mov, i) => {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = `
         <div class="movements__row">
                <div class="movements__type movements__type--${type}">${i + 1} ${type} </div>
                <div class="movements__value">${mov}</div>
            </div>
        `;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
}
displayMovements(account1.movements);

const createUsername = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner.toLowerCase().split(' ').map((name) => name[0]).join('');
    })
};
createUsername(accounts);
const calcPrintBalance = function (movement) {
    const balance = movement.reduce((acc, curr) => acc + curr, 0);
    console.log(balance);
    labelBalance.textContent = `${balance} USD`;
}
calcPrintBalance(account1.movements);
let currentAccount;
btnLogin.addEventListener('click', function (e) {
    //prevent the automatic reload when the function is being clicked
    e.preventDefault();
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // diplay ui and welcome message
        labelWelcome.textContent = `Welcome back,${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;

        // display movements


        // display balance


        // display summary
        console.log('login')
    }
    console.log('login to the function');
})
btnTransfer.addEventListener('click', function () {
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
    console.log(amount, receiverAcc);

    if(amount>0 && balan ){}
})
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

// simplicity in the code is the best thing you can do for yourself
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/**  3 popular array methods(map(to loop over the arrays, will get the new array of the original arr),
 fliter=> returns the new array based on the test condition
   and reducer=> reduces all the arrays elements down to the one single array is called as the reducer); **/

// working of the filter methods of the array, combine all the dots and create something that you always wanted to create
// the freedom of expression of the ideas into the functional codes

// const maxVal = movements.reduce(function (acc, curr) {
//     if (acc < curr)
//         return curr;
//     else
//         return acc
// }, movements[0]);

// console.log(maxVal, 'max value');

// i am just copying the other styles, and that is what is not working for me and not enjoying the process.
// change in the approach, where i will be doing 80% myself and 20% watching others do
// find is use the find the property of the array or the object
// movements.find((mov) => mov < 0);
// const accountt = ['tshewang', 'dorji'];
// const account = accountt.find(acc => acc === 'tshewang');
// console.log(account, 'value');

