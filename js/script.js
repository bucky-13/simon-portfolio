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

//form validation

const form = document.querySelector("#send-message");
const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const fullnameValue = fullname.value.trim();
  const emailValue = email.value.trim();
  const msgValue = message.value.trim();
  let n = false;
  let e = false;
  let m = false;

  if (fullnameValue === "") {
    setErrorInput(fullname, "You need to enter your name.");
  } else {
    setSuccessInput(fullname);
    n = true;
  }

  if (emailValue === "") {
    setErrorInput(email, "You need to enter a valid e-mail address.");
  } else {
    setSuccessInput(email);
    e = true;
  }

  if (msgValue === "") {
    setErrorInput(message, "You need to enter a message.");
  } else {
    setSuccessInput(message);
    m = true;
  }

  if (n === true && e === true && m === true) {
    form.submit();
  }
}

function setErrorInput(input, errorMessage) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = errorMessage;
  formControl.className = "form-control error";
}

function setSuccessInput(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function validateEmail(email) {
  let regular_expressions =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regular_expressions.test(String(email).toLocaleLowerCase());
}
