//block scope 
{
    var blockVar = "I am block scoped";
    let blockLet = "I am block scoped";
    const blockConst = "I am block scoped";

    console.log(blockVar);
    console.log(blockLet);
    console.log(blockConst);
}

console.log(blockVar);
console.log(blockLet); // ReferenceError: blockLet is not defined
console.log(blockConst); // ReferenceError: blockConst is not defined