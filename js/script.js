"use strict";

const hamburger = document.querySelector(".hamburger-menu");
const hamburgerX = document.querySelector(".hamburger-x");
const menu = document.querySelector(".menu");
const mobileMenuHidden = document.querySelector(".mobile-menu-hidden");
const mobileMenu = document.querySelector(".mobile-menu");
const contentContainer = document.querySelector(".content-container");

//hamburger menu functions

const hamburgerToggle = function () {
  hamburger.classList.toggle("hidden");
  hamburgerX.classList.toggle("hidden");
  menu.classList.toggle("mobile-menu-hidden");
  menu.classList.toggle("mobile-menu");
};

const closeHamburger = function () {
  hamburgerToggle();
  contentContainer.style.gridTemplateRows = "80px auto 50px";
};

//hamburger event listeners

//open hamburger menu

hamburger.addEventListener("click", function () {
  hamburgerToggle();
  contentContainer.style.gridTemplateRows = "400px auto 50px";
});

//close hamburger menu

hamburgerX.addEventListener("click", function () {
  closeHamburger();
});

window.addEventListener("resize", function () {
  let h = document.documentElement.clientWidth;
  if (h > 900 && !menu.classList.contains("mobile-menu-hidden")) {
    closeHamburger();
    console.log("closed");
  }
});
