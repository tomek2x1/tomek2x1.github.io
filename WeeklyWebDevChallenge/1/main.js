"use strict";

const ticksLabel = document.querySelectorAll("label");

function showTick() {
    console.log(this);
    const ticksBox = document.querySelectorAll(".tick");
    ticksBox.forEach(tickBox => {
       if(tickBox.dataset.option === this.getAttribute("for")){
          tickBox.classList.toggle("show");
       } 
    })
}

ticksLabel.forEach(tickLabel => {
    tickLabel.addEventListener("click", showTick);
});