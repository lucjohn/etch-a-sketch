const body = document.querySelector("body");
const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = 'column';
container.style.width = '960px';
body.appendChild(container);


function createGrid(dimensions) {
    container.style.border = '1px solid black';
    for (let row = 0; row < dimensions; row++) {
        const rowContainer = document.createElement("div");
        rowContainer.style.display = "flex"; 
        container.appendChild(rowContainer);

        for (let column = 0; column < dimensions; column++) {
            const box = document.createElement("div");
            box.style.width = 960/dimensions + 'px';
            box.style.height = 960/dimensions + 'px';
            rowContainer.appendChild(box);

            box.addEventListener('mouseover', () => {
                changeColor(box);
            });
        }
    }
}

function changeColor(box) {
    box.style.backgroundColor = "purple";
}

const button = document.querySelector("button");
button.addEventListener('click', () => {
    container.innerHTML = '';
    const input = prompt("Enter the number of squares for width and height (max 100 squares). ");
    if(input > 100) {
        alert("Too LARGE! Enter a number below 100. ");
    }
    else{
        createGrid(parseInt(input));
    }
})
