//  EXERCISE 11 - PRACTICING TEMPLATE STRINGS//

const recipient = "james"
const sender = "Victor"

const email = `Hey, ${recipient},
how is it going? Cheers,
${sender}`
//console.log(email)

//EXERCISE 12 - PRACTICING TRUTHY OR FAlSIE VALUES 

console.log(  Boolean("")   ) // false
console.log(  Boolean("0")  ) // true
console.log(  Boolean(100)  ) // true
console.log(  Boolean(null) ) // false
console.log(  Boolean([0])  ) // true - 0 is false, but array is true.
console.log(  Boolean(-0)   ) // false

// EXERCISE 12 - PRACTICING FUNCTION PARAMETERS 
//Uma função pode ter um ou mais parâmetros. Eles agem como economizadores de espaço, podendo ser modificados posteriormente no código. 

const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting} ${name} ${emoji}`  
    console.log(welcomeEl)

}

//greetUser("Welcome back,", "Victor", "👋")

function add(a, b) {
    return a + b
}

console.log(add(3, 4))
console.log(add(9, 102))

//Arrays as Parameters

function getFirst(arr = []) { //a estrutura 'array' é passada como PARÂMETRO
     return arr[0]  
}

console.log(getFirst([3, 5, 7, 9])) // o array foi passado como ARGUMENTO da função



