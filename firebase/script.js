"use strict";
const firebaseConfig = {
  apiKey: "AIzaSyASTKEqpfcsrVt-YYuvYgj-BrfEAFTeFwM",
  authDomain: "project-xgame.firebaseapp.com",
  projectId: "project-xgame",
  storageBucket: "project-xgame.appspot.com",
  messagingSenderId: "821288931646",
  appId: "1:821288931646:web:03b2303116bdb09b501c6f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

document.getElementById("btnSave").onclick = async () => {
  const usernameEl = document.getElementById("userName");
  const emailEl = document.getElementById("userEmail");
  const username = usernameEl.value;
  const email = emailEl.value;
  await db.collection("userInfo").add({
    username: username,
    email: email,
    created: Date.now(),
  });
  alert('data saved in FireStore Database')
  usernameEl.value = "";
  emailEl.value = "";
};
