const listOfItems = document.querySelectorAll("ul#categories li.item");
const numberOfCategories = listOfItems.length;
console.log(`Number of categories ${numberOfCategories}`)

listOfItems.forEach((item) => {
    const h2Text = item.querySelector('h2').innerText;
    const numberOfElements = item.querySelectorAll('li').length;
    console.log(`Category: ${h2Text}`);
    console.log(`Elements: ${numberOfElements}`);
});