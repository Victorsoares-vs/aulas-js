//PRACTICE LOGICAL OPERATORS - exercise 07

//let dayOfMonth = 13
//let weekday = "Friday"

//if(weekday === "Friday" && dayOfMonth === 13) {
//console.log("😱")
//} else {
//  console.log("It's " + weekday + ", " + dayOfMonth)
//}

//exercise 08

let hands = ["rock", "paper", "scissors"]
function game() {
    function rps() {
        return (Math.floor(Math.random()*3)) // aqui, eu poderia multiplicar por "hands.lenght", que me daria o mesmo resultado.
    }
    rps()
    return console.log(hands[rps()])
}
game()

 
