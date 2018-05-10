let screen = document.querySelector("#screen");
let clearBtn = document.querySelector("#clear-btn");

let color = '#3a3a3a';

function createGrid(size) {
  const numberOfCells = Math.pow(size, 2);

  gridElements = "auto ".repeat(size).trim();

  for(let x = 0; x < numberOfCells; x++){
    	let cell = document.createElement("div");
    	cell.className = "grid-cell";
    	screen.appendChild(cell);
  }
  screen.setAttribute('style', `grid-template-columns: ${gridElements}; grid-template-rows: ${gridElements};`);
}

let drawColor = (e) => {
    e.target.style.backgroundColor = color
}

let clearGrid = () => {
  const gridCells = document.querySelectorAll('.grid-cell');
	gridCells.forEach(gridCell => gridCell.style.backgroundColor = "white");
}

function init() {
  const defaultSize = 16;
  createGrid(defaultSize);

  const gridCells = document.querySelectorAll('.grid-cell');
  gridCells.forEach(gridCell => gridCell.addEventListener("mouseenter", drawColor));

  clearBtn.addEventListener("click", clearGrid);
}

init();
