"use strict";

const button = document.querySelector(".change-color");
const colorSpan = document.querySelector("span.color");
const body = document.querySelector("body");

function getRandomHexColor(event) {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

button.addEventListener("click", getRandomHexColor);
