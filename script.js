let cube = document.createElement('div');
const grid = document.querySelector('.grid');
const reset = document.createElement('button');
const body = document.querySelector('body');
reset.setAttribute('id', 'reset');
body.appendChild(reset);
reset.innerHTML = ('Reset the grid');
reset.onclick = (() => {
    setGrid();
})

function getRandomRGB() {
    red = Math.floor(Math.random()*255+1);
    green = Math.floor(Math.random()*255+1);
    blue = Math.floor(Math.random()*255+1);
}

function setGrid() {
getGrid();

while (grid.firstChild){
    grid.removeChild(grid.firstChild);
} 

let cubeSize = ((640 - gridSize * 2)/gridSize);
for (i=0; i<(gridSize**2); i++) {
    cube = document.createElement('div');
    cube.setAttribute('id', i);
    cube.style.width = cubeSize + 'px';
    cube.style.height = cubeSize + 'px';
    grid.appendChild(cube);
    }
}

function getGrid() {
    gridSize = prompt('Enter grid size');
    if (gridSize > 100) {
        alert('Too big!');
        getGrid();
    }
    else {
        return gridSize;
    }
}

function getRandomRGB() {
        
}

setGrid();
function etch(e) {
    if (e.target === grid) {return};
    red = Math.floor(Math.random()*255+1);
    green = Math.floor(Math.random()*255+1);
    blue = Math.floor(Math.random()*255+1);
    e.target.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    
}

grid.addEventListener('mouseover', etch);



