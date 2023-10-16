function getSavedRecipes(){
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    return savedRecipes;
};


function displaySavedRecipes(){
    const savedRecipes = getSavedRecipes();
    const recipeResults = document.getElementById("recipeResults");

    if(savedRecipes.lenght === 0 ){
        recipeResults.innerText = "<p>No saved recipes found.</p>"
    }
    else{
        recipeResults.innerHTML = "";

        savedRecipes.forEach(savedRecipe => {
            const recipeCard = document.createElement("div");
            recipeCard.classList.add("recipe-card");

            const recipeTitle = document.createElement("h3");
            recipeTitle.textContent = savedRecipe.label;

            const recipeImage = document.createElement("img");
            recipeImage.src = savedRecipe.image;

            const recipeCalorie = document.createElement("h5");
            recipeCalorie.innerText = savedRecipe.calorie;

            recipeCard.appendChild(recipeTitle);
            recipeCard.appendChild(recipeImage);
            recipeCard.appendChild(recipeCalorie);
            recipeResults.appendChild(recipeCard);
        });
    }
}

window.addEventListener("load", displaySavedRecipes);