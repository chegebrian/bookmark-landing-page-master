const openEl = document.querySelector(".open-menu");
const closeEl = document.querySelector(".close-menu");
const navEl = document.querySelector(".nav-elements");
const questionEl = document.querySelectorAll(".question");
const tabLinksEl = document.querySelectorAll(".tab-link");
const tabsEl = document.querySelectorAll(".tab");
// open & close menu
openEl.addEventListener("click", () => {
  navEl.classList.remove("translate-x-full");
  navEl.classList.add("translate-x-0");
  openEl.classList.add("hidden");
});

closeEl.addEventListener("click", () => {
  navEl.classList.add("translate-x-full");
  navEl.classList.remove("translate-x-0");
  openEl.classList.remove("hidden");
});

questionEl.forEach((question) => {
  question.addEventListener("click", () => {
    question.nextElementSibling.classList.toggle("hidden");
    if (question.nextElementSibling.classList.contains("hidden")) {
      question
        .querySelector("i")
        .classList.replace("fa-circle-minus", "fa-circle-plus");
    } else
      question
        .querySelector("i")
        .classList.replace("fa-circle-plus", "fa-circle-minus");
  });
});

// switch tabs
tabLinksEl.forEach((tabLink, index) => {
  tabLink.addEventListener("click", () => {
    tabsEl.forEach((tab) => {
      tab.classList.add("hidden");
    });
    tabsEl[index].classList.remove("hidden");
  });
});
