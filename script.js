"use strict";
import { setName, setScore } from "./store.js";

const form = document.getElementById("userInfo");
const noBtn = document.getElementById("noBtn");

form.onsubmit = function (e) {
  e.preventDefault();
  const inputName = document.getElementById("name").value;
  inputName !== null && inputName !== "" ? saveData(inputName) : errorMessage();

  //
};

//save data
const saveData = (inputName) => {
  setName(inputName);
  setScore(0);
  setTimeout(() => {
    window.location.href = "../page1/page1.html";
  }, 500);
};
//end of save data

// Error Message
const errorMessage = () => {
  setTimeout(() => {
    const funnyImage = document.createElement("img");
    funnyImage.setAttribute("class", "funnycat");
    funnyImage.setAttribute("src", "../images/catfunny.gif");
    document.body.appendChild(funnyImage);
  }, 500);
  setTimeout(() => {
    document.querySelectorAll(".funnycat").forEach((element) => {
      element.style.display = "none";
    });
  }, 2500);
  setTimeout(() => {
    alert("please enter your name :)");
  }, 3000);
};
// End OF Error Message

