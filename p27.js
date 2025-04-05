//object prototype

//creating object as person
const person = {
    //method greet
    greet() {
        console.log("Hello");
    }
};

const john = Object.create(person); //creates a new object
john.name = "Jhon"; //added property name: Jhon

john.greet(); // inherits greet from the person

console.log(john.__proto__ === person);