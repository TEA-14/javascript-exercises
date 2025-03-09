//shoping cart program

//global variables

var StoreName = "Tech House"; // can be changed to any store name
const discountRate = 0.10; // 10% discount for premium customers
let totalCart = 0; // total cart amount

console.log(`Welcome to the ${StoreName}!`); // Welcome to the Tech House!

function addToCart(item, price, isPremium) {
 
    let message = `Adding ${item} to the cart`; // block scoped variable
    console.log(message);

    totalCart += price;

    if(isPremium) {
        let discount = totalCart * discountRate;
        console.log(`You got a discount of ${discount.toFixed(2)} originally price was ${totalCart.toFixed(2)}`);
        totalCart -= discount;
    }
}

addToCart("Laptop", 50000, true); // Adding Laptop to the cart
addToCart("Mobile", 20000, false); // Adding Mobile to the cart

console.log(`Total Cart Amount: ${totalCart.toFixed(2)}`); // Total Cart Amount: 63000.00

//undefined
let lastItem;
console.log(lastItem); // undefined