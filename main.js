const body = document.querySelector('body')
const bigBigBox = document.querySelector('.bigBigBox')
const right = document.querySelector('.right')
const left = document.querySelector('.left')
let bigBox = document.querySelectorAll('.bigBox')
let cantidadCajas = bigBox.length

let ordenRandom = []

for (let i = 0; i <= cantidadCajas-1; i++) {
    bigBox = document.querySelectorAll('.bigBox')
    let numRandom = Math.floor(Math.random() * bigBox.length);

    ordenRandom.push(bigBox[numRandom])
    bigBigBox.removeChild(bigBox[numRandom])
    console.log(numRandom)
}

for (let j = 0; j <= cantidadCajas-1; j++) {
    bigBigBox.appendChild(ordenRandom[j])
}

bigBox = document.querySelectorAll('.bigBox')
ordenRandom[0].setAttribute('class', 'bigBox active')

let index = 0

function rotate(hola) {
    let auxiliar = hola.getAttribute('class')

    if (auxiliar == 'bigBox active') {
        hola.setAttribute('class', 'bigBox focus')
    } else (
        hola.setAttribute('class', 'bigBox active')
    )
}

function rightButton() {
    bigBox[index].setAttribute('class', 'bigBox leftBox')

    index+=1
    bigBox[index].setAttribute('class', 'bigBox active')

    left.setAttribute('class', 'left')
    
    if (index >= bigBox.length-1) {
        right.setAttribute('class', 'displayNone')
    }
}

function leftButton() {
    bigBox[index].setAttribute('class', 'bigBox rightBox')

    index-=1
    bigBox[index].setAttribute('class', 'bigBox active')

    right.setAttribute('class', 'right')
    
    if (index <= 0) {
        left.setAttribute('class', 'displayNone')
    }
}
