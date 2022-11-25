const url = "data.json";

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const hint = document.querySelector(".hint");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  total = 0;
  showQuestion(qIndex);
};

play.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
});

const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(".score").textContent = `Score: ${correctCount}`;
};

const showQuestion = (qNumber) => {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.sort(() => Math.random() - 0.5);

      if (qIndex === data.length) return showResult();
      selectedAnswer = null;
      question.textContent = data[qNumber].question;
      hint.textContent = data[qNumber].category;

      answersContainer.innerHTML = data[qNumber].answers
        .map(
          (item, index) =>
            `   
    <div class="answer">
        <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
        <label for="1">${item.answer}</label>
    </div>
    `
        )
        .join("");

      selectAnswer();
    });
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : showResult();
      qIndex++;
      showQuestion(qIndex);
    } else alert("Select an answer!");
  });
};

showQuestion(qIndex);
submitAnswer();
