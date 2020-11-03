function add(a, b){
    return Number(a) + Number(b)
}
function multiply(a, b){
    return Number(a) * Number(b)
}
function divide(a, b){
    return Number(a) / Number(b)
}
function subtract(a, b){
    return Number(a) - Number(b)
}

function calculate(operator, a, b){
    switch (operator) {
        case "+":
            return add(a,b)
        case "*":
            return multiply(a,b)
        case "-":
            return subtract(a,b)
        case "/":
            return divide(a,b)
        default:
            alert("enter valid operation")
    }
}

export  { calculate }