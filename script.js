"use strict";
let arrayUser = [];
const form = document.getElementById("userInfo");
//localStorage.getItem("UserName");
form.onsubmit = function (e) {
  const inputName = document.getElementById("name").value;
  e.preventDefault();
  arrayUser.push(inputName);
  localStorage.setItem("UserName", arrayUser);
};
