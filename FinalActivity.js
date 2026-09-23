
function add(x,y){
let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);
document.getElementById("result").innerHTML = num1 + num2;
}

function subtract(x,y){
let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);
document.getElementById("result").innerHTML = num1 - num2;
}

function multiply(x,y){
let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);
document.getElementById("result").innerHTML = num1 * num2;
}

function divide(x,y){
let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);
if (num2 === 0) {
    document.getElementById("result").innerHTML = "Error: Division by zero is not allowed.";
} else {
    document.getElementById("result").innerHTML = num1 / num2;
}
}

function remainder(x,y){
let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);
if (num2 === 0) {
    document.getElementById("result").innerHTML = "Error: Division by zero is not allowed.";
} else {
    document.getElementById("result").innerHTML = num1 % num2;
}
}