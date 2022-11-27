import { setScore, getScore } from "../../store.js";

const doors = document.querySelectorAll(".doors");
const backdrop = document.getElementById("backdrop");
const doorSound = document.getElementById("door-sound");
const wrongAnswer = document.getElementById("wrong-answer");
const exitGame = document.getElementById("exit-game");

// variables
let randomNum = Math.floor(Math.random() * 2)+1;

// variables

// door opening sound

doors.forEach((door) => {
  door.onclick = () => {
    doorSound.play();
    setTimeout(() => {
      window.location.href = `../game${randomNum}/game${randomNum}.html`;
    }, 1500);
  };
});
// door opening sound

const falseDoor = () => {
  const selectDoor = doors[randomNum];
  console.log(selectDoor);
  selectDoor.src = `../images/door-stage-2.png`;
  selectDoor.onclick = () => {
    doorSound.play();
    setTimeout(() => {
      wrongAnswer.style.animationPlayState = "running";
      wrongAnswer.classList.remove("inactive");
      backdrop.classList.remove("inactive");
    }, 1500);
  };
};
falseDoor();

exitGame.onclick = () => {
  window.location.href = "../page4/page4.html";
};
