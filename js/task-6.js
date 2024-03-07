"use strict";

function createBoxes(amount) {
  const boxesContainer = document.querySelector("#boxes");

  boxesContainer.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const createButton = document.querySelector("[data-create]");
createButton.addEventListener("click", () => {
  const amount = Number(document.querySelector("input").value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
  document.querySelector("input").value = "";
});

const destroyButton = document.querySelector("[data-destroy]");
destroyButton.addEventListener("click", destroyBoxes);
