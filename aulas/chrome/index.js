let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
})

function renderLeads() {
    let listItems = ""
    for (i = 0; i < myLeads.length; i++) {
    listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>" //se usamos somente "inner text", ele não gera elementos html, só string simples.
    console.log(listItems)
    }
    ulEl.innerHTML = listItems
}











