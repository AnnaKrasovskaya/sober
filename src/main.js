import "./style.scss";
const burger = document.getElementById("burger");
const menuMobile = document.getElementById("menuMobile");
const close = document.getElementById("close-burger");
const questions = document.querySelectorAll(".blockQuestion");
if (questions) {
  questions.forEach((question) => {
    question.addEventListener("click", () => {
      question.classList.toggle("active");
    });
  });
}

if (burger) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menuMobile.classList.toggle("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    burger.classList.remove("active");
    menuMobile.classList.remove("active");
  });
}
