
function createCalculator() {

    const createEl = (tag, text = '', className = '', id = '') => {
        const el = document.createElement(tag);
        if (text) el.textContent = text;
        if (className) el.className = className;
        if (id) el.id = id;
        return el;
    };


    let currentInput = '0';
    let storedValue = null;
    let operator = null;
    let waitForNewInput = false;

    const updateDisplay = () => {
        const displayEl = document.getElementById('display');

        displayEl.textContent = currentInput.length > 15
            ? parseFloat(currentInput).toPrecision(10)
            : currentInput;
    };

    const inputDigit = (digit) => {
        if (waitForNewInput) {
            currentInput = digit;
            waitForNewInput = false;
        } else {
            if (digit === '.') {
                if (!currentInput.includes('.')) {
                    currentInput += digit;
                }
            } else {
                currentInput = currentInput === '0' ? digit : currentInput + digit;
            }
        }
        updateDisplay();
    };

    const calculate = (first, second, op) => {
        const num1 = parseFloat(first);
        const num2 = parseFloat(second);
        if (op === '+') return num1 + num2;
        if (op === '-') return num1 - num2;
        if (op === '*') return num1 * num2;
        if (op === '/') {
            if (num2 === 0) {
                alert("Error: Division by zero!");
                return NaN;
            }
            return num1 / num2;
        }
        return num2;
    };

    const handleOperator = (nextOperator) => {
        const inputValue = parseFloat(currentInput);

        if (storedValue === null) {
            storedValue = inputValue;
        } else if (operator) {
            const result = calculate(storedValue, inputValue, operator);
            if (isNaN(result)) {
                clearAll();
                currentInput = 'Error';
                updateDisplay();
                return;
            }
            storedValue = result;
            currentInput = String(result);
        }

        waitForNewInput = true;
        operator = nextOperator === '=' ? null : nextOperator;
        updateDisplay();
    };

    const clearAll = () => {
        currentInput = '0';
        storedValue = null;
        operator = null;
        waitForNewInput = false;
        updateDisplay();
    };


    const handleButtonClick = (event) => {
        if (!event.target.matches('button')) return;

        const value = event.target.dataset.value;

        if (value === 'clear') {
            clearAll();
        } else if (['+', '-', '*', '/', '='].includes(value)) {
            handleOperator(value);
        } else if (value === '.' || /[0-9]/.test(value)) {
            inputDigit(value);
        }
    };


    const calculator = createEl('div', '', 'calculator');
    calculator.style.cssText = `
        width: 300px;
        margin: 50px auto;
        border: 2px solid #333;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        background-color: #f8f8f8;
        padding: 10px;
    `;

    const display = createEl('div', '0', 'display', 'display');
    display.style.cssText = `
        background-color: #222;
        color: white;
        text-align: right;
        padding: 15px;
        font-size: 2em;
        border-radius: 5px;
        margin-bottom: 10px;
        overflow-x: auto;
        white-space: nowrap;
    `;
    calculator.appendChild(display);

    const keypad = createEl('div', '', 'keypad');
    keypad.style.cssText = `
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
    `;
    calculator.appendChild(keypad);

    const buttons = [
        ['clear', 'AC', 'operator', 'background-color: #ff9500;'],
        ['/', '÷', 'operator', 'background-color: #ff9500;'],
        ['*', '×', 'operator', 'background-color: #ff9500;'],
        ['-', '−', 'operator', 'background-color: #ff9500;'],
        ['7', '7'],
        ['8', '8'],
        ['9', '9'],
        ['+', '+', 'operator', 'background-color: #ff9500;'],
        ['6', '6'],
        ['5', '5'],
        ['4', '4'],
        ['.', '.', 'decimal'],
        ['3', '3'],
        ['2', '2'],
        ['1', '1'],
        ['=', '=', 'operator equal', 'background-color: #007bff; grid-row: span 2; height: 100%;'],
        ['0', '0', 'zero', 'grid-column: span 3;'],
    ];

    buttons.forEach(([value, text, className = '', style = '']) => {
        const button = createEl('button', text, `key ${className}`);
        button.dataset.value = value;
        button.style.cssText = `
            padding: 15px;
            font-size: 1.2em;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.1s;
            background-color: #e0e0e0;
            ${style}
        `;
        button.onmouseover = () => button.style.opacity = 0.8;
        button.onmouseout = () => button.style.opacity = 1;

        keypad.appendChild(button);
    });

    keypad.addEventListener('click', handleButtonClick);

    document.body.appendChild(calculator);
}

document.addEventListener('DOMContentLoaded', createCalculator);