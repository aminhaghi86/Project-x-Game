const firebaseConfig = {
  apiKey: "AIzaSyASTKEqpfcsrVt-YYuvYgj-BrfEAFTeFwM",
  authDomain: "project-xgame.firebaseapp.com",
  projectId: "project-xgame",
  storageBucket: "project-xgame.appspot.com",
  messagingSenderId: "821288931646",
  appId: "1:821288931646:web:03b2303116bdb09b501c6f",
};

const list = document.querySelector(".scoreboard ol");
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.collection("userInfo")
  .orderBy("score", "desc")
  .limit(3)
  .onSnapshot((snapshot) => {
    renderPosts(snapshot.docs);
  });


const renderPosts = (scores) => {
  list.innerHTML = "";

  for (let score of scores) {
    const data = score.data();
    console.log(data);

    const listEl = document.createElement("div");
    listEl.innerHTML = `
        ${data.score} 
        ${data.username} 

    `;
    list.append(listEl);
  }
};