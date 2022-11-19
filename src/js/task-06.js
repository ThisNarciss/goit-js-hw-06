const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
  event.preventDefault();
  if (event.currentTarget.value.length <= event.currentTarget.dataset.length) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});
