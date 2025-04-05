// regular functions

function myFunction(theObject) {

    theObject.make = "Toyota";

}

const car = {
    make: "Honda",
    model: "Civic",
    year: 2020
};

console.log(car.make); // Outputs: Toyota
myFunction(car);
console.log(car.make); // Outputs: Toyota


//arrow functions 

const greet = (name) => {
    console.log("Hello, " + name);
}

greet("TEA");


//default parameters

function orderPizza(size = "meduim", type = "crust") {

    console.log(`Ordering a pizza with size ${size} and type ${type}`);


}

orderPizza("large", "thin crust");
orderPizza("small");
orderPizza(); // default parameters will be used here


//rest parameters

function sumAll(...numbers) {
    let total = 0;

    for(let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sumAll(2,4,6));