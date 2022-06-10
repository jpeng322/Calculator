const multiply_btn = document.querySelector('#multiply')

function add(num1, num2) {
    return num1 + num2
    // document.getElementById("sum-el").textContent = "Sum: " + total
}

// console.log(document.getElementById("sum-el").textContent)

function subtract(num1, num2) {
    return num1 - num2
    // document.getElementById("sum-el").textContent = "Sum: " + total
}

function divide(num1, num2) {
    return num1 / num2
    // document.getElementById("sum-el").textContent = "Sum: " + total
}

function multiply(num1, num2) {
    return num1 * num2
    // document.getElementById("sum-el").textContent = "Sum: " + total
}

function operate(num1, num2, operator) {
    if (operator == document.querySelector('#divide').textContent) {
        return divide(num1, num2)
    }
    if (operator == document.querySelector('#multiply').textContent) {
        return multiply(num1, num2)
    }
    if (operator == document.querySelector('#subract').textContent) {
        return subtract(num1, num2)
    }
    if (operator == document.querySelector('#add').textContent) {
        return add(num1, num2)
    }
    else {
        console.log("HAH")
    }
}

// console.log(operate(1, 2, document.querySelector('#multiply').textContent))
console.log(operate(5, 2, document.querySelector('#add').textContent))
multiply_btn.addEventListener('click', multiply)

console.log(document.querySelector('.display').textContent = 9)


// console.log(document.querySelector('#multiply').textContent)
// console.log('haha')