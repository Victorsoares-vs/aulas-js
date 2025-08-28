//OPERADORES LÓGICOS CONDICIONAIS (&&, ||)

let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge === false && hasHintsLeft === false) { // uso do "e"
    showSolution()
    function showSolution() {
        //console.log("Showing the Solution...")
    }
}

let likesDocumentaries = true
let likesStartups = false

if (likesDocumentaries === true || likesStartups === true) { //uso do "ou"
    recommendMovie()
    function recommendMovie() {
        console.log("Hey, check out this new movie we think you will like!")
    }
}

// OBJETOS NO JAVASCRIPT

let player = {
    name: "Victor",
    fichas: 150
} // se declara o objeto como se fosse uma função, e os elementos (keys) dentro do objeto, separamos com ':' e ',' no final.

// Puxando Keys de dentro de um Objeto

console.log("Olá, " + (player.name) + ", bem vindo ao jogo!")

