const inputRef = document.querySelector("input#font-size-control");
const spanRef = document.querySelector("span#text");

inputRef.addEventListener("input", (event) => {
  spanRef.style.fontSize = `${event.currentTarget.value}px`;
});
