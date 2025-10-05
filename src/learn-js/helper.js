
function find_operator(components) {
    let operators = []
    for (const component of components) { 
        if (component == "+" || component == "-" ||component == "*" ||component == "/" ){
            operators.push(component)
            
        }
    }
    return operators
}

function find_numbers(components, operators) {
    let result = []
    for (const component of components) {
        if (!operators.includes(component) ) {
            result.push(component)
        }
    }
    return result
}

export {find_numbers, find_operator}