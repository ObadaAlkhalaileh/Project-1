function clickSound() {
    click.play()
}

function gamingSound() {
    gaming.play()
}

function winning() {
    winningPlayer.play()
}
let b = document.querySelector("body")
let imgCounter = 0
const changeImage = (event) => {

    if (imgCounter % 2 === 0) {
        let image1 = document.createElement('img')
        image1.src = p1Char.url
        image1.width = "150"
        image1.height = "150"
        event.target.append(image1)

        imgCounter++
    } else {
        let image2 = document.createElement('img')
        image2.src = p2Char.url
        image2.width = "150"
        image2.height = "150"
        event.target.append(image2)
        imgCounter++
    }

}
let p1Char = {}
let p2Char = {}

const broasted = {
    name: "BROASTED",
    url: 'broasted2.png'
}
const shawerma = {
    name: "SHAWERMA",
    url: 'shawerma.png'
}
const burger = {
    name: "BURGER",
    url: 'burger2.png'
}
const zinger = {
    name: "ZINGER",
    url: 'zinger2.png'
}
const fajita = {
    name: "FAJITA",
    url: 'fajita.png'
}
const mansaf = {
    name: "MANSAF",
    url: 'mansaf.png'
}

let nameCounter = 0
const charPick = (event) => {
        if (nameCounter === 0) {
            p1Char = event
            let image3 = document.createElement('img')
            image3.src = p1Char.url
            image3.width = "400"
            image3.height = "400"
            Player1Char.append(image3)

            Player1Char.style.visibility = "visible"
            player1Chars.style.visibility = "hidden"
            player2Chars.style.visibility = "visible"

            pp1.innerText = p1Char.name
            pp1.style.visibility = "visible"

            pick1.style.visibility = "hidden"
            pick2.style.visibility = "visible"





            nameCounter = 1
        } else if (nameCounter === 1) {
            p2Char = event
            let image4 = document.createElement('img')
            image4.src = p2Char.url
            image4.width = "400"
            image4.height = "400"
            Player2Char.append(image4)

            Player2Char.style.visibility = "visible"
            player2Chars.style.visibility = "hidden"

            pp2.innerText = p2Char.name
            pp2.style.visibility = "visible"
            vs.style.visibility = "visible"

            pick2.style.visibility = "hidden"

            let x = document.querySelectorAll(".square")
            console.log(x)
            x.forEach(function(plate) {
                plate.style.pointerEvents = "all"
            })
            gamingSound()

            nameCounter = 2
        } else { return }


    }
    //need revise(not essential function)
    /*const revretSelection = () => {
        //when click on final pick it hide it and remove player 1 selection to start the proccedure again
        Player1Char.style.visibility = "hidden"
        player1Chars.style.visibility = "visible"
        p1Char = {}

    }*/

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


//WIN FUNCTION
const checkWinner = () => {
    win.forEach(function(elem, i) {
        if (player1.includes(elem[0]) && player1.includes(elem[1]) && player1.includes(elem[2])) /*player1 has one of the 3 numbers in win array*/ {
            /*alert that player 1 has won (or a big picture ) */
            /*with sound effect */
            winner.innerText = p1Char.name + "    FOREVER!"
            winner.style.visibility = "visible"

            winning()
            elem.forEach(function(plateId) {
                setInterval(blink, 300, plateId)
            })

            vs.style.visibility = "hidden"
            again.style.visibility = "visible"


        } else if (player2.includes(elem[0]) && player2.includes(elem[1]) && player2.includes(elem[2])) /*player2 has one of the 3 numbers in win array*/ {
            /*alert that player 2 has won (or a big picture ) */
            /*with sound effect */
            winner.innerText = p2Char.name + "    FOREVER!"
            winner.style.visibility = "visible"

            winning()
            elem.forEach(function(plateId) {
                setInterval(blink, 300, plateId)
            })

            vs.style.visibility = "hidden"
            again.style.visibility = "visible"

        }
        if (player1.length === 5) {
            draw.innerText = "DRAW"
            draw.style.visibility = "visible"

            vs.style.visibility = "hidden"
            again.style.visibility = "visible"


        }
    })
}



const blink = (plateId) => {

    if (document.getElementById(plateId).style.backgroundColor === "transparent") {
        document.getElementById(plateId).style.backgroundColor = "green"
    } else {
        document.getElementById(plateId).style.backgroundColor = "transparent"
    }

}
const refresh = () => {
    window.location.reload()
}