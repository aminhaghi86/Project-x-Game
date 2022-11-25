"use strict";
//SOUNDS
let playDJ = function(){document.getElementById("djAudio").play()}

function green() {
  document.getElementById("p").style.color = "green";
}

function red() {
  document.getElementById("p").style.color = "red";
}

function orange() {
  document.getElementById("p").style.color = "orange";
}

function bisque() {
  document.getElementById("p").style.color = "bisque";
}

const form = document.getElementById("guessForm");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

let number = Math.floor(Math.random() * 41);

form.onsubmit = function (event) {
  event.preventDefault();

  let guess = Number(form.elements.guess.value);
  form.elements.guess.value = "";
  if (guess < number) {
    showErrorMessage("Too low :(");
  } else if (guess > number) {
    showErrorMessage("Too high :(");
  } else if (guess === number) {
    successMessage.innerHTML = "nice, you are right!🔑";
    errorMessage.innerHTML = "";
  }
};

function showErrorMessage(message) {
  errorMessage.innerHTML = message;
}
