const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (+inputRef.value.length === +inputRef.dataset.length) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
