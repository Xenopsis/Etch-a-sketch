const gameboard = document.querySelector("#gameboard")
const gridSize = document.querySelector(".gridSize .slider")
const rainbowBtn = document.querySelector(".rainbow")
const eraser = document.querySelector(".eraser")
const clear = document.querySelector(".clear")

const textSize = document.querySelector(".sizeText")

let size = gridSize.value;
let pxWidth = 500;
let isRainbow = false;
let isEraser = false;

rainbowBtn.addEventListener('click', () => {
    if (rainbowBtn.textContent === "Rainbow: Off"){
        rainbowBtn.textContent = "Rainbow: On"
        rainbowBtn.style.backgroundColor = "rgb(209, 209, 111)"
        isRainbow = true;
    }else if (rainbowBtn.textContent === "Rainbow: On"){
        rainbowBtn.textContent = "Rainbow: Off"
        rainbowBtn.style.backgroundColor = "rgb(235, 235, 127)"
        isRainbow = false;
    }
})

eraser.addEventListener('click', () => {
    if (eraser.textContent === "Eraser: Off"){
        eraser.textContent = "Eraser: On"
        eraser.style.backgroundColor = "rgb(209, 209, 111)"
        isEraser = true
    }else if (eraser.textContent === "Eraser: On"){
        eraser.textContent = "Eraser: Off"
        eraser.style.backgroundColor = "rgb(235, 235, 127)"
        isEraser = false
    }
})


function createGrid (size){
    for (let row = 0; row < size; row++) {
        let rowSize = document.createElement("div")
        rowSize.classList.add("row")

        
        for (let column = 0; column < size; column++) {
            let columnSize = document.createElement("div")
            columnSize.classList.add("column")
            columnSize.style.height = (`${pxWidth / size}px`)
            columnSize.style.width = (`${pxWidth / size}px`)
            columnSize.style.margin = (`${(pxWidth / size) / 40}px`)
            rowSize.appendChild(columnSize)
        }

        gameboard.appendChild(rowSize)
    }
    const box = document.querySelectorAll(".column")

    box.forEach((div) => {
        div.addEventListener('mouseover', () => {
        if (isEraser === true){
            div.style.backgroundColor = "white"
        }else if (isRainbow === true){
            div.style.backgroundColor = randomColor()
        }else if (isRainbow === false){
            div.style.backgroundColor = "black"
        }
        
    })
})
}
    
createGrid(size)

clear.addEventListener('click', () => {
    gameboard.innerHTML = ""
    createGrid(size)
})
gridSize.addEventListener("input", () => {
    size = gridSize.value;
    gameboard.innerHTML = ""
    createGrid(size)
    textSize.textContent = `${size} x ${size}`
})

function randomColor (){
    const letter = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++){
        color += letter[Math.floor(Math.random() * 16)]
    }
    return color;
}
