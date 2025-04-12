// the oops concepts in javascript is different from the oop concept in lower programming languages
// class, methods, objects, and the four pillar of the oop concepts
// 1. encapsulation, inheritance, abstraction and the polymorphism
// now its high time to combine all the concepts into  one, that i have learned so far for more than 2 years.
// be the dsa or any other programming concepts, its combine all the concept and start builing all the stuff
// that i wanted to build so bad, i really need to have a strong foundations in everything that i do
// r & d and l, is the main core concept that i really believed in. Now lets rock and roll



/* 
class(is like a blue print for the objects, or its act like a template for the objects)
objects(its like a container that holds all the properties of that particular objects)
methods(functions inside the class is called as the methods ty)
constructors(that init the properties of the objects)

// four pillar of the oops concept
1. abstraction
2. inheritance
3. encapsulation
4. polymorphism
*/
// this is the template for the objects that i want to create
class professor {
    name;
    subject;
    salary;

    // using the constructor, we should be using the constructor keyword unlike the c++
    constructor(name, subject, salary) {
        this.name = name;
        this.subject = subject;
        this.salary = salary;
    }
    // defining the methods
    introduce() {
        console.log("Welcome", this.name)
    }
}

// creating the objects using the professor, where it will acts as the template for the objects
const tshewang = new professor("tshewang", "chemistry", 1200);
tshewang.introduce();

// the different methods to create a objects in javascript
/* 
object literals, const obj ={};
using the constructor functions, that what we do in oops concept, should be using the new keywords
using the Object.create
using the new Object() constructor
*/
