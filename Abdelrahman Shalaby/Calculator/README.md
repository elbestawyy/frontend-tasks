# Simple Calculator Project

![Calculator Badge](https://img.shields.io/badge/Project-Calculator-blue)
![Status](https://img.shields.io/badge/Status-Completed-green)

This is a **simple calculator** built with **vanilla JavaScript** and **Bootstrap 5**.  
It supports basic arithmetic operations: addition, subtraction, multiplication, and division.

---

Features

- Simple UI using **Bootstrap 5**
- Responsive and mobile-friendly design
- Supports operations: `+`, `-`, `*`, `/`
- Clear button (`C`) to reset the calculator
- Handles **division by zero** error

---

Project Structure

```

calculator/
├─ index.html        # Main HTML file
├─ script.js         # JavaScript logic for calculator
└─ README.md         # Project documentation

```

> Note: The project dynamically creates HTML elements and buttons via JavaScript.

---

Components / Structure

- **Container:** `div.container.mt-5`
- **Card:** `div.card.p-4.shadow.mx-auto` → holds display and buttons
- **Display Field:** `input.form-control.mb-3.text-end.fs-4` → shows numbers and result
- **Button Grid:** buttons created dynamically for numbers 0-9
- **Operation Buttons:** `+`, `-`, `*`, `/`, `=`, `C`

---

Styling

- Using **Bootstrap 5 CDN** for styling
- Card centered with max width `350px`
- Buttons use Bootstrap classes: `btn`, `btn-secondary`, `btn-primary`, `btn-warning`, `btn-success`, `btn-danger`, `btn-dark`
- Responsive layout using **Bootstrap Flexbox utilities** (`d-flex`, `gap-2`, `flex-fill`)

---

JavaScript Logic

1. **Numbers Buttons:**

   - Appends the number to the display when clicked.

2. **Operation Buttons (`+`, `-`, `*`, `/`):**

   - Stores the first number (`storedValue`)
   - Sets the `currentOp` operation
   - Clears display for the second number

3. **Equal Button (`=`):**

   - Performs calculation based on `storedValue` and current display
   - Handles division by zero

4. **Clear Button (`C`):**
   - Resets `storedValue`, `currentOp`, and clears display

```js
let storedValue = null;
let currentOp = null;
```

---

How to Run

1. Open `index.html` in any modern browser
2. No server or build required (pure JS + Bootstrap CDN)

**Author:** Abdelrahman Shalaby
**Role:** Java Developer
