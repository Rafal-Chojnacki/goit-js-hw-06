const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
for (const ingredient of ingredients) {
  const firstItem = document.createElement("li");
  firstItem.textContent = ingredient;
  list.append(firstItem);
}