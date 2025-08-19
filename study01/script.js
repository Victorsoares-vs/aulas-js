let count = 0

function increment() {
    let totalcount = (count = count +1)
    console.log(totalcount)
    document.getElementById("count-el").innerText = totalcount
}

function reset() {
    count = 0
    document.getElementById("count-el").innerText = 0
}

function save() {
    console.log(count)
}












