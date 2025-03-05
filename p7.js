//data types in js
// String

let singleQuote = 'I am single quote string';
let doubleQuote = "I am double quote string";
let backTick = `I am backtick string`;

backTick[0] = 'i';

console.log(singleQuote);
console.log(doubleQuote);
console.log(backTick);

console.log(singleQuote[0]);
console.log(doubleQuote.charAt(0));

let mySelf = 'I\'am a software engineer';
console.log(mySelf);

let quote = "He said, \"I am a software engineer\"";
console.log("Here is my quote: ${quote}");

let name = "Tayyab";
let age = 23;

console.log(`Hello my name is ${name} and I am ${age} year old`);


let mutliLine = `This is a
multi-line`;
console.log(mutliLine);