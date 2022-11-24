"use strict";
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

const displayFirebaseSection = document.getElementById("displayFirebase");
async function information() {
  displayFirebaseSection.innerHTML = "";
  let datas = await db.collection("userInfo").get();
  //   console.log(db.collection('userInfo'));
  console.log(datas.docs);
  datas.docs.forEach((element) => {
    displayFirebaseSection.innerHTML = ` 
     ${element.username}
     ${element.score}
    `;
  });
}
information();

// `
