
var display = document.createElement("div");
display.style.border = "1px solid black";
display.style.width = "200px";
display.style.padding = "10px";
display.style.marginBottom = "10px";
display.style.fontSize = "20px";
display.textContent = "";
document.body.appendChild(display);


var container = document.createElement("div");
container.style.width = "200px";
document.body.appendChild(container);

var buttons = [
  "7","8","9","+",
  "4","5","6","-",
  "1","2","3","*",
  ,"C","0","="
];


buttons.forEach(text => {
  var btn = document.createElement("button");
  btn.textContent = text;
  btn.style.margin = "5px";
  btn.style.width = "40px";
  btn.style.height = "40px";
  btn.style.fontSize = "18px";

  btn.addEventListener("click", () => handleClick(text));
  container.appendChild(btn);
});

let current = "";     
let operator = null;   
let num1 = null;      

function handleClick(value) {   // text
   
  switch (true) {

  
    case (value >= "0" && value <= "9"):
      current += value;
      display.textContent = current;
      break;

    
    case (value === "C"):
      current = "";
      operator = null;
      num1 = null;
      display.textContent = "";
      break;

   
    case (value === "+" || value === "-" || value === "*" || value === "/"):
      num1 = +current;
      operator = value;
      current = "";
      display.textContent = operator;
      break;

    
    case (value === "="):
      const num2 = +current;
      let result = 0;

      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
      }

      display.textContent = result;
      current = result.toString();
      operator = null;
      break;
  }
}


/* 

var num1 = document.createElement("input");
num1.type = "number";

var num2 = document.createElement("input");
num2.type = "number";

var result = document.createElement("div");
result.textContent = "result : ";

var addBtn = document.createElement("button");
addBtn.textContent = "+";

var subBtn = document.createElement("button");
subBtn.textContent = "-";

var mulBtn = document.createElement("button");
mulBtn.textContent = "*";

var divBtn = document.createElement("button");
divBtn.textContent = "/";

document.body.appendChild(num1);
document.body.appendChild(num2);
document.body.appendChild(addBtn);
document.body.appendChild(subBtn);
document.body.appendChild(mulBtn);
document.body.appendChild(divBtn);
document.body.appendChild(result);

addBtn.addEventListener("click", function () {
  result.textContent = +num1.value + +num2.value ;
});

subBtn.addEventListener("click", function () {
  result.textContent = num1.value - num2.value ;
});

mulBtn.addEventListener("click", function () {
  result.textContent = num1.value * num2.value ;
});

divBtn.addEventListener("click", function () {
  result.textContent = num1.value / num2.value ;
}); */