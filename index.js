let countEl = document.getElementById("count-el")
// console.log(countEl)
let saveEl = document.getElementById("save-el")
let count = 0
function increment(){
    count += 1
    countEl.textContent = count
    // console.log(count)
}

// let save = 0
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}