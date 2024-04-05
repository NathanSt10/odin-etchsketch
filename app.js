window.onload = function() {
    buildGrid(16)
}; 

const sizeButton = document.querySelector("#sizeButton")
sizeButton.addEventListener("click", () => {changeSize();})

const divBody = document.querySelector("#divBody");

let changeSize = function() {
    size = prompt();
    deleteGrid(size);
    buildGrid(size);
}

let buildGrid = function(size) {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("container");
    for (let i = size; i > 0; --i) {
        const i = document.createElement("div")
        i.classList.add("column")
        gridContainer.appendChild(i);
        for (let j = size; j > 0; --j) {
            const j = document.createElement("div");
            j.classList.add("row");
            j.addEventListener("mouseover", () => {changeColor(j);})
            i.appendChild(j);
        }
    }    
    divBody.appendChild(gridContainer);
}

let deleteGrid = function(size) {
    const gridContainer = document.querySelector(".container");
    divBody.removeChild(gridContainer);
}

let changeColor = function(grid) {
    grid.style.backgroundColor = "black";
}
