const savedRecipeURL = localStorage.getItem('savedRecipeURL');
const recipeImageElement = document.getElementById("recipeImage");
const recipeTitleElement = document.getElementById("recipeLabel");
const recipeIngredientsElement = document.getElementById("recipeIngredients");
const recipeIngredientList = document.getElementById("ingredientList")
const calorieSection = document.getElementById("calorieSection");
const saveButton = document.getElementById("save-btn");
const recipeDetail = document.getElementById("recipe-detail");

console.log(savedRecipeURL);

const savedRecipeURLs = object.keys(localStorage);

const recipeKeys = savedRecipeURLs.filter(key => key.startsWith("savedRecipeURL"));

recipeKeys.forEach(key => {
    const savedRecipeURL = localStorage.getItem(key);

    if(savedRecipeURL){
        fetch(savedRecipeURL)
            .then(response => response.json())
            .then(data => {

            const recipeCard = document.createElement("div");
            recipeCard.classList.add("recipe-card");

            const recipeTitle = document.createElement("h3");
            recipeTitle.textContent = data.label;

            const recipeDescription = document.createElement("p");
            recipeDescription.textContent = data.ingredientLines.join(', ');

            const recipeImage = document.createElement("img");
            recipeImage.src = data.image;

            recipeCard.appendChild(recipeImage);
            recipeCard.appendChild(recipeTitle);
            recipeCard.appendChild(recipeDescription);
            recipeResults.appendChild(recipeCard);
            });
    }
});

