"use strict";

const hamburger = document.querySelector(".hamburger-menu");
const hamburgerX = document.querySelector(".hamburger-x");
const menu = document.querySelector(".menu");
const contentContainer = document.querySelector(".content-container");

hamburger.addEventListener("click", function () {
  hamburger.classList.add("hidden");
  hamburgerX.classList.remove("hidden");
  menu.style.display = "inline-block";
  contentContainer.style.gridTemplateRows = "400px auto 50px";
});

hamburgerX.addEventListener("click", function () {
  hamburger.classList.remove("hidden");
  hamburgerX.classList.add("hidden");
  menu.style.display = "none";
});
