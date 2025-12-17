# Simple Calculator (calc)

This small project implements a basic calculator UI using vanilla JavaScript. It dynamically builds the calculator interface and handles user clicks to build arithmetic expressions and evaluate them.

Files
- `index.html`: Minimal HTML that loads `calc.js`.
- `calc.js`: JavaScript that creates the calculator UI and implements button behavior.

How to run
- Open `index.html` in a browser (double-click or use a local static server).

What `calc.js` does (step-by-step)

- `createCalc()` is the main function which is executed at the bottom of the file.
- It creates a container `div` (referred to as `shape`) and applies inline styles for width, padding, alignment, and border radius.
- An `input` element is created and styled; it is set to `disabled = true` so the user cannot type directly — the calculator UI controls the input.
- A `buttons` array defines the calculator keys: digits `0–9`, decimal `.` , operators `/ * - +`, the equals key `=`, and a clear key `C`.
- A `buttonContainer` is created and styled as a CSS grid with four columns; each button is created, styled, and appended to this container.
- Each button receives a `click` event listener:
  - If the clicked button is `=`: the code attempts to evaluate the expression currently in the input using `eval(input.value)` and sets the input value to the result. If evaluation throws an exception, the input is set to the string `please enter number`.
  - If the clicked button is `C`: the input is cleared.
  - Otherwise: the clicked character (digit, operator, or `.`) is appended to the input string.

Important notes and recommendations
- Security: `calc.js` uses `eval()` to evaluate arithmetic expressions. `eval()` can be dangerous if the input can be influenced to run arbitrary JavaScript. In this particular UI the input is built only from button presses, which limits the immediate risk. However, it's still best practice to avoid `eval()`.

Recommended alternatives:
- Use a safe expression parser/evaluator like `mathjs` (`npm install mathjs`) and call `math.evaluate(expression)` instead of `eval`.
- Implement a simple expression parser that only allows digits, decimal points, and arithmetic operators and evaluates according to operator precedence.

Possible enhancements
- Allow keyboard input and paste handling with sanitization.
- Add responsive styling and better UI/UX.
- Add parentheses and advanced math functions.
- Replace `eval()` with a safe evaluator (highly recommended).

Contact / Next steps
- If you want, I can update `calc.js` to remove `eval()` and use `mathjs`, add keyboard support, or restyle the calculator. Tell me which improvement you'd like.
