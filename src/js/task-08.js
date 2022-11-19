const formRef = document.querySelector("form.login-form");

formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    alert("Для відправки форми мають бути заповнені всі поля!!!");
  }
  const userLoginData = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };
  console.log(userLoginData);
  event.currentTarget.reset();
});
