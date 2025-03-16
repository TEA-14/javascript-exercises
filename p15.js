const product = {
    name: "Laptop",
    price: 1000.00,
    discount: 0.1,
    name: "Laptop", // we can't have duplicate keys

    getFinalPrice: function() {
        return this.price - (this.price * this.discount);
    }
}

console.log(product.getFinalPrice()); // 900

product.name = "Desktop"; // we can change the value
console.log(product.name); // Desktop


const bankAccount = {
    accountholder: "Tayyab",
    balance: 10000,
    accountType: "currrent"

};

bankAccount.balance = 20000;
console.log(bankAccount); // Tayyab