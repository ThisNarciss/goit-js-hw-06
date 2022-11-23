const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createListEl = (ingredients) => {
  const listEl = ingredients.map((ingredient) => {
    const element = document.createElement("li");
    element.textContent = ingredient;
    element.classList.add("item");
    return element;
  });
  return listEl;
};

const ingredientsList = document.querySelector("ul#ingredients");

ingredientsList.append(...createListEl(ingredients));
