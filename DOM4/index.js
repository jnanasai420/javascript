let button1 = document.getElementById("button1");
function clicker() {
  button1.style.backgroundColor = "aqua";
  button1.style.color = "red";
  button1.style.padding = " 10px 30px";
  button1.style.border = "2px solid black";
}
let button2 = document.getElementById("button2");
function dblclicker() {
  button2.style.backgroundColor = "grey";
  button2.style.color = "yellow";
  button2.style.padding = " 10px 40px";
  button2.style.border = "2px solid black";
}
let button3 = document.getElementById("button3");
function hover() {
  button3.style.backgroundColor = "aqua";
  button3.style.color = "red";
  button3.style.padding = " 10px 30px";
  button3.style.border = "2px solid black";
}
let button4 = document.getElementById("button4");
button4.onmouseout = function () {
  button4.style.backgroundColor = "aqua";
  button4.style.color = "red";
  button4.style.padding = " 10px 30px";
  button4.style.border = "2px solid black";
};

// event Binding
let button5 = document.getElementById("button5");
button5.onmouseleave = function () {
  button5.style.backgroundColor = "aqua";
  button5.style.color = "red";
  button5.style.padding = " 10px 30px";
  button5.style.border = "2px solid black";
};

let input1 = document.getElementById("input1");
input1.onkeypress = function () {
  document.body.style.backgroundColor = "aqua";
};
let input2 = document.getElementById("input2");

input2.onkeydown = function () {
  document.body.style.backgroundColor = "red";
};
let input3 = document.getElementById("input3");

input3.onkeyup = function () {
  document.body.style.backgroundColor = "green";
};
