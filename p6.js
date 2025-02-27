// global variable declared with var
var counter = 0;
//const for max count
const maxCount = 5;

function increment() {
//trying to log counter before its declaration (hoisting test)
    console.log('Current counter (before increment):', counter);
    //local variable declared with let
    let step = 1;
   //increment the global variable
    counter += step;
    console.log('Counter after increment:', counter);

    if(counter > maxCount) {
        console.log('Counter exceeded the max count');
    }
    
}

increment(); // 1 2 3 4 5