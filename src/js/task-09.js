function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChgBodyColorEl = document.querySelector("button.change-color");

const textColorValue = document.querySelector("span.color");

buttonChgBodyColorEl.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  textColorValue.textContent = getRandomHexColor();
});
