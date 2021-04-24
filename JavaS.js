function clickSound() {
    click.play()
}
let b = document.querySelector("body")
let imgCounter = 0
const changeImage = (event) => {

    if (imgCounter % 2 === 0) {

        event.target.style.backgroundImage = p1Char.url
        event.target.style.backgroundSize = "150px 150px"
        imgCounter++
    } else {
        event.target.style.backgroundImage = p2Char.url
        event.target.style.backgroundSize = "150px 150px"
        imgCounter++
    }

}
let p1Char = {}
let p2Char = {}

const broasted = {
    name: "broasted",
    url: "url('broasted.png')"
}
const shawerma = {
    name: "shawerma",
    url: "url('shawerma.png')"
}
const burger = {
    name: "burger",
    url: "url('burger.jpg')"
}
const zinger = {
    name: "zinger",
    url: "url('zinger.jfif')"
}
const fajita = {
    name: "fajita",
    url: "url('fajita.png')"
}
const mansaf = {
    name: "mansaf",
    url: "url('mansaf.jpg')"
}


const charPick = (event) => {
    if (nameCounter === 0) {
        p1Char = event

        Player1Char.style.backgroundImage = p1Char.url
        Player1Char.style.backgroundSize = "400px 400px"
        Player1Char.style.visibility = "visible"
        player1Chars.style.visibility = "hidden"
        nameCounter++
    }
    if (nameCounter === 1) {
        p2Char = event

    }

}



const player1 = []
const player2 = []
let counter = 0
const addIdToP1 = (event) => {
    if (counter % 2 === 0) {
        player1.push(event.target.id)

    } else {
        player2.push(event.target.id)
    }
    counter++
}
const win = [
    ['b1', 'b2', 'b3'],
    ['b4', 'b5', 'b6'],
    ['b7', 'b8', 'b9'],
    ['b1', 'b4', 'b7'],
    ['b2', 'b5', 'b8'],
    ['b3', 'b6', 'b9'],
    ['b1', 'b5', 'b9'],
    ['b3', 'b5', 'b7']
]
const checkWinner = () => {
    win.forEach(function(elem, i) {
        if (player1.sort().join("").includes(elem.join("")) /*player1 has one of the 3 numbers in win array*/ ) {
            /*alert that player 1 has won (or a big picture ) */
            /*with sound effect */
            p1.style.display = "block"
        }
        if (player2.sort().join("").includes(elem.join("")) /*player2 has one of the 3 numbers in win array*/ ) {
            /*alert that player 2 has won (or a big picture ) */
            /*with sound effect */
            p2.style.display = "block"
        }
        if (player1.length === 5) {
            p3.style.display = "block"
        }
    })
}

let player1Name = ""
let player2Name = ""
let nameCounter = 0
const pickName = (event) => {
    if (nameCounter === 0) {
        player1Name = event.target.id
        nameCounter++
    }
    if (nameCounter === 1) {
        player2Name = event.target.id

    }
}