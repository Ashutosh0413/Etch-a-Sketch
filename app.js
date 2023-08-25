const grid = document.querySelector('.grid');
let gridValue = document.querySelector('.grid-size');
let gridSize = document.querySelector('input');
const resetBtn = document.querySelector('.reset');
const applyGridSize = document.querySelector('.apply');


//default size
let squareSize = 8;

//default view of 8 x 8

createGrid(squareSize);

//individual div
function createDiv(size){
    const div= document.createElement('div');
    div.classList.add('box');
    div.style.width=`${size}px`;
    div.style.height=`${size}px`;

    return div;
}

//create grid
function createGrid(gridSize){
    for(i=0;i<gridSize;i++){
        for(j=0;j<gridSize;j++){
            grid.appendChild(createDiv(grid.clientWidth/gridSize))
        }
    }
}

//reset

function reset(){
    while(grid.firstChild){
        grid.removeChild(grid.lastChild)
    }
    createGrid(squareSize)
}

//event listeners


grid.addEventListener('mouseover',(e)=>{
    if(e.target.matches('.box')){
        e.target.classList.add('active');
    }
});

gridSize.addEventListener('input', (e)=>{
    squareSize= e.target.value;
    gridValue.textContent=`${squareSize}x${squareSize}`;
});

applyGridSize.addEventListener('click', ()=>{
    reset();
});

resetBtn.addEventListener('click',reset);