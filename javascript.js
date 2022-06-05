let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let shouldResetScreen = false



const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const lastOperationScreen = document.getElementById('lastOperationScreen')
const currentOperationScreen = document.getElementById('currentOperationScreen')
const equalsButton = document.getElementById('equalsBtn')
const clearButton = document.getElementById('clearBtn')

equalsButton.addEventListener('click', evaluate)
clearButton.addEventListener('click', clear)


numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
)

function setOperation(operator) {
    if (currentOperation !== null) evaluate()
    firstOperand = currentOperationScreen.textContent
    currentOperation = operator
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`
    shouldResetScreen = true
  }

function evaluate() {
    if (currentOperation === null || shouldResetScreen) return
    if (currentOperation === '÷' && currentOperationScreen.textContent === '0') {
      alert("You can't divide by 0!")
      return
    }
    secondOperand = currentOperationScreen.textContent
    currentOperationScreen.textContent = roundResult(
      operate(currentOperation, firstOperand, secondOperand)
    )
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null
  }

function roundResult(number) {
    return Math.round(number * 1000) / 1000
  }

function appendNumber(number) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen)
      resetScreen()
    currentOperationScreen.textContent += number
  }

function resetScreen() {
    currentOperationScreen.textContent = ''
    shouldResetScreen = false
  }

function clear() {
  currentOperationScreen.textContent = '0'
  lastOperationScreen.textContent = ''
  firstOperand = ''
  secondOperand = ''
  currentOperation = null
}

function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a / b
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    if (operator == '+') {
        return add(a,b)
    } else if (operator == '-') {
        return subtract(a,b)
    } else if (operator == '+') {
        return add(a,b)
    } else if (operator == 'x') {
        return multiply(a,b)
    } else if (operator == '÷') {
        if (b===0) return null
        else return divide(a, b)
    } else {
        return null
    }
}
