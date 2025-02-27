console.log(sneakyVar); // undefined
var sneakyVar = "I was hoisted!";

function testVar() {
    if(true) {
        var insideIf = "I am inside if block";
    }

    console.log(insideIf); // I am inside if block
}

testVar(); 
/* In the above code, the variable  sneakyVar  is hoisted to the top of the function scope. So, the first  console.log  statement prints  undefined . The variable  insideIf  is also hoisted to the top of the function scope. So, the second  console.log  statement prints  I am inside if block . 
 Let’s see another example:*/