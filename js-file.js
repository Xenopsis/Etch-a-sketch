const gameboard = document.querySelector("#gameboard")
const gridSize = document.querySelectorAll(".gridSize button")

let size = 16;
let pxWidth = 500;

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
        div.style.backgroundColor = "black"
        
    })
})
}
    
createGrid(size)


gridSize.forEach((button) => {
    button.addEventListener('click', () => {
        gameboard.innerHTML = ""
        size = button.value
        createGrid(size)
        
})
});
