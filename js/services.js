let darkMode = document.getElementById("darkMode");
let lightMode = document.getElementById("lightMode");

console.log(darkMode);
console.log(lightMode);

let box = document.querySelectorAll(".input");

console.log(box);

let searchIcon = document.getElementById("searchIcon");

console.log(searchIcon);

let changeBg1 = document.querySelectorAll(".change-bg1");
let changeBg2 = document.querySelectorAll(".change-bg2");

console.log(changeBg1);
console.log(changeBg2);

let changeP = document.querySelectorAll(".changeP");
console.log(changeP);

let changeA = document.querySelectorAll(".changeA");
console.log(changeA);

let h3Tag = document.querySelectorAll("h3");

console.log(h3Tag);

darkMode.onclick = function () {
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");

  darkMode.className += " d-none";
  lightMode.className = " mode-icon fa-regular fa-sun";

  searchIcon.style.color = "#c2d0da";
  changeBg1.forEach((backgroundColor) => {
    backgroundColor.style.backgroundColor = "#232220";
  });

  changeBg2.forEach((backgroundColor) => {
    backgroundColor.style.backgroundColor = "#282828";
  });

  h3Tag.forEach((h3) => {
    h3.style.color = "white";
  });

  changeP.forEach((p) => {
    p.style.color = "#c2d0da";
  });

  changeA.forEach((a) => {
    a.style.color = "#eee";
  });

  box.forEach((input) => {
    input.style.backgroundColor = "#232220";
    input.style.color = "#c2d0da";
  });
};

lightMode.onclick = function () {
  document.body.classList.add("light-mode");
  document.body.classList.remove("dark-mode");

  lightMode.className += " d-none";
  darkMode.className = " mode-icon fa-solid fa-moon";

  searchIcon.style.color = "black";

  h3Tag.className += " text-black";
  h3Tag.forEach((h3) => {
    h3.style.color = "black";
  });

  changeBg1.forEach((backgroundColor) => {
    backgroundColor.style.backgroundColor = "white";
  });
  changeBg2.forEach((backgroundColor) => {
    backgroundColor.style.backgroundColor = "#f7f7f7";
  });

  changeP.forEach((p) => {
    p.style.color = "rgba(22, 28, 45, 0.7)";
  });

  changeA.forEach((a) => {
    a.style.color = "#232121";
  });

  box.forEach((input) => {
    input.style.backgroundColor = "white";
    input.style.color = "rgba(22, 28, 45, 0.7)";
  });
};
