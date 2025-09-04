//If possible, use 'const'. If not, use 'let'.
//'Const' are not reassignable, while 'let', are.
//for fixed values, or infos that are not going to change over the code, such as fixed values, formulas, etc, use always 'const'.

//EXERCISE 01 - LET OR CONST?

const basePrice = 520 //É um valor que não se altera
const discount = 120 // Um valor fixo também
let shippingCost = 12 //Depende da distância
let shippingTime = "5-12days" //Depende da distância

shippingCost = 15 //Variação
shippingTime = "7-14 days" //Variação

const fullPrice = basePrice - discount + shippingCost //instead of let, its const here
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)


