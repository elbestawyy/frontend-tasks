// ---linking bootstrap
const bootstrapCSS = document.createElement("link");
bootstrapCSS.rel = "stylesheet";
bootstrapCSS.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
document.head.appendChild(bootstrapCSS);

// --container
const container = document.createElement("div");
container.className = "container mt-5";
document.body.appendChild(container);

const title = document.createElement("h2");
title.textContent = "Calculator";
title.className = "text-center mb-4";
container.appendChild(title);
// --card
const card = document.createElement("div");
card.className = "card p-4 shadow mx-auto";
card.style.maxWidth = "350px";
container.appendChild(card);

// -----display field
const display = document.createElement("input");
display.className = "form-control mb-3 text-end fs-4";
display.readOnly = true;
card.appendChild(display);


const btnGrid = document.createElement("div");
btnGrid.className = "d-grid gap-2";
card.appendChild(btnGrid);

const numbers = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [0]
];

// -----creating buttons
numbers.forEach(row => {
  const rowDiv = document.createElement("div");
  rowDiv.className = "d-flex gap-2";
  btnGrid.appendChild(rowDiv);

  row.forEach(num => {
    const btn = document.createElement("button");
    btn.className = "btn btn-secondary fs-4 flex-fill";
    btn.textContent = num;
    btn.onclick = () => { 
      (display.value) += num;  
    };
    rowDiv.appendChild(btn);
  });
});

const opRow = document.createElement("div");
opRow.className = "d-flex gap-2 mt-3";
card.appendChild(opRow);

function createOp(symbol, color, callback) {
  const btn = document.createElement("button");
  btn.className = `btn btn-${color} fs-4 flex-fill`;
  btn.textContent = symbol;
  btn.onclick = callback;
  opRow.appendChild(btn);
  return btn;
}

let storedValue = null;
let currentOp = null;

createOp("+", "primary", () => {
  storedValue = Number(display.value);
  currentOp = "+";
  display.value = "";
});

createOp("-", "warning", () => {
  storedValue = Number(display.value);
  currentOp = "-";
  display.value = "";
});

createOp("*", "success", () => {
  storedValue = Number(display.value);
  currentOp = "*";
  display.value = "";
});

createOp("/", "danger", () => {
  storedValue = Number(display.value);
  currentOp = "/";
  display.value = "";
});

createOp("=", "dark", () => {
  if (storedValue !== null && currentOp !== null) {
    const num2 = Number(display.value);
    let result;

    if (currentOp === "+") result = storedValue + num2;
    if (currentOp === "-") result = storedValue - num2;
    if (currentOp === "*") result = storedValue * num2;
    if (currentOp === "/") {
      if (num2 === 0) {
        result = "Cannot Divide By Zero";  
        result.className="text-danger";}
      else result = storedValue / num2;
    }

    display.value = result;
    storedValue = null;
    currentOp = null;
  }
});


createOp("C", "secondary", () => {
  display.value = "";
  storedValue = null;
  currentOp = null;
});
