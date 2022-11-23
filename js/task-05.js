const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  if (event.currentTarget.value.trim() === '') {
    spanEl.textContent = 'Anonymous';
  } else {
    spanEl.textContent = event.currentTarget.value.trim();
  }
});
