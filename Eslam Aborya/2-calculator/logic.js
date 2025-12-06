const style = document.createElement("style");
style.textContent = `
    body {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #bda9a9ff;
        font-family: Arial, sans-serif;
    }

    h1 {
        margin-bottom: 20px;
        font-size: 28px;
        color: #2b2b2bff;
    }

    .calculator {
        background-color: #c7c7c7ff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        width: 250px;
    }

    .display {
        width: 100%;
        height: 60px;
        text-align: right;
        font-size: 22px;
        border-radius: 8px;
        margin-bottom: 15px;
        border: none;
        background-color: #f0f0f0;
    }

    .buttons {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 10px;
    }

    button {
        padding: 15px;
        font-size: 18px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        background-color: #eee;
        transition: 0.2s;
    }

    button:hover {
        background-color: #d4d4d4;
    }

    .equal {
        background-color: #4CAF50;
        color: white;
    }
`;
document.head.appendChild(style);

const title = document.createElement("h1");
title.textContent = "Calculator";
document.body.appendChild(title);

const calculator = document.createElement("div");
calculator.className = "calculator";

const display = document.createElement("input");
display.className = "display";
display.disabled = true;
display.value = "";

const buttons = document.createElement("div");
buttons.className = "buttons";

const keys = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", "C", "=", "+"
];

keys.forEach(key => {
    const btn = document.createElement("button");
    btn.textContent = key;

    btn.onclick = () => {
        if (key === "C") {
            display.value = "";
        } else if (key === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } else {
            display.value += key;
        }
    };

    if (key === "=") btn.classList.add("equal");

    buttons.appendChild(btn);
});

calculator.appendChild(display);
calculator.appendChild(buttons);
document.body.appendChild(calculator);
