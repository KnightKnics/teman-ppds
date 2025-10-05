function find_operator(components) {
    for (const component of components) {
        if (component == "+") {
            return component
        }
    }
}

function find_numbers(components, operator) {
    let result = []
    for (const component of components) {
        if (component != operator) {
            result.push(component)
        }
    }
    return result
}

export {find_numbers, find_operator}