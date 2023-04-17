const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulList = document.querySelector('#ingredients')
const elements = [];
for (let ingredient of ingredients ) {
  const element = document.createElement('li');
  element.textContent = ingredient
  elements.push(element)
}
ulList.append(...elements)