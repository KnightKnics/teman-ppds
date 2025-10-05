import {pengurangan, penjumlahan} from "./operator.js"

function calculate(input1, input2, operator) {
    let result = 0
    if (operator == "+") {
        result = penjumlahan(input1, input2)
    } else {
        result = pengurangan(input1, input2)
    }
    return result
}

let result = calculate(10, 30, "-")
console.log(result)