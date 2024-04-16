function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanColor = document.querySelector(".color");
// console.log(buttonChangeColor);
// console.log(body);
// console.log(spanColor);

buttonChangeColor.addEventListener("click", onClickMe);
function onClickMe() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}
