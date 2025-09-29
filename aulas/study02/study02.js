//EXERCISE 01 - JOGO DE BLACKJACK


let cards = [] // Array = ordered list
let cmptChips = [] 
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el") //Ao invés do 'getElement', poderíamos usar o 'querySelector', que combina o ID com classe, ou com qualquer outra coisa. pra Classe, usa-se o '.' na frente, igual ao CSS. Pra Id, se usa a hashtag, e pra outros elementos, é só jogar o nome dele aqui. É um método mais abrangente.
let cardsEl = document.getElementById("cards-el")
let player = []
let playerEl = document.getElementById("alias")
let vamos = document.getElementById("str-el")
const plrEl = document.getElementById("player-el")

vamos.addEventListener("click", function () {
  player.push(playerEl.value)
  console.log(player)
  localStorage.setItem("player", JSON.stringify(player))
  prepareGame()

})

function prepareGame() {
  let listItems = ""
  for (i = 0; i < player.length; i++) {
    listItems += `
     <li>
       Jogador(a): ${player[i]} Qtd de Fichas: R$ 1.000,00 
    </li>`
  }
  plrEl.innerHTML = listItems
}


function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber === 1) {
    return 11
  } else if (randomNumber > 10) {
    return 10
  } else {
    return randomNumber
  }
}

function startGame() {
  if (sum === 0 || sum >= 21) {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
  }
}

function renderGame() {
  if (sum <= 20) {
    message = "Quer uma nova carta?"
  } else if (sum === 21) {
    message = "Parabéns, você tem BlackJack!"
    hasBlackJack = true
  } else {
    message = "Estourou! Você perdeu essa."
    isAlive = false
  }
  messageEl.textContent = (message)
  sumEl.textContent = ("Total: " + sum)
  cardsEl.textContent = ("Cartas: ")
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()
  }
}

function stop() {
    for(i=0; i < 3; i++) {
      getRandomCard()

    }
}























