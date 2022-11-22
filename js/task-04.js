let counterValue = 0;

const decButton = document.querySelector('button[data-action="decrement"]');
const incButton = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('span#value');

const clickBtnDec = decButton.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

const clickBtnInc = incButton.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
