
function add(){
   let num1 = Number(document.getElementById("num1").value);
   let num2 = Number(document.getElementById("num2").value);
   document.getElementById("result").innerHTML = num1 + num2;
}
function Subtract(){
   let num1 = Number(document.getElementById("num1").value);
   let num2 = Number(document.getElementById("num2").value);
   document.getElementById("result").innerHTML = num1 - num2;
   document.getElementById("result").innerHTML = num1 * num2;
   document.getElementById("result").innerHTML = num1 / num2;
   document.getElementById("result").innerHTML = num1 % num2;
}
function Multiply(){
   let num1 = Number(document.getElementById("num1").value);
   let num2 = Number(document.getElementById("num2").value);
   document.getElementById("result").innerHTML = num1 * num2;
}
function Divide(){
   let num1 = Number(document.getElementById("num1").value);
   let num2 = Number(document.getElementById("num2").value);
   document.getElementById("result").innerHTML = num1 / num2;
}
function Remainder(){
   let num1 = Number(document.getElementById("num1").value);
   let num2 = Number(document.getElementById("num2").value);
   document.getElementById("result").innerHTML = num1 % num2;
}
function clearResult() {
    document.getElementById("result").innerHTML = "";
}