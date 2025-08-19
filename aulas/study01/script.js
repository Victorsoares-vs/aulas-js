let count = 0
let saveEl = document.getElementById("save-el")
let actual = count + " - "

function increment() {
    let totalcount = (count += 1)
    document.getElementById("count-el").innerText = totalcount
}

function reset() {
    count = 0
    actual = 0
    document.getElementById("count-el").innerText = 0
    document.getElementById("save-el").textContent = ""
    
}

function save() {
    saveEl.textContent = actual += count + " - "
    
}





















