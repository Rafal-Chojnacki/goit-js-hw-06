const categoriesUl = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesUl.children.length}`);
const categoriesLi = document.querySelectorAll(".item");
for (const category of categoriesLi) {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
}