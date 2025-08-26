//EXERCISE 01

let firstCard = 12
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el") //Ao invés do 'getElement', poderíamos usar o 'querySelector', que combina o ID com classe, ou com qualquer outra coisa. pra Classe, usa-se o '.' na frente, igual ao css. pra id, se usa a hashtag, e pra outros elementos, é só jogar o nome dele aqui. É um método mais abrangente.
let cardsEl =  document.getElementById("cards-el")

console.log(messageEl)

function startGame() {
    if(sum <= 20) {
        message = "Do you want a new card?"
    } else if (sum === 21) {
        message = "You've got BlackJack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
        
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum 
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    
}



//EXERCISE 02

//let age = 19

//if(age > 20) {
  //  console.log("Welcome!")
//} else {
  //  console.log("You cannot enter the Club!")
//}

//EXERCISE 03

//let ageCard = 105

//if (ageCard < 100) {
  //  console.log("Not Elegible")
//} else if (ageCard === 100) {
  //  console.log("Here is your birthday card from the King!")
//} else {
  //  console.log("Not Elegible, you have already gotten one!")
//}






















