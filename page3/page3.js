"use strict";
import {userInfoObj} from '../script'



const firebaseConfig = {
  apiKey: "AIzaSyASTKEqpfcsrVt-YYuvYgj-BrfEAFTeFwM",
  authDomain: "project-xgame.firebaseapp.com",
  projectId: "project-xgame",
  storageBucket: "project-xgame.appspot.com",
  messagingSenderId: "821288931646",
  appId: "1:821288931646:web:03b2303116bdb09b501c6f",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


const questionH2 = document.getElementById("question");
const catChatbox = document.getElementById("cat-chatbox");

const answerButtons = document.querySelectorAll(".buttons");

let score = 0;
//
let scoreEl = document.getElementById('scoreCouter');
//
console.log(answerButtons);

async function pushInfoToFirebase(score) {
	await db.collection("userInfo").add({
    	username: 'blackFridayYeah!!!',
		score: score
    });
}


const getData = async () => {
  const res = await fetch(
    "https://the-trivia-api.com/api/questions?categories=food_and_drink,music&limit=50"
  );
  const data = await res.json();
  console.log(data);
  const question = data[0].question;
  const answer = data[0].correctAnswer;
  const incorrectAnswers = data[0].incorrectAnswers;
  const api = {
    question: question,
    correctAnswer: answer,
    incorrectAnswers: incorrectAnswers,
  };
  return api;
};
const changeHTML = async () => {
  const api = await getData();
  console.log(api.correctAnswer);
  const answers = api.incorrectAnswers;
  const randomNum = Math.floor(Math.random() * answers.length);
  answers.splice(randomNum, 0, api.correctAnswer);
  console.log(answers);
  questionH2.innerHTML = `${api.question}`;
  for (let index = 0; index < answers.length; index++) {
    answerButtons[index].innerHTML = `${answers[index]}`;
  }
  const questionChecker =  (e) => {
      const audiowin = new Audio('Coin-sound.wav');
      const audiolose = new Audio('angel-choir.mp3');
    if (e.target.innerText === api.correctAnswer) {
      setTimeout(() => {
        audiowin.play();
      }, 100);
      setTimeout(() => {
        audiowin.pause();
      }, 500);

      score++;
      scoreEl.innerHTML = score; 
      catChatbox.style.color = "green";
      catChatbox.innerHTML = `yes! i got it, it was <b>"${api.correctAnswer}"</b>`;
    } else if (e.target.innerHTML !== api.correctAnswer) {
      console.log(e.target.innerHTML);
      setTimeout(() => {
        audiolose.play();
      }, 100);
      setTimeout(() => {
        audiolose.pause();
      }, 2000);
	  pushInfoToFirebase(score);
      catChatbox.style.color = "red";
      catChatbox.innerHTML = `Nooo, ${e.target.innerHTML} is incorrect!`;
    }
  };

  answerButtons.forEach((button) => {
    button.addEventListener("click", questionChecker);
  });
};
changeHTML();
