const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const categoriesList = document.querySelector("ul#ingredients");

for (const ingredient of ingredients) {
  const ingredientName = document.createElement("li");
  ingredientName.textContent = ingredient;
  ingredientName.classList.add("item");

  categoriesList.append(ingredientName);
}
