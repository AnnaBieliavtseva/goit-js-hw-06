const formRef = document.querySelector(".login-form");
const emailRef = document.querySelector('[type="email"]');
const passwordRef = document.querySelector('[type="password"]');

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the required fields");
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
