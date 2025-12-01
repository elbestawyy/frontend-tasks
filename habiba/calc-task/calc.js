// Create a wrapper container for the whole calculator
let wrapper = document.createElement("div");
wrapper.style.display = "flex";
wrapper.style.flexDirection = "column";
wrapper.style.alignItems = "center"; 
wrapper.style.justifyContent = "center"; 
wrapper.style.minHeight = "100vh"; 
wrapper.style.gap = "10px"; // 
document.body.appendChild(wrapper);

// Display box
let box = document.createElement("div");
box.style.width = "300px";
box.style.height = "50px";
box.style.border = "2px solid black";
box.style.fontSize = "30px";
box.style.display = "flex";
box.style.alignItems = "center";
box.style.justifyContent = "center";
wrapper.appendChild(box);

// Container for number buttons
let container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "300px";
wrapper.appendChild(container);

// Container for operator buttons
let opcontainer = document.createElement("div");
opcontainer.style.display = "flex";
opcontainer.style.flexWrap = "wrap";
opcontainer.style.width = "300px";
wrapper.appendChild(opcontainer);

// Variables for calculation
let firstNumber = "";
let operator = "";
let secondNumber = "";

// Number buttons
const num_btn = ["7","8","9","4","5","6","1","2","3","0"];
for (let i = 0; i < num_btn.length; i++) {
    let btn = document.createElement("button");
    btn.textContent = num_btn[i];
    btn.style.margin = "5px";
    btn.style.padding = "10px 15px";
    btn.style.fontSize = "18px";
    btn.style.flex = "1 0 30%";

    btn.onclick = function () {
        if (operator === "") {
            firstNumber += num_btn[i];
            box.textContent = firstNumber;
        } else {
            secondNumber += num_btn[i];
            box.textContent = secondNumber;
        }
    };

    container.appendChild(btn);
}

// Operator buttons
const op_btn = ["/","*","-","=","+"];
for (let i = 0; i < op_btn.length; i++) {
    let btn = document.createElement("button");
    btn.textContent = op_btn[i];
    btn.style.margin = "5px";
    btn.style.padding = "10px 15px";
    btn.style.fontSize = "18px";
    btn.style.flex = "1 0 30%";

    btn.onclick = function () {
        let op = op_btn[i];
        if (op !== "=") {
            operator = op;
            box.textContent = operator;
        } else {
            let n1 = Number(firstNumber);
            let n2 = Number(secondNumber);
            let result = 0;

            switch (operator) {
                case "+": result = n1 + n2; break;
                case "-": result = n1 - n2; break;
                case "*": result = n1 * n2; break;
                case "/": result = n2 !== 0 ? n1 / n2 : "Error"; break;
            }

            box.textContent = result;

            firstNumber = String(result);
            secondNumber = "";
            operator = "";
        }
    };

    opcontainer.appendChild(btn);
}

// Clear button
let clearBtn = document.createElement("button");
clearBtn.textContent = "C";
clearBtn.style.margin = "5px";
clearBtn.style.padding = "10px 15px";
clearBtn.style.fontSize = "18px";
clearBtn.style.flex = "1 0 30%";

clearBtn.onclick = function () {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    box.textContent = "";
};

opcontainer.appendChild(clearBtn);


