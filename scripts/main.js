
// saying name for console

let firstname = 'farzad';

console.log(firstname);

// lights function

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

// function for buttons

function f1() {
    alert("Script 1 in progress..");
}
function f2() {
    alert("Script 2 in progress..");
}
function f3() {
    alert("Script 3 in progress..");
}
function f4() {
    alert("Script 4 in progress..");
}
function f5() {
    alert("Script 5 in progress..");
}
function f6() {
    alert("Script 6 in progress..");
}
function f7() {
    alert("Script 7 in progress..");
}
function f8() {
    alert("Script 8 in progress..");
}
function f9() {
    alert("Script 9 in progress..");
}

