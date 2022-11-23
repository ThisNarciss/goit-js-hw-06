const categoriesList = document.querySelector("ul#categories");
const listEl = categoriesList.querySelectorAll("li.item");
console.log("Number of categories:", listEl.length);

listEl.forEach((element) => {
  const itemTitleEl = element.querySelector("h2");
  const itemListEl = element.querySelectorAll("li");
  console.log("Category:", itemTitleEl.textContent);
  console.log("Elements:", itemListEl.length);
});
