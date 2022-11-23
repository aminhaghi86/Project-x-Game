"use strict"
// {"type": "module"}

const userInfoForm = document.getElementById('userInfo');

const userInfoObj = {}

userInfoForm.onsubmit = function registerUserInfo(e) {
    e.preventDefault();
    const username = userInfoForm.elements.name.value;
    const userInfo = {
        username: username,
        score: 0
    };
    userInfoObj = userInfo;
    console.log(userInfoObj);
}

export {userInfoObj}