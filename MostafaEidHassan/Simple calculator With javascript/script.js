const container = document.createElement("div");
container.style.width = "260px";
container.style.margin = "40px auto";
container.style.padding = "20px";
container.style.background = "#222";
container.style.color = "white";
container.style.borderRadius = "10px";
container.style.fontFamily = "Arial";
container.style.textAlign = "center";
container.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";

const display = document.createElement("input");
display.type = "text";
display.value = "";
display.style.width = "100%";
display.style.height = "50px";
display.style.fontSize = "24px";
display.style.textAlign = "right";
display.style.marginBottom = "15px";
display.style.border = "none";
display.style.borderRadius = "5px";
display.style.padding = "10px";
container.appendChild(display);

const buttons = [
  "7","8","9","/",
  "4","5","6","*",
  "1","2","3","-",
  "0",".","=","+",
  
];

let firstNumber = "";
let secondNumber = "";
let operator = null;

const grid = document.createElement("div");
grid.style.display = "grid";
grid.style.gridTemplateColumns = "repeat(4, 1fr)";
grid.style.gap = "10px";
container.appendChild(grid);

buttons.forEach(value => {
  const btn = document.createElement("button");
  btn.textContent = value;
  btn.style.padding = "15px";
  btn.style.fontSize = "18px";
  btn.style.border = "none";
  btn.style.borderRadius = "5px";
  btn.style.background = value === "=" ? "#2878c9" : value === "C" ? "#b62b2b" : "#444";
  btn.style.color = "white";

  btn.onclick = () => {

    if (value === "=") {
      secondNumber = display.value;
      const a = parseFloat(firstNumber);
      const b = parseFloat(secondNumber);
      let result;

      if (operator === "+") result = add(a, b);
      if (operator === "-") result = subtract(a, b);
      if (operator === "*") result = multiply(a, b);
      if (operator === "/") result = divide(a, b);

      display.value = result;
      firstNumber = String(result);
      secondNumber = "";
      operator = null;
      return;
    }

    display.value += value;
  };

  grid.appendChild(btn);
});

document.body.appendChild(container);
