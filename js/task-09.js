function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const textChangeColor = document.querySelector(".color");
const body = document.querySelector("body");

btnChangeColor.addEventListener("click", onChangeColor);

textChangeColor.textContent = "";

function onChangeColor() {
  body.style.backgroundColor = getRandomHexColor();
  textChangeColor.textContent = `${getRandomHexColor()}`;
}
