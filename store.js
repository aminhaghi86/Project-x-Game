export const setName = (name) => {
  localStorage.setItem("UserName", JSON.stringify(name));
};

export const getName = () => {
  return JSON.parse(localStorage.getItem("UserName"));
};

export const setScore = (score) => {
  localStorage.setItem("score", JSON.stringify(score));
};

export function getScore() {
  return JSON.parse(localStorage.getItem("score"));
}
export const increaseScore = () => {
  const score = getScore();
  setScore(score + 1);
};
