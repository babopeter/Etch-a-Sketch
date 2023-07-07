function createGrid() {
    const gridContainer = document.querySelector('#gridcontainer'); 
    const grid = document.createElement('div');
    grid.classList.add('grid');

    gridContainer.appendChild(grid);
}

createGrid();