const recipeDetail = document.getElementById("recipe-detail");
const urlParams = new URLSearchParams(window.location.search);
const recipeURL = urlParams.get("param");
const recipeImageElement = document.getElementById("recipeImage");
const recipeTitleElement = document.getElementById("recipeLabel");
const recipeIngredientsElement = document.getElementById("recipeIngredients");
const calorieSection = document.getElementById("calorieSection");
const saveButton = document.getElementById("save-btn");

window. addEventListener('load', getUrlFromQueryParams);

function getUrlFromQueryParams () {
  if (window.location.href) {
    const pageUrlString = (window.location.href).toLowerCase();
    const pageUrl = new URL(pageUrlString);
    const recipeUrlDecoded = decodeURIComponent(pageUrl.searchParams.get('url'));
    fetchRecipeData(recipeUrlDecoded);
    //localStorage.setItem('savedRecipeURL', recipeUrlDecoded);
    console.log(recipeUrlDecoded);
    return recipeUrlDecoded;
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


function saveThisRecipeDetails(){
  const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
  const currentRecipe = {
    label: recipeTitleElement.textContent,
    image: recipeImageElement.src,
    ingredients: recipeIngredientsElement.innerHTML,
    calorie: calorieSection.innerText
  };

  const isAlreadySavedFlag = savedRecipes.some(savedRecipe => savedRecipe.label === currentRecipe.label);

  if(!isAlreadySavedFlag) {
    savedRecipes.push(currentRecipe);
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
  }

  console.log(localStorage.getItem("savedRecipes"));
};

saveButton.addEventListener("click", saveThisRecipeDetails);


