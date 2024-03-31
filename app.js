const divBody = document.querySelector("#divBody");

// let userResponse = prompt();

for (let i = 4; i > 0; --i) {
    const i = document.createElement("div")
    i.classList.add("column")
    divBody.appendChild(i);
    for (let j = 4; j > 0; --j) {
        const j = document.createElement("div");
        j.classList.add("row");
        j.textContent = 1;
        i.appendChild(j);
    }
}
