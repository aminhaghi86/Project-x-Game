"use strict";
import { increaseScore, setScore } from "../../store.js";
import { goToDoors, goToScoreboard } from "../../navigation.js";

//SOUNDS
let playDJ = function () {
  document.getElementById("djAudio").play();
};

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
let counter = 10;

let number = Math.floor(Math.random() * 41);

form.onsubmit = function (event) {
  event.preventDefault();

  let guess = Number(form.elements.guess.value);
  form.elements.guess.value = "";
  if (guess < number) {
    counter--;
    console.log(counter);

    showErrorMessage(`Too low :(, you have ${counter} guesses left`);
  } else if (guess > number) {
    console.log(counter);
    counter--;
    showErrorMessage(`Too high :(, you have ${counter} guesses left`);
  } else if (guess === number) {
    successMessage.innerHTML = "nice, you are right!🔑";
    errorMessage.innerHTML = "";
    goToDoors();
    increaseScore();
  }
  if (counter === 0) {
    showErrorMessage("You Lose! :(");
    setTimeout(() => {
      goToScoreboard();
    }, 1500);
  }
};

function showErrorMessage(message) {
  errorMessage.innerHTML = message;
}
