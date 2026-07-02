const btns = document.getElementsByClassName("btn")
const texts = document.getElementsByClassName("text1")

const clickBtn = function (e) {
    btns[0].classList.add("active")
    btns[1].classList.add("active")
    btns[2].classList.add("active")
    btns[3].classList.add("active")
    btns[0].classList.remove("active")
    btns[1].classList.remove("active")
    btns[2].classList.remove("active")
    btns[3].classList.remove("active")
    texts[0].classList.add("active")
    texts[1].classList.add("active")
    texts[2].classList.add("active")
    texts[3].classList.add("active")
    texts[0].classList.remove("active")
    texts[1].classList.remove("active")
    texts[2].classList.remove("active")
    texts[3].classList.remove("active")
    btns[e - 1].classList.add("active")
    texts[e - 1].classList.add("active")

}
