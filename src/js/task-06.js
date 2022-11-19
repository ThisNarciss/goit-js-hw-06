const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
  event.preventDefault();
  if (event.currentTarget.value.length <= event.currentTarget.dataset.length) {
    textInput.classList.add("valid");
  } else {
    textInput.classList.add("invalid");
  }
});
