const a = {x: 10, y: 20}; // object a

const b = Object.create(a); // b's prototype is a

b.p = 100; // b's own property
b.q = 200; // b's own property


console.log(b.q);
console.log(b.p); // 100

console.log(b.x); // inherit from a
console.log(b.y); // inherit from a 


let object1 = {x: 10, y: 20};

let object2 = {y: 200, z: 100};

object2 = Object.create(object1); // create a new object with object1 as prototype
console.log(object2.x);

