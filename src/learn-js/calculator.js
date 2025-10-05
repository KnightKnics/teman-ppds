import {find_numbers, find_operator} from "./operator.js"

function calculate(input_str) {
    let components = input_str.split(" ")
    console.log(`components: ${components}`)

    // pick operator
    const operator = find_operator(components)
    console.log(`operator: ${operator}`)

    // pick numbers
    const numbers = find_numbers(components, operator)
    console.log(`numbers: ${numbers}`)

    // assign method based on operator
    // let result = 0
    // if (operator == "+") {
    //     result = penjumlahan(input1, input2)
    // } else {
    //     result = pengurangan(input1, input2)
    // }
     return "end of the code"
}

let result = calculate("10 + 30")
console.log(result)