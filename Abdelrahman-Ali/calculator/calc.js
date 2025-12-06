
window.addEventListener('load', () => {

  // Main calculator container
  const calc = document.createElement('div');
  Object.assign(calc.style, {
    width: '100%',
    background: '#1e1e1e',
    borderRadius: '24px',
    padding: '20px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.9)',
    color: 'white',
  });

  // Display
  const display = document.createElement('div');
  Object.assign(display.style, {
    background: '#000',
    color: '#0f0',
    fontSize: '42px',
    fontWeight: 'bold',
    textAlign: 'right',
    padding: '24px 16px',
    borderRadius: '16px',
    marginBottom: '16px',
    minHeight: '80px',
    overflow: 'hidden',
    boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.8)',
  });
  display.textContent = '0';
  calc.appendChild(display);

  // Calculator state
  let current = '0';
  let previous = '';
  let op = null;
  let reset = false;

  const buttons = [
    ['C', 'plus-minus', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];

  buttons.forEach(row => {
    const rowDiv = document.createElement('div');
    rowDiv.style.cssText = 'display:flex; gap:10px; margin-bottom:10px;';

    row.forEach(key => {
      const btn = document.createElement('button');
      btn.textContent = key === 'plus-minus' ? 'plus-minus' : key === 'divide' ? 'divide' : key === 'multiply' ? 'multiply' : key;

      // Style
      let bg = '#333333';
      let hover = '#555555';
      let color = 'white';

      if (['/', '*', '-', '+',].includes(key)) {
        bg = '#ff9500';
        hover = '#ffb143';
      } else if (['C', 'plus-minus', '%'].includes(key)) {
        bg = '#a6a6a6';
        hover = '#c0c0c0';
        color = 'black';
      } else if (key === '=') {
              bg = '#1f7111ff';
        hover = '#26ff00ff'}


      Object.assign(btn.style, {
        flex: key === '0' ? '2' : '1',
        padding: '20px',
        fontSize: '28px',
        fontWeight: '600',
        border: 'none',
        borderRadius: '16px',
        background: bg,
        color: color,
        cursor: 'pointer',
        transition: '0.2s',
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
      });

      // Effects
      btn.onmouseover = () => btn.style.background = hover;
      btn.onmouseout = () => btn.style.background = bg;
      btn.onmousedown = () => btn.style.transform = 'translateY(3px)';
      btn.onmouseup = () => btn.style.transform = '';

      btn.onclick = () => handleClick(key);
      rowDiv.appendChild(btn);
    });
    calc.appendChild(rowDiv);
  });

  function handleClick(key) {
    if ('0123456789'.includes(key)) {
      if (reset || current === '0') {
        current = key === '.' ? '0.' : key;
        reset = false;
      } else {
        if (key === '.' && current.includes('.')) return;
        current += key;
      }
    }
    else if (key === 'C') {
      current = '0';
      previous = '';
      op = null;
    }
    else if (key === 'plus-minus') {
      current = current.startsWith('-') ? current.slice(1) : '-' + current;
    }
    else if (key === '%') {
      current = (parseFloat(current) / 100).toString();
    }
    else if (key === '=') {
      if (op && previous !== '') {
        current = calculate(previous, current, op);
        previous = '';
        op = null;
        reset = true;
      }
    }
    else { // operator
      if (op && !reset) {
        current = calculate(previous, current, op);
      }
      previous = current;
      op = key;
      reset = true;
    }

    display.textContent = current.length > 12 ? parseFloat(current).toExponential(5) : current;
  }

  function calculate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
      case '+': return (a + b).toString();
      case '-': return (a - b).toString();
      case 'multiply': return (a * b).toString();
      case 'divide':
        return b === 0 ? 'Error' : (a / b).toString();
      default: return b.toString();
    }
  }

  // Add calculator to page
  document.body.appendChild(calc);
});