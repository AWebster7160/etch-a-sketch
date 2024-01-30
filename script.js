let cube = document.createElement('div');
const grid = document.querySelector('.grid');

for (i=0; i<256; i++) {
    cube = document.createElement('div');
    cube.setAttribute('id', i);
    grid.appendChild(cube);
}

function etch(e) {
    if (e.target === grid){
        return;
    }
    e.target.style.backgroundColor='black';
}
grid.addEventListener('mouseover', etch);

