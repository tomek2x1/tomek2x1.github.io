"use strict";

const imgArray = ["img1", "img2", "img3", "img4"];

let i = 1;

// Default value
const imageNumber = document.querySelector(".slider__number");
imageNumber.innerText = `${i}/${imgArray.length}`;

// Show next image
const nextImage = () => {
  const image = document.querySelector(".slider__image");

  if (i > 0) {
    left.classList.remove("notactive");
  }

  if (i < imgArray.length) {
    image.setAttribute("src", `img/${imgArray[i]}.jpg`);
    i++;
    imageNumber.innerText = `${i}/${imgArray.length}`;
    if (i === 4) {
      right.classList.add("notactive");
    }
  } else {
    right.classList.add("notactive");
    image.setAttribute("src", `img/${imgArray[imgArray.length - 1]}.jpg`);
  }
};

// Show previous image
const prevImage = () => {
  if (i === imgArray.length) {
    right.classList.remove("notactive");
  }

  const image = document.querySelector(".slider__image");
  if (i > 1 && i <= imgArray.length) {
    if (i === 4) {
      right.classList.remove("notactive");
    }
    --i;
    image.setAttribute("src", `img/${imgArray[i - 1]}.jpg`);
    imageNumber.innerText = `${i}/${imgArray.length}`;
    if (i === 1) {
      left.classList.add("notactive");
    }
  } else {
    left.classList.add("notactive");
    image.setAttribute("src", `img/${imgArray[0]}.jpg`);
  }
};

// Events
const right = document.querySelector(".arrow--right");
right.addEventListener("click", nextImage);

const left = document.querySelector(".arrow--left");
left.addEventListener("click", prevImage);

// Keyboard events
window.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 37:
      prevImage();
      break;
    case 39:
      nextImage();
      break;
    default:
      break;
  }
});
