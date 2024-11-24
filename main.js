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

function Person(name) {
    // this={}
    this.name = name;
}

const p1 = new Person('TSHEWANG');
const p2 = new Person('gyaltshen');
console.log(p1.name);
