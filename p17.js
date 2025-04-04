//var, let and const
// var-scope
function testVar() {
    if(true) {
        var x = 10; //it is function scoped
        var x = 20; //can be redeclared
    }
    console.log("The output of the var:",x); //acessible outside the block (output: 20)
}
testVar();

function testLet() {
    if(true) {
        let y = 5; //it is block scoped
        y = 30; // can be reassigned
        //let y = 10; //syntax error can't redeclare
        const z = 10;
        console.log("The output of the reassigned let:",y); //output 5
        console.log("The output of the const:",z); //output 10
    }

    //console.log(y); //not accessible outside the block
    //console.log(z); //not accessible outside the block
}
testLet();

 

