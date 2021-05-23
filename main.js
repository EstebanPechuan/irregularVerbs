const body = document.querySelector('body')
const bigBigBox = document.querySelector('.bigBigBox')
const right = document.querySelector('.right')
const left = document.querySelector('.left')
const bigBox = document.querySelectorAll('.bigBox')

// let ordenRandom = []

// auxRandom = randomNumber()
// ordenRandom.push(auxRandom)

// for (i = 0; i < 9; i++) {
//     auxRandom = randomNumber()
//     let auxBoolean = true

//     while ( auxBoolean ) {
//         for (let j = 0; j < ordenRandom.length; j++) {
//             if (auxRandom != ordenRandom[j]) {
//                 auxBoolean = false
//             } else {
//                 auxRandom = randomNumber()
//             }
//         }
//     }

//     ordenRandom.push(auxRandom)
// }

// console.log(ordenRandom)

// function randomNumber() {
//     return Math.floor(Math.random() * 10);
// }

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







































// class Contenido {
//     constructor(rotacion) {
//         this.rotacion = 0;
//     }
//     crearCajas() {
//         let bigBox = document.createElement('div')      

//         bigBox.setAttribute('class', 'bigBox')
//         bigBox.setAttribute('onclick', 'caja.rotate(this)')
//         bigBigBox.appendChild(bigBox)

//         for (let i = 0; i < 3; i++) {
//             let box = document.createElement('div')
//             box.setAttribute('class', 'box')
//             bigBox.appendChild(box)
//         }
//     }

// }

// let caja = new Contenido()
// caja.crearCajas()

// let caja2 = new Contenido()
// caja2.crearCajas()

// function box(hola) {
//     hola.rotacion -= 120
//     hola.setAttribute('style', 'transform: scale(0.5) rotateY('+ hola.rotacion +'deg); transition: 0.5s;')
// }

// function leftButton() {
//     rotacion += 120
//     bigBox.setAttribute('style', 'transform: scale(0.5) rotateY('+ rotacion +'deg); transition: 0.5s;')
// }

// function rightButton() {
//     rotacion -= 120
//     bigBox.setAttribute('style', 'transform: scale(0.5) rotateY('+ rotacion +'deg); transition: 0.5s;')
// }
