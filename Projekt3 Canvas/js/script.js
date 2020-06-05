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
console.log(pencilColor, backgroundColor, pencilSize);

function setup() {
  createCanvas(2000, 1000);
  // Set backgroundColor
  background(`${backgroundColor}`);
}

function mouseDragged() {
  ellipse(mouseX, mouseY, pencilSize, pencilSize);
  // prevent default
  return false;
}

function draw() {
  if (mouseDragged) {
    noStroke();
    fill(pencilColor);
  } else {
    null;
  }
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
