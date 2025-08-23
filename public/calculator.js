class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    }

    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operator = undefined;
        this.updateDisplay();
    }

    delete() {
        if (this.currentOperand === '0' || this.currentOperand.length === 1) {
            this.currentOperand = '0';
        } else {
            this.currentOperand = this.currentOperand.toString().slice(0, -1);
        }
        this.updateDisplay();
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number.toString();
        } else {
            this.currentOperand = this.currentOperand.toString() + number.toString();
        }
        this.updateDisplay();
    }

    chooseOperator(operator) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operator = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
        this.updateDisplay();
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operator) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }

        this.currentOperand = computation.toString();
        this.operator = undefined;
        this.previousOperand = '';
        this.updateDisplay();
    }

    updateDisplay() {
        this.currentOperandText.innerText = this.currentOperand;
        this.previousOperandText.innerText = this.previousOperand + (this.operator ? ` ${this.operator}` : '');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const numberButtons = document.querySelectorAll('[data-number]');
    const operatorButtons = document.querySelectorAll('[data-operator]');
    const equalsButton = document.querySelector('[data-equals]');
    const clearButton = document.querySelector('[data-clear]');
    const backspaceButton = document.querySelector('[data-backspace]');
    const previousOperandText = document.querySelector('.previous-operand');
    const currentOperandText = document.querySelector('.current-operand');

    const calculator = new Calculator(previousOperandText, currentOperandText);

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.innerText);
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.chooseOperator(button.innerText);
        });
    });

    equalsButton.addEventListener('click', () => {
        calculator.compute();
    });

    clearButton.addEventListener('click', () => {
        calculator.clear();
    });

    backspaceButton.addEventListener('click', () => {
        calculator.delete();
    });
});