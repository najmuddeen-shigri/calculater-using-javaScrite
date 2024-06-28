// script.js

document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById('display');
    let buttons = Array.from(document.getElementsByClassName('btn'));
    let operator = '';
    let currentValue = '';
    let previousValue = '';

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            let buttonText = e.target.innerText;

            if (buttonText === 'AC') {
                display.innerText = '0';
                currentValue = '';
                previousValue = '';
                operator = '';
                return;
            }

            if (buttonText === '÷' || buttonText === '×' || buttonText === '-' || buttonText === '+') {
                operator = buttonText;
                previousValue = currentValue;
                currentValue = '';
                return;
            }

            if (buttonText === '=') {
                let result;
                let prev = parseFloat(previousValue);
                let curr = parseFloat(currentValue);

                if (operator === '÷') {
                    result = prev / curr;
                } else if (operator === '×') {
                    result = prev * curr;
                } else if (operator === '-') {
                    result = prev - curr;
                } else if (operator === '+') {
                    result = prev + curr;
                }

                display.innerText = result;
                currentValue = result;
                previousValue = '';
                operator = '';
                return;
            }

            if (currentValue === '0') {
                currentValue = buttonText;
            } else {
                currentValue += buttonText;
            }

            display.innerText = currentValue;
        });
    });
});
