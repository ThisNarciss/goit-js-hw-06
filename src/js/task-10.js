function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('button[data-create]');
console.log(createBtn);
const destroyBtn = document.querySelector('button[data-destroy]');
console.log(destroyBtn);
const boxesRef = document.querySelector('div#boxes');

// const createBoxes = (amount) => {
//   for (let i = 0; i < amount - 1; i += 1) {
//     const newEL = document.createElement("div");
//     newEL.style.width = `${30 + i * 10}px`;
//     newEL.style.height = `${30 + i * 10}px`;
//     newEL.style.backgroundColor = getRandomHexColor();
//     console.log(newEL);
//     boxesRef.append(newEL);
//     console.log(boxesRef);
//   }
// };

const createBoxes = () => {
  createBtn.addEventListener('click', () => {
    const arrayEl = [];
    let inputEL = document.querySelector('#controls input').valueAsNumber;
    console.log(inputEL);
    for (let i = 0; i < inputEL; i += 1) {
      let newEL = `<div style="width: ${30 + i * 10}px; height: ${
        30 + i * 10
      }px ; background-color: ${getRandomHexColor()}"></div>`;
      arrayEl.push(newEL);
      console.log(arrayEl);
    }
    const arrayString = arrayEl.join('');
    return boxesRef.insertAdjacentHTML('afterbegin', arrayString);
  });
};

createBoxes();

// createBtn.addEventListener("click", createBoxes(5));

const destroyBoxes = () => {
  destroyBtn.addEventListener('click', () => {
    boxesRef.innerHTML = '';
  });
};
destroyBoxes();
