let num1 = 20;
let num2 = 5;

function add(x, y){
    return x+y;

}

function subtract(x, y){
    return x-y;
}

function multiply(x, y){
    return x*y;
}

function divide(x, y){
    if (y === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return x / y;
}

function performCalculations() {

document.getElementById("add").innerHTML = "Addition: " + add(num1, num2);
document.getElementById("subtract").innerHTML = "Subtraction: " + subtract(num1, num2);
document.getElementById("multiply").innerHTML = "Multiplication: " + multiply(num1, num2);
document.getElementById("divide").innerHTML = "Division: " + divide(num1, num2);
}