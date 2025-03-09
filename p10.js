//Symbol premitive data type

let firstName = Symbol("Tayyab"),
lastName = Symbol("Ejaz");

console.log(typeof(firstName));
console.log(String(firstName) + String(lastName));

let name = Symbol("John");
name = Symbol("Doe");
console.log(name); // Doe