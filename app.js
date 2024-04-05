const divBody = document.querySelector("#divBody");

let size = 4;
for (let i = size; i > 0; --i) {
    const i = document.createElement("div")
    i.classList.add("row")
    divBody.appendChild(i);
    for (let j = size; j > 0; --j) {
        const j = document.createElement("div");
        j.classList.add("column");
        j.addEventListener("mouseover", () => {ChangeColor(j);})
        i.appendChild(j);
    }
}

let ChangeColor = function(grid) {
    grid.style.backgroundColor = "black";
}