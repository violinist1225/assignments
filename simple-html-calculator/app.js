
const add = document.getElementById('add')
const sub = document.getElementById('subtract')
const multiply = document.getElementById('multiply')
const answer = document.getElementById('displayAnswer')
const addition = (num1, num2) => num1+num2
const subtraction = (num1, num2) => num1-num2
const mult = (num1, num2) => num1*num2   //Arrow functions are stored in variables, always. instead of function()
let firstNumber= ""
let secondNumber= ""

const addForm = document['add-form']
addForm.addEventListener('submit', (event) => {
    event.preventDefault()
    firstNumber = parseInt(addForm.firstNumber.value) //parseInt converts string into number 
    secondNumber = parseInt(addForm.secondNumber.value)
    addForm.firstNumber.value = ""    //clears out value for user only but firstNumber variable is saved.
    addForm.secondNumber.value= ""
    answer.textContent = addition(firstNumber, secondNumber)
    addForm.style.backgroundColor = 'orange'  
})


const subForm = document['sub-form']
subForm.addEventListener('submit', (event) => {
    event.preventDefault()
    firstNumber = parseInt(subForm.firstNumber.value) 
    secondNumber = parseInt(subForm.secondNumber.value)
    subForm.firstNumber.value = ""    
    subForm.secondNumber.value= ""
    answer.textContent = subtraction(firstNumber, secondNumber)
    subForm.style.backgroundColor = 'green'  

})


const multForm = document['mult-form']
multForm.addEventListener('submit', (event) => {
    event.preventDefault()
    firstNumber = parseInt(multForm.firstNumber.value) 
    secondNumber = parseInt(multForm.secondNumber.value)
    multForm.firstNumber.value = ""    
    multForm.secondNumber.value= ""
    answer.textContent = mult(firstNumber, secondNumber)
    multForm.style.backgroundColor = 'pink'  

})

























