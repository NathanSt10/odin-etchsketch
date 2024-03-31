const divBody = document.querySelector("#divBody");

addEventListener("mouseover", (event) => {});

// let userResponse = prompt();

for (let i = 64; i > 0; --i) {
    const i = document.createElement("div")
    i.classList.add("row")
    divBody.appendChild(i);
    for (let j = 64; j > 0; --j) {
        const j = document.createElement("div");
        j.classList.add("column");
        j.addEventListener("mouseover", () => {ChangeColor(j);})
        i.appendChild(j);
    }
}

let ChangeColor = function(grid) {
    grid.style.backgroundColor = "black";
}