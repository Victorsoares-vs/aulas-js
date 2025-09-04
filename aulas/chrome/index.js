const inputBtn = document.getElementById("input-btn")
let myLeads = ["aaaaa", "bbbbbbb", "ccccccccc"]
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for(i=0; i < myLeads.length; i++) {
    ulEl.innerHTML += ( "<li>" + myLeads[i] + "</li>") //se usamos somente "inner text", ele não gera elementos html, só string simples.
}



    

