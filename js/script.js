let screen = document.querySelector("#screen");
let color = "black";
let gridCellNumber = 16;
let gridSize = 448;
let gridCellSize = gridSize / gridCellNumber;

for(let r = 0; r < gridCellNumber; r++){
  	let row = document.createElement("div");
  	row.setAttribute("class", "row");
  	for(let c = 0; c < gridCellNumber; c++){
    		let col = document.createElement("div");
        col.setAttribute("style", "width: "+gridCellSize+"px; height: "+gridCellSize+"px;");
    		col.setAttribute("class", "grid-cell");
    		row.appendChild(col);
  	}
    document.documentElement.style.setProperty("--screenSize", gridSize+"px");
    document.documentElement.style.setProperty("--containerHeight", gridSize+160+"px");
    document.documentElement.style.setProperty("--containerWidth", gridSize+50+"px");
  	screen.appendChild(row);
}

let gridCells = document.querySelectorAll(".grid-cell");

let drawColor = (e) => {
    e.target.style.backgroundColor = color
}

let clearGrid = () => {
	gridCells.forEach(gridCell => gridCell.style.backgroundColor = "white");
}

let clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener("click", clearGrid);

gridCells.forEach(gridCell => gridCell.addEventListener("mouseenter", drawColor));
