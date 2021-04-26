function clickSound() {
    click.play()
}

function failSound() {
    susp.play()
}

const sure = () => {

    document.getElementById("cont").style.visibility = 'visible'
    document.getElementById("start").style.visibility = 'hidden'


    setTimeout(hrV, 500)
    setTimeout(playSound, 2600)

    failSound()

}

const hrV = () => {
    document.getElementById("hr").style.visibility = 'visible'


    setTimeout(hungryV, 1000)

}
const hungryV = () => {
    document.getElementById("hun").style.visibility = 'visible'


    setTimeout(thinkV, 1000)
}

const thinkV = () => {
    document.getElementById("think").style.visibility = 'visible'

}

const playSound = () => bgsound.play();
const pauseSound = () => bgsound.pause();