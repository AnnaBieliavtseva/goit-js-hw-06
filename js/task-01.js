const categories = document.querySelector("#categories");
console.log("Number of categories:", categories.children.length);

const categoriesItems = categories.children;
for (const category of categoriesItems) {
  const nameOfCategory = category.firstElementChild.textContent;
  console.log("Category:", nameOfCategory);
  const numOfCategoryEl = category.lastElementChild.children.length;
  console.log("Elements:", numOfCategoryEl);
}
