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