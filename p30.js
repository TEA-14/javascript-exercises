// 1. Variable Declarations with let, var, const
// `let` and `const` are block-scoped, while `var` is function-scoped.

// Using `let`
let age = 25;
if (true) {
  let age = 30; // This `age` is local to this block.
  console.log("Inside block, age:", age); // 30
}
console.log("Outside block, age:", age); // 25

// Using `const`
const name = "John";
// name = "Jane"; // Error: Assignment to constant variable

// Using `var`
var country = "Pakistan";
if (true) {
  var country = "Canada"; // This will override the value of country because `var` is function-scoped.
}
console.log("Country:", country); // Canada

// 2. Primitive Data Types
let str = "Hello, world!"; // string
let num = 42; // number
let isActive = true; // boolean
let emptyValue = null; // null
let bigIntNum = 1234567890123456789012345678901234567890n; // BigInt
let symbol = Symbol("uniqueSymbol"); // symbol

// 3. Non-Primitive Data Types
// Objects
let person = {
  name: "Alice",
  age: 28,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  },
};

console.log(person.name); // Alice
person.greet(); // Hello, my name is Alice

// Arrays (a special kind of object)
let numbers = [10, 20, 30];
console.log(numbers[0]); // 10

// 4. Object Prototype Example
let animal = {
  species: "Dog",
  sound: "Bark",
  makeSound: function() {
    console.log(this.sound);
  }
};

// Create another object with `animal` as the prototype
let dog = Object.create(animal);
dog.breed = "Labrador";
dog.sound = "Woof"; // Override the sound property

console.log(dog.species); // Dog (from prototype)
console.log(dog.breed); // Labrador (from dog object)
dog.makeSound(); // Woof (from dog object)

// 5. Prototype Chain Example
let o1 = { a: 100, b: 200, c: 300 };
let o2 = { a: 10, b: 20 };

// Set prototype of o2 to o1
Object.setPrototypeOf(o2, o1);
console.log(o2.a); // 10 (from o2), but it's overridden
console.log(o2.b); // 20 (from o2)
console.log(o2.c); // 300 (from o1 prototype)

// Set prototype of o3 to o2
let o3 = { a: 1 };
Object.setPrototypeOf(o3, o2);
console.log(o3.a); // 1 (from o3)
console.log(o3.b); // 20 (from o2)
console.log(o3.c); // 300 (from o1 prototype)

