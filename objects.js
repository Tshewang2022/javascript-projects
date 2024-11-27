const tshewangArray = [
    "tshewang gyaltshen",
    1998,
    'developer',
    ['phurpha', "rinchen", "wangmo"]
]

// the way of organizating the data
const tshewangObjects = {
    firstName: "Tshewang",
    lastName: "gyaltshen",
    job: "developer",
    friends: ['Rinchen', "Phurpa", "Domche"]
}
// dot is used to access the property of the objects in  javascript
console.log(tshewangObjects);

const nameKey = 'Name';
console.log(tshewangObjects['first' + nameKey]);
console.log(tshewangObjects['last' + nameKey]);


// const interestedIn = prompt('what do you want to know about me ?');
// console.log(interestedIn);

// undefined, trying to access the property that does not exists

// both way of defining the object properties
tshewangObjects.location = 'Portugal'; // by the dot notations
tshewangObjects['email'] = 'tshewanggyaltshen0@gmail.com'; // by using the [ ] notations

// objects methods
// function is just the other types of values


const person = {
    firstName: "tshewang",
    lastName: "gyaltshen",
    DOB: 1998,
    job: 'developer',
    friends: ['Rinchen', "Nado"],
    hasDriverLicense: true,

    // any function that attached to the object is called as the methods
    // methods is a property of the objects that holds the functions
    // calcAge: function () {
    //     console.log(this);
    //     // this will point to person
    //     return 2024 - this.DOB;
    // }

    calcAge: function () {
        this.age = 2024 - this.DOB;
        return this.age;
    },
    getSummarry: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${person.job}, and he has ${this.hasDriverLicense ? "a" : 'no'} driver's license`
    }
}
// 3* calcAge;
console.log(person.calcAge());
console.log(person.age);
//console.log(person['calAge'](1998));