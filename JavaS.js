const b1 = document.querySelector("#b1")

let hey = document.createElement("h1")
hey.innerHTML = 'heeeey'

let b = document.querySelector("body")

const changeColor = (x) => {

    if (x.style.backgroundColor === "white") {
        x.style.backgroundColor = "green"
    } else {
        x.style.backgroundColor = "white"
    }
}