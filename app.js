const divBody = document.querySelector("#divBody");

addEventListener("mouseover", (event) => {});

// let userResponse = prompt();

for (let i = 4; i > 0; --i) {
    const i = document.createElement("div")
    i.classList.add("row")
    divBody.appendChild(i);
    for (let j = 4; j > 0; --j) {
        const j = document.createElement("div");
        j.classList.add("column");
        j.addEventListener("mouseover", () => {ChangeColor();})
        i.appendChild(j);
    }
}

let ChangeColor = function() {
    console.log("hello");
}