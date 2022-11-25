"use strict";
// import { setName, setScore } from "../store.js";

const form = document.getElementById("userInfo");

form.onsubmit = function (e) {
  e.preventDefault();
  // const backDropEl = document.getElementById("backdrop");
  // setTimeout(() => {
  //   backDropEl.style.display = "none";
  // }, 500);
  window.location.href = "../0-overlay/overlay.html";
  const inputName = document.getElementById("name").value;
  setName(inputName);
  setScore(0);

  
};
