const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'C') {
            display.value = '';
        } else if (button.textContent === 'DEL') {
            display.value = display.value.slice(0,-1);
        } else if (button.textContent === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else {
            display.value += button.textContent;
        }
    });
});