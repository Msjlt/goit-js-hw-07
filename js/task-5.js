"use strict";

const button = document.querySelector(".change-color");

function getRandomHexColor(event) {
  const body = document.querySelector("body");
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
  body.style.backgroundColor = randomColor;
}

button.addEventListener("click", getRandomHexColor);
