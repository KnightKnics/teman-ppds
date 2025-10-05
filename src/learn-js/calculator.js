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
    for (let j = 0; j < operators.length; j++){
        if (operators[j] == "*"|| operators[j] =="/")  {
        let result;
            if (operators[j] === "*") {
                 result = numbers[j] * numbers[j + 1];
            } else {
                result = numbers[j] / numbers[j + 1];
            }

      // Replace the two numbers with the result
      numbers.splice(j, 2, result);
      operators.splice(j, 1);

      j--; // step back to recheck the current index
    }
    
}

    // assign method based on operator
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

let result = calculate("10 + 30 / 30 / 40 + 50")
console.log(`the result is: ${result}`)