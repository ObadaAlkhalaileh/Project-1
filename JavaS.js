let b = document.querySelector("body")

const changeColor = (x) => {

    if (x.style.backgroundColor === "white") {
        x.style.backgroundColor = "green"
    } else {
        x.style.backgroundColor = "white"
    }

}
const player1 = []
const addIdToP1 = (x) => {
    player1.push(x)
}