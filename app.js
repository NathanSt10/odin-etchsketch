const divBody = document.querySelector("#divBody");
const gridContainer = document.createElement("div");
gridContainer.classList.add("container");
divBody.appendChild(gridContainer);

<<<<<<< HEAD
addEventListener("mouseover", (event) => {});

// let userResponse = prompt();

for (let i = 8; i > 0; --i) {
    const i = document.createElement("div")
    i.classList.add("row")
    divBody.appendChild(i);
    for (let j = 8; j > 0; --j) {
=======
let size = 8;
for (let i = size; i > 0; --i) {
    const i = document.createElement("div")
    i.classList.add("row")
    gridContainer.appendChild(i);
    for (let j = size; j > 0; --j) {
>>>>>>> etchsketch-lockgrid
        const j = document.createElement("div");
        j.classList.add("column");
        j.addEventListener("mouseover", () => {ChangeColor(j);})
        i.appendChild(j);
    }
}

let ChangeColor = function(grid) {
    grid.style.backgroundColor = "black";
}