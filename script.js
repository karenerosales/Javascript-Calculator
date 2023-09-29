function updateDisplay(input) {
    const display = document.querySelector('.display');
    display.textContent = input;
}

function calculate() {
    const display = document.querySelector('.display');
    const expression = display.textContent.replace(/x/g, '*');
    try {
        const result = eval(expression);
        updateDisplay(result);
    } catch (error) {
        updateDisplay('Error');
    }
}

document.querySelectorAll('.keys button').forEach(button => {
    button.addEventListener('click', () => {
        const display = document.querySelector('.display');
        const buttonText = button.textContent;

        if (buttonText === 'C') {
            display.textContent = '0';
        } else if (buttonText === '=') {
            calculate();
        } else {
            if (display.textContent === '0' || display.textContent === 'Error') {
                display.textContent = buttonText;
            } else {
                display.textContent += buttonText;
            }
        }
    });
});