const unBreakAble = "I can't be reassigned";

try {

    unBreakAble = "It can't be changed";
}catch(e) {
    console.log(e.message); // TypeError: Assignment to constant variable.
}