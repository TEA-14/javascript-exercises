var globalVar = "I am global var";
let globalLet = "I am global let";
const globalConst = "I am global const";

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

function globalScope() {
    console.log(globalVar);
    console.log(globalConst);
    let globalLet = "I am global let inside function";
    console.log(globalLet);
   
}
console.log(globalLet);
globalScope();