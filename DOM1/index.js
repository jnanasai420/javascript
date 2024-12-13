let htag = document.getElementById("header");
htag.style.color = "orange";
htag.style.textAlign = "center";
htag.style.marginLeft = "300px";
htag.style.width = "500px";
htag.style.backgroundColor = "blue";
htag.style.textDecoration = "underline";
htag.style.textDecorationColor = "aqua";
htag.style.border = "2px solid black";
htag.style.padding = "40px";
htag.style.cursor = "pointer";
htag.style.textTransform = "uppercase";

//hover
function hover() {
  htag.textContent = "jnana sai here";
  htag.style.backgroundColor = "yellow";
  htag.style.color = "black";
  htag.style.padding = "80px";
  htag.style.borderRadius = "50px";
  htag.style.boxShadow = "20px 20px 10px red";
}
function unhover() {
  htag.style.backgroundColor = "blue";
  htag.style.color = "orange";
  htag.style.textDecoration = "underline";
  htag.style.textDecorationColor = "aqua";
  htag.style.border = "2px solid black";
  htag.style.padding = "40px";
  htag.style.borderRadius = "0px";
  htag.style.boxShadow = "0px 0px 0px";
}
//onclick
let htag2 = document.getElementById("header1");
htag2.style.backgroundColor = "green";
htag2.style.textAlign = "center";
htag2.style.marginLeft = "300px";
htag2.style.width = "500px";
htag2.style.color = "aqua";
htag2.style.border = "2px solid black";
htag2.style.textDecoration = "underline";
htag2.style.textDecorationColor = "aqua";
htag2.style.padding = "40px";
htag2.style.cursor = "pointer";
htag2.style.textTransform = "uppercase";

function clicker() {
  htag2.style.backgroundColor = "aqua";
  htag2.style.color = "green";
  htag2.style.textDecoration = "underline";
  htag2.style.textDecorationColor = "aqua";
  htag2.style.border = "2px solid black";
  htag2.style.padding = "80px";
  htag2.style.cursor = "pointer";
  htag2.style.borderRadius = "50px";
  htag2.style.boxShadow = "20px 20px 10px grey";
}
document.onclick = function (event) {
  if (!htag2.contains(event.target)) {
    htag2.style.backgroundColor = "green";
    htag2.style.color = "aqua";
    htag2.style.textDecoration = "underline";
    htag2.style.textDecorationColor = "aqua";
    htag2.style.border = "2px solid black";
    htag2.style.padding = "40px";
    htag2.style.cursor = "pointer";
    htag2.style.textTransform = "uppercase"; // Revert color if clicked outside
    htag2.style.borderRadius = "0px";
    htag2.style.boxShadow = "0px 0px 0px";
  }
};
//ondouble click
let htag3 = document.getElementById("header2");
htag3.style.backgroundColor = "red";
htag3.style.textAlign = "center";
htag3.style.marginLeft = "300px";
htag3.style.width = "500px";
htag3.style.color = "skyblue";
htag3.style.textDecoration = "underline";
htag3.style.textDecorationColor = "aqua";
htag3.style.border = "2px solid black";
htag3.style.padding = "40px";
htag3.style.cursor = "pointer";
htag3.style.textTransform = "uppercase";

function doubleclicker() {
  htag3.style.backgroundColor = "skyblue";
  htag3.style.color = "red";
  htag3.style.textDecoration = "underline";
  htag3.style.textDecorationColor = "aqua";
  htag3.style.border = "2px solid black";
  htag3.style.padding = "80px";
  htag3.style.cursor = "pointer";
  htag3.style.textTransform = "uppercase";
  htag3.style.borderRadius = "50px";
  htag3.style.boxShadow = "20px 20px 10px yellow";
}
document.ondblclick = function (event) {
  if (!htag3.contains(event.target)) {
    htag3.style.backgroundColor = "red";
    htag3.style.color = "skyblue";
    htag3.style.textDecoration = "underline";
    htag3.style.textDecorationColor = "aqua";
    htag3.style.border = "2px solid black";
    htag3.style.padding = "40px";
    htag3.style.cursor = "pointer";
    htag3.style.textTransform = "uppercase";
    htag3.style.borderRadius = "0px";
    htag3.style.boxShadow = "0px 0px 0px";
  }
};
