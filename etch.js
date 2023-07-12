// Creates a 16x16 grid on the page
function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        //gridArray[i] = document.createElement('div');
        //gridArray[i].classList.add('grid');
        //gridContainer.appendChild(gridArray[i]);
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid');
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        gridContainer.insertAdjacentElement('beforeend', gridItem);
    }
}

// change the size based on the slider's value
function changeSize() {
    gridSize = pixelSlider.value;
    console.log(gridSize);
}

// find a way to reset the grid
// grid is reset but mousover eventlistener not active
function resetGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

// variables
const gridContainer = document.querySelector('#gridcontainer'); 
const gridArray = [];
let gridSize = 4;


createGrid();
paintGrid();


// listening to mousover
function paintGrid(){
    const grid = document.querySelectorAll('.grid');
    grid.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = '#4000ff';
        })
    })
}

// listen to slider
const pixelSlider = document.getElementById('pixel-slider');
pixelSlider.addEventListener('mouseup', function() {
    resetGrid();
    changeSize();
    createGrid();
    paintGrid();
})
