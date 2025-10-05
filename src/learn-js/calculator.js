import {find_numbers, find_operator} from "./helper.js"

function calculate(input_str) {
    // remove the white space
    let components = input_str.split(" ")
    console.log(`components: ${components}`)

    // pick operator
    const operator = find_operator(components)
    console.log(`operator: ${operator}`)

    // pick numbers
    const numbers = find_numbers(components, operator)
    console.log(`numbers: ${numbers}`)

    // assign method based on operator
    let result = 0
    for (const number of numbers) {
        if (operator == "+") {
            result = result + Number(number)
        }
    }
     return result
}

let result = calculate("10 + 30")
console.log(`the result is: ${result}`)