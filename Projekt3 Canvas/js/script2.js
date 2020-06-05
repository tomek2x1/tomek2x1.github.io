// Default properties
document.querySelector("#backgroundColor").value = "#f23587";
document.querySelector("#pencilColor").value = "#f99954";

// Btn
const pencilColorEl = document.getElementById("pencilColor");
const backgroundColorEl = document.getElementById("backgroundColor");
const pencilSizeEl = document.getElementById("pencilSize");
const clearBtn = document.getElementById("clear");
const saveBtn = document.getElementById("save");

// Settings Values

let pencilColor = pencilColorEl.value;
let backgroundColor = backgroundColorEl.value;
let pencilSize = pencilSizeEl.value;

const paths = [];
const currentPath = [];

function setup() {
  createCanvas(2000, 1000);
  // Set backgroundColor
  background(`${backgroundColor}`);
}

function draw() {
  if (mouseIsPressed) {
    const point = {
      x: mouseX,
      y: mouseY,
      color: pencilColor,
      size: pencilSizeEl.value,
    };
    currentPath.push(point);
  }

  paths.forEach((path) => {
    beginShape();
    path.forEach(({ x, y, color, size }) => {
      vertex(x, y);
      strokeWeight(size);
      stroke(color);
    });
    endShape();
  });

  noFill();
}

function mousePressed() {
  currentPath.length = 0;

  paths.push(currentPath);
}

function resetSketch() {
  clear();
  background(`${backgroundColor}`);
}

// Save image function
const saveImage = () => {
  saveCanvas("myCanvas", "jpg");
};

// Clear Canvas
const clearCanvas = () => {
  resetSketch();
};

// Change Color
pencilColorEl.addEventListener(
  "change",
  () => (pencilColor = pencilColorEl.value)
);

// Change Background
backgroundColorEl.addEventListener("change", () => {
  backgroundColor = backgroundColorEl.value;
  background(`${backgroundColor}`);
});

// Change PencilSize
pencilSizeEl.addEventListener(
  "change",
  () => (pencilSize = pencilSizeEl.value)
);

// Clear Canvas Event
clearBtn.addEventListener("click", clearCanvas);

// Save and Download Image Event
saveBtn.addEventListener("click", saveImage);
