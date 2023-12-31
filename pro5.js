//Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.



function calculator(number1, operator, number2) {
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            if (number2 !== 0) {
                return number1 / number2;
            } else {
                throw new Error("Cannot divide by zero");
            }
        default:
            throw new Error("Invalid operator");
    }
}

const number1 = 10;
const number2 = 5;
const operator = '*';
const result = calculator(number1, operator, number2);
console.log(result);
