// hoisting var 

console.log(hoisted); //undefined
var hoisted = 10;

// what happened internally

/*let a; //decleared only
console.log(a);
a = 10;*/

//hoisting let

console.log(b); //ReferenceError
let b = 1;

//what happened internally 

/* b is hoisted but in TDZ
console.log(b);
b = 1; // intialized now out of TDZ
*/

