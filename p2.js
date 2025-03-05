// Temporal Dead Zone TDZ with let
try {
    console.log(letItBe); // ReferenceError: Cannot access 'letItBe' before initialization

}catch(e) {
    console.log(e.message);
}
