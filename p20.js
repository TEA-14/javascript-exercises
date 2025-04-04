// global and local variables

let globalVar = "Hi, I am global variable";

function glo() {
let globalVar = "I am local variable";
console.log(globalVar); // accessible inside the function
}

globalVar = "I am changed";
console.log(globalVar); // accessible outside the function

glo();

function local() {
    let localVar = "I am inside the function";
    console.log(localVar);
}

///console.log(localVar); // can't access outside the function

local();

for (let i = 0; i < 3; i++) {
    // `i` is block-scoped, new `i` every iteration
  }
 // console.log(i); // ❌ ReferenceError
  
  for (var j = 0; j < 3; j++) {
    // `j` is function-scoped, still exists after loop
  }
  console.log(j); // ✅ 3
  