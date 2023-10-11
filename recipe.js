const recipeDetail = document.getElementById("recipe-detail");
const urlParams = new URLSearchParams(window.location.search);
const recipeURL = urlParams.get("param");

const recipeImageElement = document.getElementById("recipeImage");
const recipeTitleElement = document.getElementById("recipeLabel");
const recipeIngredientsElement = document.getElementById("recipeIngredients");

fetch(recipeURL)
    .then(response => response.json())
    .then(data => {

        data.hits.forEach(recipe => {

            recipeImageElement.src = recipe.recipe.image;

            recipeTitleElement.textContent = recipe.recipe.label;

        })

    })
