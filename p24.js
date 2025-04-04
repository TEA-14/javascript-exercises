// object data type

let person = {
    name: "Tayyab",
    age: 21,
    "full name": "Tayyab Ejaz Ahmed",
    greet() {
        console.log("Hello", this.name);
    }
};

let key = "age";
person.age = 31;
person["name"] = "TEA";
console.log(person.name, person[key]);

person.greet();

console.log(person["full name"]);