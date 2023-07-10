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

const grid = document.querySelectorAll('.grid');
grid.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = '#4000ff';
    })
})

const pixelSlider = document.getElementById('pixel-slider');
//console.log(pixelSlider.value);

