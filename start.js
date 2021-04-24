const sure = () => {
    document.getElementById("cont").style.visibility = 'visible'
    document.getElementById("start").style.visibility = 'hidden'


    setTimeout(hrV, 500)
    playSound()

}

const hrV = () => {
    document.getElementById("hr").style.visibility = 'visible'


    setTimeout(hungryV, 2000)

}
const hungryV = () => {
    document.getElementById("hun").style.visibility = 'visible'


    setTimeout(thinkV, 2000)
}

const thinkV = () => {
    document.getElementById("think").style.visibility = 'visible'

}

const playSound = () => bgsound.play();
const pauseSound = () => bgsound.pause();