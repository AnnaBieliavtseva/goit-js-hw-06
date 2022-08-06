const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const span = document.querySelector("#value");
let counterValue = 0;

decrementBtn.addEventListener("click", handlerDecrementBtnClick);
incrementBtn.addEventListener("click", handlerIncrementBtnClick);

function handlerDecrementBtnClick() {
  counterValue -= 1;
  span.textContent = counterValue;
}

function handlerIncrementBtnClick() {
  counterValue += 1;
  span.textContent = counterValue;
}
