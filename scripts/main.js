
let firstname = 'farzad';

console.log(firstname);

function lights(){

    let color = prompt("What color is the light now");

    if (color === "red") {
        console.log("STOP!");
    }
    else if (color === "green") {
        console.log("GO!");
    }
    else if (color === "amber") {
        console.log("Stop if it is safe to do so");
    }
    else {
        console.log("invalid input");
    }
}
// lights();

function welcome() {
    let studentname = prompt("what is your name?")
    let message = "Welcome, " + studentname;
    document.getElementById('saywelcome').innerHTML = message;
}