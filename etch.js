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
let randomMode = false;
let mouseDown = false; 



createGrid();
paintNormal();

window.onmousedown = () =>(mouseDown = true)
window.onmouseup = () => (mouseDown = false)

// paint to random color
function paintRandom(){
    const grid = document.querySelectorAll('.grid');
    //const randomColor = Math.floor(Math.random()*16777215).toString(16);
    grid.forEach((div) => {
        div.addEventListener('mouseover', () => {
            if (mouseDown == true) {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            div.style.backgroundColor = '#' + randomColor;
            }
            div.onmousedown = () => {
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                div.style.backgroundColor = '#' + randomColor;
                //mouseDown = true;
            }
        })
    })
}

// paint to single color
function paintNormal(){
    const grid = document.querySelectorAll('.grid');
    grid.forEach((div) => {
        div.addEventListener('mouseover', () => {
            if (mouseDown == true) {
                div.style.backgroundColor = '#ff9505ff';
            }
            div.onmousedown = () => {
                div.style.backgroundColor = '#ff9505ff';
            }
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
    if (!randomMode) {
        paintNormal()
    } else {
        paintRandom();
    }
    showSliderValue();
});

// reset grid on button click
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function() {
    resetGrid();
    createGrid();
    if (!randomMode) {
        paintNormal()
    } else {
        paintRandom();
    }
});

const randomButton = document.getElementById('random');
randomButton.addEventListener('click', function() {
    randomMode = true;
    paintRandom();
})

const normalButton = document.getElementById('normal');
normalButton.addEventListener('click', function() {
    randomMode = false;
    paintNormal();
})


// Add hold mouse button painting
// Add color picker for single colors
// Add darkening effect
