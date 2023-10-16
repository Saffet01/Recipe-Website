const recipeDetail = document.getElementById("recipe-detail");
const urlParams = new URLSearchParams(window.location.search);
const recipeURL = urlParams.get("param");

const recipeImageElement = document.getElementById("recipeImage");
const recipeTitleElement = document.getElementById("recipeLabel");
const recipeIngredientsElement = document.getElementById("recipeIngredients");
const recipeIngredientList = document.getElementById("ingredientList")
const calorieSection = document.getElementById("calorieSection");
const saveButton = document.getElementById("save-btn");

window. addEventListener('load', getUrlFromQueryParams);

function getUrlFromQueryParams () {
  if (window.location.href) {
    const pageUrlString = (window.location.href).toLowerCase();
    const pageUrl = new URL(pageUrlString);
    const recipeUrlDecoded = decodeURIComponent(pageUrl.searchParams.get('url'));
    fetchRecipeData(recipeUrlDecoded);
    localStorage.setItem('savedRecipeURL', recipeUrlDecoded);
    console.log(recipeUrlDecoded);
  } else {
    console.log('No url found!')
  }
};

async function fetchRecipeData(url) {
  const data = await fetch(url);
  const recipe = await data.json();
  console.log(recipe);

  recipeImageElement.src = recipe.recipe.image;
  recipeTitleElement.textContent = recipe.recipe.label;
  recipeIngredientsElement.innerHTML = `<ul>` + recipe.recipe.ingredientLines.map(ingredient => `<li>${ingredient}</li>`).join('') + `</ul>`;
  calorieSection.innerText = `Calories: ${Math.round(recipe.recipe.calories)}`;
}




