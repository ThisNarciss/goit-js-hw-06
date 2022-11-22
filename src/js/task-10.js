function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('button[data-create]');
console.log(createBtn);
const destroyBtn = document.querySelector('button[data-destroy]');
console.log(destroyBtn);
const boxesRef = document.querySelector('div#boxes');

// Solution #1
const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    const newEL = document.createElement('div');
    newEL.style.width = `${30 + i * 10}px`;
    newEL.style.height = `${30 + i * 10}px`;
    newEL.style.backgroundColor = getRandomHexColor();
    boxesRef.append(newEL);
  }
};

// Solution #2
// const createBoxes = amount => {
//   const arrayEl = [];

//   for (let i = 0; i < amount; i += 1) {
//     let newEL = `<div style="width: ${30 + i * 10}px; height: ${
//       30 + i * 10
//     }px ; background-color: ${getRandomHexColor()}"></div>`;
//     arrayEl.push(newEL);
//   }

//   const arrayString = arrayEl.join('');
//   return boxesRef.insertAdjacentHTML('afterbegin', arrayString);
// };

createBtn.addEventListener('click', () => {
  const inputEl = document.querySelector('#controls input').valueAsNumber;
  createBoxes(inputEl);
});

// createBtn.addEventListener("click", createBoxes(5));

const destroyBoxes = () => {
  destroyBtn.addEventListener('click', () => {
    boxesRef.innerHTML = '';
  });
};
destroyBoxes();
