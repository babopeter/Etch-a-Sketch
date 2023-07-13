// Creates a 16x16 grid on the page
function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
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
            div.style.backgroundColor = '#ff9505ff';
        })
    })
}

// display slider value
function showSliderValue() {
    document.getElementById('slider-output').innerHTML = 
    `${pixelSlider.value} X ${pixelSlider.value}`;
}

// listen to slider value change
const pixelSlider = document.getElementById('pixel-slider');
pixelSlider.addEventListener('input', function() {
    resetGrid();
    changeSize();
    createGrid();
    paintGrid();
    showSliderValue();
});

// reset grid on button click
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function() {
    resetGrid();
    createGrid();
    paintGrid();
});


// Implement random color change function
// Add buttons to change between single and random colors
// Add color picker for single colors
// Add darkening effect
