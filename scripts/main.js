
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
    let num1 = parseInt(prompt("Enter the first number"));
    let num2 = parseInt(prompt("Enter the second number"));
    if (num1 > num2){
        output = num1;
    } else if (num2 == num1){
        output = "The numbers entered are equal";
    } else if (num2 > num1){
        output = num2;
    } else {
        output = ('Invalid output');
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
function whileSumThrees() {
    let total = 0;
    let x = 0;
    while (x < 1000) {
        total += x;
        x = x + 3;
    }
    document.getElementById('whileSumThrees').innerHTML = total;
}



function tenFour() {
    for(x = 1; x <= 100; x++){
        if(x % 4 == 0 && x % 10 == 0){
            console.log("TenFour")
        }
        else if(x % 4 === 0){
            console.log("Four")
        }
        else if(x % 10 === 0){
            console.log("Ten")
        }
        else{
            console.log(x)
        }

    }
}

// Input the year and output the century it was in

function centuryFromYear() {
    let year = prompt("Enter year and get the century of it");
    let century = 0;
    century = Math.floor(year/100 + 1);  // Rounding down century
    document.getElementById('centuryFromYear').innerHTML = century;
}
function thirdAngle() {
    let angle1 = parseInt(prompt("Enter the first angle of your triangle"));
    let angle2 = parseInt(prompt("Enter the second angle of your triangle"));
    let totaloftheangles = angle1 + angle2;
    let angle3 = "";
    if(totaloftheangles >= 180){
        angle3 = "Valid output because the triangle's total angle is 180";
    }
    else if(angle1 < 0 && angle2 < 0){
        angle3 = "Angles are not positive";
    }
    else if(angle1 > 0 && angle2 < 0){
        angle3 = "Angles are not positive";
    }
    else if(angle1 < 0 && angle2 > 0){
        angle3 = "Angles are not positive";
    }
    else{
        angle3 = 180 - (angle1 + angle2);
    }
    document.getElementById('thirdAngle').innerHTML = angle3;
}


