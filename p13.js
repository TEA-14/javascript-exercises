//user login authentication

const systemName = "Secure Login";
let loginAttempt = 0;
var isLoggedIn;

console.log(`Welcome to the ${systemName}!`);

function login(username, password, isPremium) {
    if(!username || !password) {
        console.log("Please provide valid credentials");
        return;
    }

    isLoggedIn = true;
    loginAttempt++;

    console.log(`Welcome ${username}!`);

    if(isPremium) {
        console.log(`Welcome ${username}, you are a premium user!`);
    }
}

login("tayyab", "1234", true);
login("ahmed", "1234", false);

console.log(`Total login attempts: ${loginAttempt}`); // Total login attempts: 2
console.log(`Is user logged in: ${isLoggedIn}`); // Is user logged in: true