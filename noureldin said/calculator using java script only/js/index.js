// --- Simple CSS ---
const style = document.createElement("style");
style.textContent = `
  .calculator {
    width: 220px;
    margin: 20px auto;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #f2f2f2;
  }
  .display {
    width: 100%;
    height: 40px;
    font-size: 20px;
    margin-bottom: 10px;
    text-align: right;
    padding-right: 10px;
    box-sizing: border-box;
  }
  .buttons button {
    width: 50px;
    height: 40px;
    margin: 5px;
    font-size: 18px;
    diplay: grid;
  }
`;
document.head.appendChild(style);

// --- Create Calculator Body ---
const calc = document.createElement("div");
calc.className = "calculator";

const display = document.createElement("input");
display.className = "display";
display.readOnly = true;
display.value = "0";

calc.appendChild(display);

const btns = document.createElement("div");
btns.className = "buttons";
calc.appendChild(btns);

document.body.appendChild(calc);

// --- Buttons List ---
const buttons = [
  "7","8","9","6","5","4",
  "1","2","3","-",
  "0","/","=","+",
  "C"
];

// --- Create Buttons ---
buttons.forEach(text => {
  const b = document.createElement("button");
  b.textContent = text;
  btns.appendChild(b);
});

// --- Simple Logic ---
let current = "";

btns.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;

  const value = e.target.textContent;

  if (value === "C") {
    current = "";
    display.value = "0";
    return;
  }

  if (value === "=") {
    try {
      current = eval(current).toString();
      display.value = current;
    } catch {
      display.value = "Error";
      current = "";
    }
    return;
  }

  current += value;
  display.value = current;
});
