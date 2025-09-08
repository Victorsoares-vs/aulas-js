let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

//localStorage.setItem("myName", "Victor Soares")
let greeting = localStorage.getItem("myName")
console.log(greeting)
localStorage.clear()


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
})

function renderLeads() {
    let listItems = ""
    for (i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>`
    }
    ulEl.innerHTML = listItems
}











