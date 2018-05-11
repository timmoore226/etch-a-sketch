let screen = document.querySelector("#screen");
let clearBtn = document.querySelector("#clear-btn");
let colorBtn = document.querySelector("#color-btn");
let resizeBtn = document.querySelector("#resize-btn");

let color = '#3a3a3a';
let rainbow = false;
let gridSize = 16;

function createGrid(size) {
  const numberOfCells = Math.pow(size, 2);

  gridElements = "auto ".repeat(size);

  for(let x = 0; x < numberOfCells; x++){
    	let cell = document.createElement("div");
    	cell.className = "grid-cell";
    	screen.appendChild(cell);
  }
  screen.setAttribute('style', `grid-template-columns: ${gridElements}; grid-template-rows: ${gridElements};`);

  const gridCells = getGridCells();
  gridCells.forEach(gridCell => gridCell.addEventListener("mouseenter", drawColor));
}

let getGridCells = () => {
  const cells = document.querySelectorAll('.grid-cell');
  return cells;
}

function randomColor () {
    var max = 0xffffff;
    return '#' + Math.round( Math.random() * max ).toString( 16 );
}

let drawColor = (e) => {
  color = rainbow ? randomColor() : '#3a3a3a';
  e.target.style.backgroundColor = color;
}

let clearGrid = () => {
  const gridCells = getGridCells();
	gridCells.forEach(gridCell => gridCell.style.backgroundColor = "white");
}

let switchColors = () => {
  rainbow = rainbow ? false : true;
  if(rainbow) {
    console.log(colorBtn.value);
    colorBtn.innerText = "Color Black";
  } else {
    console.log(colorBtn.value);
    colorBtn.innerText = "Color Rainbows";
  }
}

let resizeGrid = () => {
  gridSize = prompt("What size would you like?");
  while (screen.firstChild) {
    screen.removeChild(screen.firstChild);
  }
  createGrid(gridSize);
}

function init() {
  createGrid(gridSize);

  colorBtn.addEventListener("click", switchColors);
  clearBtn.addEventListener("click", clearGrid);
  resizeBtn.addEventListener("click", resizeGrid);
}

init();
