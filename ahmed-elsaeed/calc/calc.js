

function createCalc() {
    
    const shape = document.createElement('div');
    shape.style.width = '300px';
    shape.style.margin = '50px auto';
    shape.style.padding = '20px';
   
    shape.style.borderRadius = '10px';
    
    shape.style.textAlign = 'center';
    
    document.body.appendChild(shape);

    
    const input = document.createElement('input');
    input.type = 'text';
    input.style.width = '100%';
    input.style.height = '40px';
    input.style.fontSize = '20px';
    input.style.marginBottom = '10px';
    input.disabled = true;
    shape.appendChild(input);

    
    const buttons = [
        '7','8','9','/',
        '4','5','6','*',
        '1','2','3','-',
        '0','.','=','+',
        'C'
    ];

    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'grid';
    buttonContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
    buttonContainer.style.gap = '10px';
    shape.appendChild(buttonContainer);

    buttons.forEach(btn => {
        const button = document.createElement('button');
        button.textContent = btn;
        button.style.padding = '15px';
        button.style.fontSize = '18px';
        button.style.cursor = 'pointer';
        

        button.addEventListener('click', () => {
            if (btn === '=') {
                try {
                    input.value = eval(input.value);
                } catch {
                    input.value = 'please enter number';
                }
            } else if (btn === 'C') {
                input.value = '';
            } else {
                input.value += btn;
            }
        });

        buttonContainer.appendChild(button);
    });
}


createCalc();
