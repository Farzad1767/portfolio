
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

function largerNumber() {
    let num1 = prompt("Enter the first number");
    let num2 = prompt("Enter the second number");
    if (num1 > num2){
        output = num1;
    } else if (num2 == num1){
        output = "The numbers entered are equal";
    } else if (num2 > num1){
        output = num2;
    } else {
        output = "Invalid input";
    }
    document.getElementById('largerNum').innerHTML = output;
}
function signOfProduct(){
    let x = parseInt(prompt("Enter the first number"));
    let y = parseInt(prompt("Enter the second number"));
    let z = parseInt(prompt("Enter the third number"));
    
    if (x>0 && y>0 && z>0){
        document.getElementById('signOfProduct').innerHTML = "The sign is +";
    }
    else if (x==0 && y==0 && z==0){
        document.getElementById('signOfProduct').innerHTML = "Invalid Input";
    }
    else if (x<0 && y<0 && z>0){
        document.getElementById('signOfProduct').innerHTML = "The sign is +";
    }
    else if (x>0 && y<0 && z<0){
        document.getElementById('signOfProduct').innerHTML = "The sign is +";
    }
    else if (x<0 && y>0 && z<0){
        document.getElementById('signOfProduct').innerHTML = "The sign is +";
    }
    else{
        document.getElementById('signOfProduct').innerHTML = "The sign is -";
    }
}

function threeNumberSort() {
    let num1 = parseInt(prompt("Enter the first number"));
    let num2 = parseInt(prompt("Enter the second number"));
    let num3 = parseInt(prompt("Enter the third number"));
    let numsorted = "";
    if (num1 > num2 && num2 > num3){
        numsorted = toString(num1) + "," + toString(num2) + "," + toString(num3);
    }
    else if (num1 > num3 && num3 > num2){
        numsorted = num2.toString() + "," + num3.toString() + "," + num1.toString();
    }
    else if (num2 > num1 && num1 > num3){
        numsorted = num3.toString() + "," + num1.toString() + "," + num2.toString();
    }
    else if (num2 > num3 && num3 > num1){
        numsorted = num1.toString() + "," + num3.toString() + "," + num2.toString();
    }
    else if (num3 > num2 &&  num2 > num1){
        numsorted = num1.toString() + "," + num2.toString() + "," + num3.toString();
    }
    else if (num3 > num1 && num1 > num2){
        numsorted = num2.toString() + "," + num1.toString() + "," + num3.toString();
    }
    document.getElementById('threeNumberSort').innerHTML = numsorted;
}

function forSumThrees() {
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

