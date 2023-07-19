// variables
const gridContainer = document.querySelector('#gridcontainer');
const resetButton = document.getElementById('reset');
const randomButton = document.getElementById('random');
const colorPicker = document.getElementById('color');
const eraserButton = document.getElementById('eraser');
const gridArray = [];
let gridSize = 4;
let randomMode = false;
let mouseDown = false;
let eraserMode = false;

createGrid();
paintGrid();

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
}

function resetGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function paintGrid(e) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    if (mouseDown && (e.target.parentElement == gridcontainer)) {
        if (randomMode) {
            e.target.style.backgroundColor = '#' + randomColor;
        } else if (!randomMode && !eraserMode) {
            e.target.style.backgroundColor = colorPicker.value;
        } else if (eraserMode) {
            // eraser mode hardcoded with background color
            e.target.style.backgroundColor = '#E8F7EE';
        }
        
    }
};

// display slider value
function showSliderValue() {
    document.getElementById('slider-output').innerHTML =
        `${pixelSlider.value} X ${pixelSlider.value}`;
}

// listen to slider value change
const pixelSlider = document.getElementById('pixel-slider');
pixelSlider.addEventListener('input', function () {
    resetGrid();
    changeSize();
    createGrid();
    showSliderValue();
});

// reset grid on button click
resetButton.addEventListener('click', function () {
    resetGrid();
    createGrid();
});

randomButton.addEventListener('click', function () {
    randomMode = true;
    eraserMode = false;
    highlightButton(randomButton, eraserButton, colorPicker);
})

function highlightButton(button1, button2, button3) {
    button1.style.border = 'solid';
    button1.style.borderColor = '#000000';
    button2.style.border = 'none';
    button3.style.border = 'none';
}



colorPicker.addEventListener('click', function () {
    randomMode = false;
    eraserMode = false;
    highlightButton(colorPicker, randomButton, eraserButton);
})

eraserButton.addEventListener('click', function() {
    randomMode = false;
    eraserMode = true;
    highlightButton(eraserButton, randomButton, colorPicker);
})

document.body.addEventListener('mousedown', function(event) {
    mouseDown = true;
    paintGrid(event);
});

document.body.addEventListener('mouseup', function() {
    mouseDown = false;
});

gridContainer.addEventListener('mouseover', paintGrid);

// Arrange and improve UI
    // Button toggled should be visible