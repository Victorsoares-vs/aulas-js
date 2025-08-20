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


