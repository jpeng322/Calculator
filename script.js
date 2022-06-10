const multiply_btn = document.querySelector('#multiply')
const divide_btn = document.querySelector('#divide')
const subtract_btn = document.querySelector('#subtract')
const add_btn = document.querySelector('#add')
const equal_btn = document.querySelector('#equal')
const ac_btn = document.querySelector('#AC')

console.log(subtract_btn.textContent)

const btn_1 = document.querySelector('#btn-1')
const btn_2 = document.querySelector('#btn-2')
const btn_3 = document.querySelector('#btn-3')
const btn_4 = document.querySelector('#btn-4')
const btn_5 = document.querySelector('#btn-5')
const btn_6 = document.querySelector('#btn-6')
const btn_7 = document.querySelector('#btn-7')
const btn_8 = document.querySelector('#btn-8')
const btn_9 = document.querySelector('#btn-9')
const btn_0 = document.querySelector('#btn-0')


let display = ""
let firstValue = ""
let operator = null

btn_1.addEventListener('click', function () {
    addDisplay(btn_1.textContent)
})
btn_2.addEventListener('click', function () {
    addDisplay(btn_2.textContent)
})
btn_3.addEventListener('click', function () {
    addDisplay(btn_3.textContent)
})
btn_4.addEventListener('click', function () {
    addDisplay(btn_4.textContent)
})
btn_5.addEventListener('click', function () {
    addDisplay(btn_5.textContent)
})
btn_6.addEventListener('click', function () {
    addDisplay(btn_6.textContent)
})
btn_7.addEventListener('click', function () {
    addDisplay(btn_7.textContent)
})
btn_8.addEventListener('click', function () {
    addDisplay(btn_8.textContent)
})
btn_9.addEventListener('click', function () {
    addDisplay(btn_9.textContent)
})
btn_0.addEventListener('click', function () {
    addDisplay(btn_0.textContent)
})
ac_btn.addEventListener('click', function () {
    document.querySelector('.display').textContent = null
})




multiply_btn.addEventListener('click', function () {
    storeValue()
    operator = multiply_btn.textContent
})

divide_btn.addEventListener('click', function () {
    storeValue()
    operator = divide_btn.textContent
})

subtract_btn.addEventListener('click', function () {
    storeValue()
    operator = subtract_btn.textContent
})
add_btn.addEventListener('click', function () {
    storeValue()
    operator = add_btn.textContent
})

equal_btn.addEventListener('click', function () {
    console.log(firstValue)
    operate(parseInt(firstValue), parseInt(display), operator)
})

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

function operate(num1, num2, operatorvar) {
    if (operatorvar == divide_btn.textContent) {
        document.querySelector('.display').textContent = divide(num1, num2)
    }
    if (operatorvar == multiply_btn.textContent) {
        document.querySelector('.display').textContent = multiply(num1, num2)
    }
    if (operatorvar == subtract_btn.textContent) {
        document.querySelector('.display').textContent = subtract(num1, num2)
    }
    if (operatorvar == add_btn.textContent) {
        document.querySelector('.display').textContent = add(num1, num2)
    }
    else {
        console.log("HAHa")
    }
}

function addDisplay(num) {
    display += num
    document.querySelector('.display').textContent = display
    console.log(display)
}

function storeValue() {
    firstValue = display
    display = ""
    document.querySelector('.display').textContent = display
    console.log(firstValue)
    console.log(display)
}


// console.log(display)

// console.log(operate(1, 2, document.querySelector('#multiply').textContent))
// console.log(operate(5, 2, document.querySelector('#add').textContent))
// multiply_btn.addEventListener('click', multiply)

// console.log(document.querySelector('.display').textContent = 9)


// console.log(document.querySelector('#multiply').textContent)
// console.log('haha')