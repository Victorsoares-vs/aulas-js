let person = {
    name: "Victor",
    age: 32,
    country: "Brazil"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country + ".")
}

logData()

// PRACTICE 02

let age = 67

function discount () {
    if(age < 6) {
        console.log("You pay free!")
    } else if(age >= 6 && age <= 17) { //poderia ser aqui (age < 18)... :(
        console.log("You have a child discount!")
    } else if(age >= 18 && age <= 26) { //poderia ser aqui (age < 27) somente, tbm...
        console.log("You have a student discount!")
    } else if(age >=27 && age <= 66) { // poderia ser aqui também (age < 67)... >:(
        console.log("You pay full price.")
    } else {
        console.log("You have a senior citizen Discount!")
    }
}

discount()

// PRACTICE 03 - LOOPS AND ARRAYS

let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
largeCountries.shift()
largeCountries.unshift("China")
largeCountries.pop()
largeCountries.push("Pakistan")

console.log("The 5 Largest Countries in the world:")
for(i=0; i<largeCountries.length; i++) {
    console.log ( "- " + largeCountries[i])
}



//Inserir "China" na posição 0, e "Pakistan" na posição "4".



