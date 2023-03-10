
const btnAgain =document.getElementById('playAgain') ;

btnAgain.onclick = ()=>{
    console.log('hi');
    setTimeout(() => {
        window.location.href = '../page2/page2.html'
    }, 500);
}

import { getName, getScore, setScore } from "../store.js";

const firebaseConfig = {
  apiKey: "AIzaSyASTKEqpfcsrVt-YYuvYgj-BrfEAFTeFwM",
  authDomain: "project-xgame.firebaseapp.com",
  projectId: "project-xgame",
  storageBucket: "project-xgame.appspot.com",
  messagingSenderId: "821288931646",
  appId: "1:821288931646:web:03b2303116bdb09b501c6f",
};

const list = document.querySelector(".scoreboard ol");
const playerList = document.getElementById("scoreboard-player");
const playBtn = document.getElementById("playAgainYes");
const resetBtn = document.getElementById("playAgainNo");
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const username = getName();
const score = getScore();

async function pushInfoToFirebase() {
  await db.collection("userInfo").add({
    username: username,
    score: score,
  });
}

pushInfoToFirebase(score);

db.collection("userInfo")
  .orderBy("score", "desc")
  .limit(3)
  .onSnapshot((snapshot) => {
    renderPosts(snapshot.docs);
  });

const renderPosts = (scores) => {
  list.innerHTML = "";
  playerList.innerHTML = "";

  for (let score of scores) {
    const data = score.data();
    console.log(data);

    const listEl = document.createElement("div");
    listEl.innerHTML = `
    Username: ${data.username}  <br>
       Score: ${data.score}<br> <br>
      

    `;
    list.append(listEl);
  }

  const playerEl = document.createElement("div");

  playerEl.innerHTML = `<h2 class="scoreboard-player">Username:${getName()}<br><br>Score:${getScore()}</h2>`;
  playerList.append(playerEl);
  document.querySelector(".scoreboard-player").style.textAlign = "center";
};

playBtn.onclick = () => {
  setScore(0);
  window.location.href = "../page1/page1.html";
};

resetBtn.onclick = () => {
  window.localStorage.removeItem("score");
  window.localStorage.removeItem("UserName");
  window.location.href = "../index.html";
};

