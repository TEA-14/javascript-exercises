// object

const person = {
    name: 'Tayyab',
    age: 21,
    isStudent: true
}
console.log(person); // { name: 'Tayyab', age: 21, isStudent: true }

//other way to create object

const vehicle = new Object();
vehicle.name = 'Toyota';
vehicle.model = 'Corolla';
console.log(vehicle); // { name: 'Toyota', model: 'Corolla' }
console.log(vehicle.model);
console.log(vehicle['model']);


