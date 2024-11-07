"use strict";

const bg = document.querySelector(".body-color");

const btn = document.querySelector(".change-color");

const span = document.querySelector(".color");

btn.addEventListener("click", () => {
  span.textContent = "-";
const randomColor = getRandomHexColor();
bg.style.backgroundColor = `${randomColor}`;
 const htmlString = `<span class="color">${randomColor}</span>`;
 span.innerHTML += htmlString;

});


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
      
  }
  