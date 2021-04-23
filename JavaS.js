let b = document.querySelector("body")

const changeColor = (x) => {

    if (x.style.backgroundColor === "white") {
        x.style.backgroundColor = "green"
    } else {
        x.style.backgroundColor = "white"
    }

}
const player1 = []
const player2 = []
let counter = 0
const addIdToP1 = (x) => {
    if (counter % 2 === 0) {
        player1.push(x)

    } else {
        player2.push(x)
    }
    counter++
}