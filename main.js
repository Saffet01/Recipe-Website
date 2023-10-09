const allTab = document.getElementById('allTab');
const breakfastTab = document.getElementById('breakfastTab');
const lunchTab = document.getElementById('lunchTab');
const dinnerTab = document.getElementById('dinnerTab');

const APIUrl = (mealType) => `https://api.edamam.com/api/recipes/v2?type=public&app_id=576e3078&app_key=a1148c238c69595977a20f7cebe6c2d2&mealType=${mealType}&imageSize=REGULAR`;


function setActiveTab(tab) {
    // allTab.classList.remove('active');
    breakfastTab.classList.remove('active');
    lunchTab.classList.remove('active');
    dinnerTab.classList.remove('active');
    tab.classList.add('active');
}

breakfastTab.addEventListener('click', function() {
    setActiveTab(breakfastTab);
    loadRecipesByMealType("breakfast");
});

lunchTab.addEventListener('click', function() {
    setActiveTab(lunchTab);
    loadRecipesByMealType("Lunch");
});

dinnerTab.addEventListener('click', function() {
    setActiveTab(dinnerTab);
    loadRecipesByMealType("Snack");
});


function loadRecipesByMealType(mealType = ''){

    fetch(APIUrl(mealType))
        .then(response => response.json())
        .then(data => {

            const recipeResults = document.getElementById("recipeResults");
            recipeResults.innerHTML = "";
            console.log(data.hits[0].recipe.label);// e.g.: Easy Mango-Blackberry Smoothie Recipe

            data.hits.forEach(recipe =>{

                const recipeCard = document.createElement("a");
                recipeCard.classList.add("recipe-card");
                recipeCard.href = `/recipe.html?label=${recipe.recipe.label}`;

                const recipeTitle = document.createElement("h3");
                recipeTitle.textContent = recipe.recipe.label;

                const recipeDescription = document.createElement("p");
                recipeDescription.textContent = recipe.recipe.ingredientLines;

                const recipeImage = document.createElement("img");
                recipeImage.src = recipe.recipe.image;

                recipeCard.appendChild(recipeImage);
                recipeCard.appendChild(recipeTitle);
                recipeCard.appendChild(recipeDescription);
                recipeResults.appendChild(recipeCard);

            });

        })
        .catch(error => {
            console.error("Fetching Error!", error);
        });
};

window.addEventListener("load", loadRecipesByMealType("breakfast"));