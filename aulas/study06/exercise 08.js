let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

//Create a function that puts the apples onto the apple shelf
//and the Oranges onto the orange Shelf. Use a for loop,
//a conditional statement, and the text content property.

function fruitArrange() {
    for(i=0; i < fruit.length; i++){
        if(fruit[i]==="🍎") {
            appleShelf.textContent += (fruit[i])
        } else if(fruit[i]==="🍊") {
            orangeShelf.textContent += (fruit[i])
        }
    }
}

fruitArrange()


