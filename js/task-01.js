const categoriesUl = document.getElementById("categories");
console.log(`Number of categories: ${categoriesUl.children.length}`);
const categoriesLi = document.getElementsByClassName("item");
for (const category of categoriesLi) {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
}