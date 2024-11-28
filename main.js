const express = require('express');

const main = express();


const PORT = 3000;
main.use(express.json());
main.use('/', (req, res) => {
    //simple datatypes, arrays
    // const arr = ['tshewang', 'gyaltshen', 'error', 1];
    // const user = {
    //     name: "phurpa",
    //     email: "phurpa@gmail.com",
    //     company: "newegde.bt"
    // }

    // what is constructor function, simple functions that has capital
    function Person(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    const yanchen = new Person('yangchen', 1020);
    console.log(yanchen);
    // console.log(Person.firstName);
    res.status(200).json({
        message: "get all the messages"
    })
})

main.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
})


// main practice of the oop concepts in javascript
/* 
    1.construtor functions,
    2.protoype inheritance
    3.class
    4. methods and property
    5. Object.create
    6. objects
*/
