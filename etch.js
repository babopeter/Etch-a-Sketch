// Creates a 16x16 grid on the page
function createGrid() {
    const gridContainer = document.querySelector('#gridcontainer'); 
    const gridArray = [];

    for (let i = 0; i < 16; i++) {
        gridArray[i] = document.createElement('div');
        gridArray[i].classList.add('grid');
        gridContainer.appendChild(gridArray[i]);
    }
}

createGrid();