"use strict";

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// Привіт, менторе :) Я вирішила спробувати створити окрему функцію, якби у мене була б задача застосовувати ії декілька раз у різних місцях коду. Але, можу виправити на стрілочну безпосередньо у nameInput.addEventListener("input", ());

function inputChange() {
  const trimmedValue = nameInput.value.trim();
  if (trimmedValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = trimmedValue;
  }
}

nameInput.addEventListener("input", inputChange);
