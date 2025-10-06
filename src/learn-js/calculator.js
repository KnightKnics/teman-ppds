import {find_numbers, find_operator} from "./helper.js"

function calculate(input_str) {
    // remove the white space
    let components = input_str.split(" ")
    console.log(`components: ${components}`)

    // pick operator
    const operators = find_operator(components)
    console.log(`operator: ${operators}`)

   // pick numbers
    const numbers = find_numbers(components, operators)
    console.log(`numbers: ${numbers}`)

    // Multiplication + Division
    for (let idx = 0; idx < operators.length; idx++) { // REV: if possible, use variable name that represent the context
        let operator = operators[idx] // REV: if operator[idx] is being used multiple times, idxust init once, and reuse the same variable
        if (operator == "*" || operator =="/")  {
            let result = 0
            if (operator == "*") {
                result = numbers[idx] * numbers[idx + 1];
            } else {
                result = numbers[idx] / numbers[idx + 1];
            }

            // Replace the two numbers with the result
            numbers.splice(idx, 2, result);
            operators.splice(idx, 1);
            idx--; // step back to recheck the current index

            // COMMENT: this pattern known as recursive and its better done in recursive function
        }
    }

    // Add + Subtract
    let result =Number(numbers[0])
     for (let i = 0; i < operators.length; i++) {
        if (operators[i] == "+") {
            result = result + Number(numbers[i+1])
        }
            
        if (operators[i] == "-") {
            result = result - Number(numbers[i+1])
        }
    }
    return result   
 }

let result = calculate("10 + 20 + 30 + 50 * 10 * 10 * 10")
console.log(`the result is: ${result}`)