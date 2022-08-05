const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = document.querySelector("#value");

counterValue.value = 0;

decrementBtn.addEventListener("click", handlerDecrementBtnClick);
incrementBtn.addEventListener("click", handlerIncrementBtnClick);

function handlerDecrementBtnClick() {
  counterValue.textContent = counterValue.value;
  counterValue.value -= 1;
}

function handlerIncrementBtnClick() {
  counterValue.textContent = counterValue.value;
  counterValue.value += 1;
}
