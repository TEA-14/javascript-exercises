// call stack in functions 

function one() {

    console.log("One");
    two();
    console.log("One ends");
}

function two() {

    console.log("Two");
    three();
    console.log("Two ends");

}

function three() {
    console.log("Three");
}

one();


const greeting = name => {
    console.log(`Hello ${name}`);
}

greeting("Tayyab Ejaz Ahmed");