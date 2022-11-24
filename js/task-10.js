function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('div#boxes');

// Solution #1
// const createBoxes = amount => {
//   const fragment = document.createDocumentFragment();
//   for (let i = 0; i < amount; i += 1) {
//     const newEL = document.createElement('div');
//     newEL.style.width = `${30 + i * 10}px`;
//     newEL.style.height = `${30 + i * 10}px`;
//     newEL.style.backgroundColor = getRandomHexColor();
//     newEL.classList.add('box-style');
//     fragment.append(newEL);
//   }
//   boxesRef.append(fragment);
// };

// Solution #2
// const createBoxes = amount => {
//   const arrayEl = [];

//   for (let i = 0; i < amount; i += 1) {
//     const newEL = `<div style="width: ${30 + i * 10}px; height: ${
//       30 + i * 10
//     }px ; background-color: ${getRandomHexColor()}"></div>`;
//     arrayEl.push(newEL);
//   }

//   const stringEl = arrayEl.join('');
//   return boxesRef.insertAdjacentHTML('afterbegin', stringEl);
// };

// Solution 3

// const boxTemplate = (i = 0) => {
//   return `<div style="width: ${30 + i * 10}px; height: ${
//     30 + i * 10
//   }px; background-color: ${getRandomHexColor()};"></div>`;
// };
// const createBoxes = amount => {
//   const result = [...Array(amount).keys()]
//     .reduce((previous, current) => {
//       previous.push(boxTemplate(current));
//       return previous;
//     }, [])
//     .join('');

//   boxesRef.insertAdjacentHTML('afterbegin', result);
// };

// Solution 3 Short
const createBoxes = amount => {
  const result = [...Array(amount).keys()]
    .reduce((previous, current) => {
      previous.push(
        `<div style="width: ${30 + current * 10}px; height: ${
          30 + current * 10
        }px; background-color: ${getRandomHexColor()};"></div>`
      );
      return previous;
    }, [])
    .join('');

  boxesRef.insertAdjacentHTML('afterbegin', result);
};

createBtn.addEventListener('click', () => {
  const inputEl = document.querySelector('#controls input');
  console.dir(inputEl);
  createBoxes(inputEl.valueAsNumber);
});

const destroyBoxes = () => {
  destroyBtn.addEventListener('click', () => {
    boxesRef.innerHTML = '';
  });
};
destroyBoxes();
