
//SOUNDS
let playDJ = function(){document.getElementById("djAudio").play()}
let playDog = function(){document.getElementById("dogAudio").play()}
let playCat = function(){document.getElementById("catAudio").play()}
let playMouse = function(){document.getElementById("mouseAudio").play()}

//END SOUNDS

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

// Animation NOT WORKING
// choiceBtns.addEventListener("click", function () {
//   let shakeit = document.getElementById('resultText');
//   shakeit.classList.add('animate__animated', 'animate__wobble');
//   shakeit.addEventListener("animationend", function (){
//   shakeit.classList.remove('animate__animated', 'animate__wobble');
//   }) 
// });

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `You: ${player}`;
    computerText.textContent = `The other candidate: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "DOG";
        break;
      case 2:
        computer = "CAT";
        break;
      case 3:
        computer = "MOUSE";
        break;
    }
}
function checkWinner(){
    if(player == computer){
      return "Draw!";
    }
    else if (computer == "DOG"){
      return (player == "MOUSE") ? "You Win!" : "You Lose!"
    }
    else if (computer == "MOUSE"){
      return (player == "CAT") ? "You Win!" : "You Lose!"
    }
    else if (computer == "CAT"){
      return (player == "DOG") ? "You Win!" : "You Lose!"
    }
}
