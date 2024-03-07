"use strict";

const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((element) => {
  const categories = element.querySelector("h2").textContent;
  const elements = element.querySelectorAll("li").length;

  console.log(`Category: ${categories}`);
  console.log(`Elements: ${elements}`);
});
