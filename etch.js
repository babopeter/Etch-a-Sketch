// Creates a 16x16 grid on the page
function createGrid() {
    
    

    for (let i = 0; i < 16; i++) {
        gridArray[i] = document.createElement('div');
        gridArray[i].classList.add('grid');
        gridContainer.appendChild(gridArray[i]);
    }
}

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



function paintGrid(){
const grid = document.querySelectorAll('.grid');
grid.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = '#4000ff';
    })
})
}
const pixelSlider = document.getElementById('pixel-slider');
pixelSlider.addEventListener('mouseup', function() {
    //changeSize();
    resetGrid();
    createGrid();
    paintGrid();
})
