const allTab = document.getElementById('allTab');
const breakfastTab = document.getElementById('breakfastTab');
const lunchTab = document.getElementById('lunchTab');
const dinnerTab = document.getElementById('dinnerTab');

const APIUrl = (mealType) => `https://api.edamam.com/api/recipes/v2?type=public&app_id=576e3078&app_key=a1148c238c69595977a20f7cebe6c2d2&mealType=${mealType}&imageSize=REGULAR`;


function setActiveTab(tab) {
    allTab.classList.remove('active');
    breakfastTab.classList.remove('active');
    lunchTab.classList.remove('active');
    dinnerTab.classList.remove('active');
    tab.classList.add('active');
}

allTab.addEventListener('click', function() {
    setActiveTab(allTab);
    
    loadRecipesByMealType("breakfast");
});

breakfastTab.addEventListener('click', function() {
    setActiveTab(breakfastTab);
    loadRecipesByMealType("breakfast");
});

lunchTab.addEventListener('click', function() {
    setActiveTab(lunchTab);
    loadRecipesByMealType("lunch");
});

dinnerTab.addEventListener('click', function() {
    setActiveTab(dinnerTab);
    loadRecipesByMealType("dinner");
});


function loadRecipesByMealType(mealType = ''){

    fetch(APIUrl)
        .then(response => response.json())
        .then(data => {

            const recipeResults = document.getElementById("recipeResults");
            recipeResults.innerHTML = "";

            data.recipes.forEach(recipe =>{

                const recipeCard = document.createElement("div");
                recipeCard.classList.add("recipe-card");

                const recipeTitle = document.createElement("h3");
                recipeTitle.textContent = recipe.label;

                const recipeDescription = document.createElement("p");
                recipeDescription.textContent = recipe.ingredientLines;

                const recipeImage = document.createElement("img");
                recipeImage = recipe.image;

                recipeCard.appendChild(recipeImage);
                recipeCard.appendChild(recipeTitle);
                recipeCard.appendChild(recipeDescription);

                recipeResults.appendChild(recipeCard);

            });

        })
        .catch(error => {
            console.error("Fetching Error!", error);
        });
}