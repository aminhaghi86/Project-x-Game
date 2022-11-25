"use strict";



// AUDIO play OnLoad or OnClick
window.addEventListener("load",()=>{
  // var player1 = document.getElementById("player");
  // player1.play();
  const audio = new Audio('../Game-Sounds/OpeningScene.mp3');
  audio.play()
 })
//  const noBtn = document.getElementById("noBtn");

//TEXT in chatbox appears
function timedText() {
  const element = document.getElementById("p1");
  element.innerHTML = "";

  setTimeout(() => {
    element.innerHTML = "You. Are. FIRED!";
  }, 1000);
  setTimeout(() => {
    element.innerHTML = "*cries in dog*";
  }, 3000);
  setTimeout(() => {
    element.innerHTML = "NEEEEXT!";
  }, 4000);
  setTimeout(() => {
    element.innerHTML =
      "We here at Dogs of Dogstreet are looking for new talents to recruit! Do you think you have what it takes to make it to the top of our CATdidate list?";
  }, 6000);
}
timedText();

//CAT APPEARS
let catPicture = document.getElementById("catPicture");

window.setTimeout(function () {
  catPicture.classList.add("visible");
}, 8900);

//_____YES/NO BTNS APPEARS
let chatBoxBtns = document.getElementById("chatBoxBtns");

window.setTimeout(function () {
  chatBoxBtns.classList.add("display");
}, 6000);

//___CHATBOX APPEARS
let chatBox = document.getElementById("chatBoxText");

window.setTimeout(function () {
  chatBox.classList.add("visible");
}, 1000);

// NO-btn reveals 'Believe in yourself' Div and plays noBtn-Audio
function revealBossChatbox() {
  // let playNo = function () {
    document.getElementById("audioNo").play();
  // };
  // playNo();
  let x = document.getElementById("bossChatbox");
  x.classList.remove("inactive");
}
// noBtn.onclick = () => {
//   revealBossChatbox();
// };

// YES-btn-audio
const  playYes =  ()=> {
  const audioYes = new Audio('../Game-Sounds/Positive-correct-game-sound.wav');
  audioYes.play();
  setTimeout(() => {
    window.location.href = "../page2/page2.html";
  }, 1000);
  // document.getElementById("audioYes").play();
};
