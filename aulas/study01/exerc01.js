let firstName = 'Victor '
let lastName = 'Soares'
let fullName = firstName + lastName
console.log(fullName)

// exercício 01

let Name = 'Linda'
let greeting = 'Hi there,'

function salute() {
    let fullGreeting = greeting + ' ' + Name + '!'
    console.log(fullGreeting)
}
salute()

//exercício 02

let myPoints = 3
function add3Points() {
    myPoints +=3
}
function remove1Point() {
    myPoints -=1
}

console.log(myPoints)
add3Points()
console.log(myPoints)
add3Points()
remove1Point()
remove1Point()
add3Points()
console.log(myPoints)
console.log(myPoints)
console.log(myPoints)

//exercício 03
let erro = document.getElementById('error')
function message() {
    erro.innerText = 'Something went wrong, try again'
}
console.log(erro)

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


function add() {
    let sum = num1 + num2 
    let sumEl = document.getElementById("sum-el").textContent = 'Sum: ' + sum
}

function subtract () {
    let sub = num1 - num2 
    let sumEl = document.getElementById("sum-el").textContent = 'Sum: ' + sub
}

function multiply () {
    let mult = num1 * num2 
    let sumEl = document.getElementById("sum-el").textContent = 'Sum: ' + mult
}

function divide() {
    let divide = num1 / num2 
    let sumEl = document.getElementById("sum-el").textContent = 'Sum: ' + divide
}

//exercício 04

let firstCard = 4
let secondCard = 8
let sum = firstCard + secondCard


