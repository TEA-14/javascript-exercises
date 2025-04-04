//hoisting 

//var is hoisted and intialized as undefined

console.log(a); //undefined
var a = 10;

//let and const are hoisted only in TDZ

//console.log(b); //Reference error can't access before intialization
let b = 20;

let age = 21;

if(true) {
    let age = 22;
    console.log(age);
}

console.log(age);