const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createListItemsEl = (ingredients) => {
  const listItemEl = ingredients.map((ingredient) => {
    const ItemEl = document.createElement("li");
    ItemEl.textContent = ingredient;
    ItemEl.classList.add("item");
    return ItemEl;
  });
  return listItemEl;
};

const ingredientsList = document.querySelector("ul#ingredients");

ingredientsList.append(...createListItemsEl(ingredients));
