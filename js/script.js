let screen = document.querySelector("#screen");
let clearBtn = document.querySelector("#clear-btn");
let rainbowBtn = document.querySelector("#rainbow-btn");

let color = '#3a3a3a';
let rainbow = false;

function createGrid(size) {
  const numberOfCells = Math.pow(size, 2);

  gridElements = "auto ".repeat(size);

  for(let x = 0; x < numberOfCells; x++){
    	let cell = document.createElement("div");
    	cell.className = "grid-cell";
    	screen.appendChild(cell);
  }
  screen.setAttribute('style', `grid-template-columns: ${gridElements}; grid-template-rows: ${gridElements};`);
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
    console.log(rainbowBtn.value);
    rainbowBtn.innerText = "Color Black";
  } else {
    console.log(rainbowBtn.value);
    rainbowBtn.innerText = "Color Rainbows";
  }
}

function init() {
  const defaultSize = 16;
  createGrid(defaultSize);

  const gridCells = getGridCells();
  gridCells.forEach(gridCell => gridCell.addEventListener("mouseenter", drawColor));

  rainbowBtn.addEventListener("click", switchColors);
  clearBtn.addEventListener("click", clearGrid);
}

init();
