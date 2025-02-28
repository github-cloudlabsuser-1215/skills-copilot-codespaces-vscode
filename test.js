// Function to add two numbers
function add(x, y) {
    return x + y;
}

// Function to subtract two numbers
function subtract(x, y) {
    return x - y;
}

// Function to multiply two numbers
function multiply(x, y) {
    return x * y;
}

// Function to divide two numbers
function divide(x, y) {
    if (y === 0) {
        return "Error! Division by zero.";
    }
    return x / y;
}

// Function to perform the calculator operations
function calculator() {
    const prompt = require('prompt-sync')();

    console.log("Select operation:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");

    const choice = prompt("Enter choice (1/2/3/4): ").trim();

    if (['1', '2', '3', '4'].includes(choice)) {
        const num1 = parseFloat(prompt("Enter first number: "));
        const num2 = parseFloat(prompt("Enter second number: "));

        let result;
        switch (choice) {
            case '1':
                result = add(num1, num2);
                console.log(`${num1} + ${num2} = ${result}`);
                break;
            case '2':
                result = subtract(num1, num2);
                console.log(`${num1} - ${num2} = ${result}`);
                break;
            case '3':
                result = multiply(num1, num2);
                console.log(`${num1} * ${num2} = ${result}`);
                break;
            case '4':
                result = divide(num1, num2);
                console.log(`${num1} / ${num2} = ${result}`);
                break;
        }
    } else {
        console.log("Invalid input");
    }
}

// Run the calculator function
calculator();