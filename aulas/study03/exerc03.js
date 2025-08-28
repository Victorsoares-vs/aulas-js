//APRENDENDO ARRAYS

let skills = ["Intelligence", "language skills", "curiosity", "willing to work"]
let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

//console.log(experience[1])
//console.log(experience[2])
//console.log(experience[0])

let description = ["Victor", 32, true]
let cds = [7, 3, 5]
let messages = [
    "Hey, how is it going?",
    "I'm great, thank you! What about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"
messages.push(newMessage) // adiciona um novo elemento ao array
//console.log(messages)
messages.pop() // remove o último elemento do array


//for (let i = 10; i < 101; i += 10) {
  //  console.log(i)
//}

//for (let i = 1; i < 6; i ++) {
  //  console.log(i)
//}

//for (let i = 0; i < description.length; i++) {
  //  console.log(description[i])
//}

//DESAFIO ARRAY 01

//let sentence = ["Hello,", "my", "name", "is", "Victor"]
//let greetingEl = document.getElementById("greeting-el")

//for (let i = 0; i < sentence.length; i++) {
  //  greetingEl.textContent += (sentence[i]) + " " //o + " " aqui, já vai fazer com que cada item do array seja exibido com seu respectivo espaço.
//}

// EXERCISE 02 - FUNCTION RETURN

//let player1Time = 102
//let player2Time = 107

//function totalRaceTime() {
  //return player1Time + player2Time
//}

//let totalTime = totalRaceTime()
//console.log(totalTime)

 
//EXERCISE 03 - RANDOM NUMBERS

// Gerando com 'Math.random()'

//let randomNumber = Math.random() * 6

//console.log(randomNumber) // Retorna números em formato decimal, mas todos abaixo de "1"
// Quando se adiciona um multiplicador à função 'Math.random()', ela assume os valores entre 0 e o nº usado no multiplicador.
//Ou seja, se o multiplicador for 6, os valores gerados estarão entre 0 e 6.

// Usando 'Math.floor()'

//let flooredNumber = Math.floor()
//console.log(flooredNumber) //Retorna números naturais ignorando as casas decimais.

//COMBINANDO OS DOIS USOS: "Math.random" e "Math.floor"

let randomNumber = Math.floor(Math.random() * 6) + 1 
//console.log(randomNumber) // Ao se inserir um elemento dentro do outro, ele realiza a operação do primeiro elemento e faz a conversão removendo as casas decimais  para exibir o resultado final.
// Você pode colocar mais termos para atinigir o resultado desejado após o 'Math.floor': +1, +2, etc.

function rollDice() {
  return randomNumber
}















