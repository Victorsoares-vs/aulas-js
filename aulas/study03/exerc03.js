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

let player1Time = 102
let player2Time = 107

function totalRaceTime() {
  return player1Time + player2Time
}

let totalTime = totalRaceTime()
console.log(totalTime)

 










