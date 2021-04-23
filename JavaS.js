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
const win = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]
const checkWinner = () => {
    win.forEach(function(elem, i) {
        if (player1.sort().join("").includes(elem.join("")) /*player1 has one of the 3 numbers in win array*/ ) {
            /*alert that player 1 has won (or a big picture ) */
            /*with sound effect */
            b.append("Player1 Has WON")
        }
        if (player2.sort().join("").includes(elem.join("")) /*player2 has one of the 3 numbers in win array*/ ) {
            /*alert that player 2 has won (or a big picture ) */
            /*with sound effect */
            b.append("Player2 Has WON")
        }
    })

}