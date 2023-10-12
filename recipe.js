const recipeDetail = document.getElementById("recipe-detail");
const urlParams = new URLSearchParams(window.location.search);
const recipeURL = urlParams.get("param");


window. addEventListener('load', getUrlFromQueryParams);

function getUrlFromQueryParams () {
  if (window.location.href) {
    const pageUrlString = (window.location.href).toLowerCase();
    const pageUrl = new URL(pageUrlString);
    const recipeUrlDecoded = decodeURIComponent(pageUrl.searchParams.get('url'));
    fetchRecipeData(recipeUrlDecoded)
  } else {
    console.log('No url found!')
  }
};

async function fetchRecipeData(url) {
  const data = await fetch(url);
  const recipe = await data.json();
  console.log(recipe);
}





const recipeImageElement = document.getElementById("recipeImage");
const recipeTitleElement = document.getElementById("recipeLabel");
const recipeIngredientsElement = document.getElementById("recipeIngredients");


