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
  const element = document.createElement("li");
  element.textContent = ingredient;
  list.append(element);
  element.classList.add("item")
}
console.log(list)