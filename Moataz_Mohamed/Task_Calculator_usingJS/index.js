const myParent = document.createElement("div");
myParent.className = "calculator";

const display = document.createElement("div");
display.className = "display";
myParent.appendChild(display);
Object.assign(display.style, {
  width: '100%',
  height: '60px',
  marginBottom: '10px',
  backgroundColor: '#111',
color: '#0ff',
  fontSize: '24px',
   textAlign: 'right',
  padding: '10px 4px',
  borderRadius: '10px',
  boxShadow: 'inset 0 -3px 5px rgba(2, 206, 206, 0.5)',
  overflow: 'hidden'
});

const buttonsGrid = document.createElement('div');
buttonsGrid.classList.add('buttons-grid');
myParent.appendChild(buttonsGrid);

const buttons = [
  '7', '8', '9', '/', 
  '4', '5', '6', '*', 
  '1', '2', '3', '-', 
  'C', '0', '.', '+', '='
];

buttons.forEach(buttonText => {
  const button = document.createElement('button');
  button.textContent = buttonText;
  button.value = buttonText;
  if (buttonText === '=') {
    button.style.gridColumn = '1 / -1';
  }

  button.addEventListener('click', () => {
    if (buttonText === 'C') {
      display.textContent = '';
      return;
    }

if(buttonText === "="){
    const expr = display.textContent
    if(expr == ''){
        display.textContent = '';
        return;
    }
    if(expr.includes('/0')){
        display.textContent="Cannot divide by zero"
        return;
    }try{
        display.textContent=eval(expr)
    }catch{
        display.textContent=""
    }
    return;
}
    display.textContent += button.value;
  });
   Object.assign(button.style, {
    padding: '20px',
    backgroundColor: '#333',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '22px',
    border: 'none',
    boxShadow: '0 5px 0 #222',
    cursor: 'pointer',
  });
  button.addEventListener('mouseover', () => button.style.backgroundColor = '#555');
  button.addEventListener('mouseout', () => button.style.backgroundColor = '#333');
  button.addEventListener('mousedown', () => button.style.transform = 'translate(4px , 2px)');
  button.addEventListener('mouseup', () => button.style.transform = 'translate(0px,0px)');
  buttonsGrid.appendChild(button);
});
buttonsGrid.style.display = 'grid';
buttonsGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
buttonsGrid.style.gap = '10px';

document.body.appendChild(myParent);

Object.assign(myParent.style,{
    width:'450px',
    margin:'50px auto',
    padding:'20px',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
    backgroundColor: '#363535ff',
    fontFamily: 'Arial, sans-serif'
})
Object.assign(display.style, {
  width: '100%',
  color: '#0ff',
  fontSize: '28px',
});

Object.assign(document.body.style, {
    background: 'linear-gradient(to right, #4a00e0, #8e2de2, #00c6ff, #74d2caff, #52dac6ff)',
});

