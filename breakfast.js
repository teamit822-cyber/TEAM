const btn = document.querySelector('.mode_btn');
const dark = document.getElementById('dark_mode_button');
const light = document.getElementById('light_mode_button');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark_mode');
    if (dark) dark.style.display = "none";
    if (light) light.style.display = "block";
} else if (localStorage.getItem('theme') === 'light') {
    if (light) light.style.display = "none";
    if (dark) dark.style.display = "block";
}

if (btn) {
    btn.onclick = function() {
        body.classList.toggle('dark_mode');
        
        if (body.classList.contains('dark_mode')) {
            localStorage.setItem('theme', 'dark');
            if (dark) dark.style.display = "none";
            if (light) light.style.display = "block";
        } else {
            localStorage.setItem('theme', 'light');
            if (light) light.style.display = "none";
            if (dark) dark.style.display = "block";
        }
    }
}

const recipesData = {
    "omelette": {
        title: "Spinach Omelette",
        ingredients: ["3 Large eggs", "1 cup Fresh spinach", "50g Feta cheese", "1 tbsp Olive oil", "Salt and black pepper"],
        instructions: ["Whisk the eggs in a bowl with salt and pepper.", "Heat oil in a pan and sauté spinach until wilted.", "Pour the eggs over the spinach and cook on medium heat.", "Add cheese, fold the omelette, and serve hot."]
    },
    "toast": {
        title: "Savory Egg Toast",
        ingredients: ["2 Slices of whole-grain bread", "2 Eggs", "1/2 Avocado, mashed", "Red pepper flakes", "Fresh thyme"],
        instructions: ["Toast the bread slices until golden brown.", "Spread mashed avocado evenly on the toast.", "Fry the eggs (sunny side up or over easy).", "Place eggs on the toast and sprinkle with chili flakes and thyme."]
    },
    "manakish": {
        title: "Cheese Manakish",
        ingredients: ["Pizza dough", "2 cups Akkawi or Mozzarella cheese", "1 tbsp Olive oil", "Dried parsley for garnish"],
        instructions: ["Flatten the dough into circles.", "Spread the cheese mixture generously on top.", "Bake in a preheated oven at 200°C until the crust is golden.", "Drizzle with olive oil and serve."]
    },
    "fava_beans": {
        title: "Spiced Fava Beans (Foul)",
        ingredients: ["1 Can fava beans", "2 Cloves garlic, crushed", "3 tbsp Olive oil", "1 tsp Cumin", "1 Chopped tomato", "Lemon juice"],
        instructions: ["Heat the beans in a pot over medium heat.", "Mash the beans slightly with a fork.", "Add garlic, cumin, lemon juice, and olive oil.", "Top with chopped tomatoes and enjoy with warm pita bread."]
    },
    "french_toast": {
        title: "Classic French Toast",
        ingredients: ["4 Slices of brioche bread", "2 Eggs", "1/2 cup Milk", "1 tsp Cinnamon", "Maple syrup and berries"],
        instructions: ["Whisk eggs, milk, and cinnamon in a shallow bowl.", "Dip bread slices in the mixture until soaked.", "Cook on a buttered griddle until golden on both sides.", "Serve with syrup and fresh berries."]
    },
    "beetroot_salad": {
        title: "Beetroot & Walnut Salad",
        ingredients: ["3 Boiled beetroots, cubed", "1/2 cup Walnuts", "Fresh arugula", "Feta cheese", "Balsamic dressing"],
        instructions: ["Place arugula in a large bowl.", "Add the beetroot cubes and walnuts.", "Crumble feta cheese over the top.", "Drizzle with balsamic dressing and toss gently."]
    },
    "shakshuka": {
        title: "Traditional Shakshuka",
        ingredients: ["4 Eggs", "2 cups Tomato sauce", "1 Onion, diced", "1 Bell pepper, sliced", "1 tsp Paprika", "Fresh cilantro"],
        instructions: ["Sauté onions and peppers until soft.", "Add tomato sauce and spices; simmer for 5 minutes.", "Make small wells in the sauce and crack eggs into them.", "Cover and cook until egg whites are set but yolks are runny."]
    },
    "cheese_zaatar": {
        title: "Cheese and Za'atar Pie",
        ingredients: ["Puff pastry or dough", "1/2 cup Za'atar mix", "1/4 cup Olive oil", "1 cup White cheese"],
        instructions: ["Mix za'atar with olive oil.", "Spread the za'atar mix on half of the dough and cheese on the other.", "Bake until the edges are crispy and golden.", "Serve with hot tea."]
    },
    "sourdough": {
        title: "Homemade Sourdough Bread",
        ingredients: ["500g Flour", "350ml Water", "100g Sourdough starter", "10g Salt"],
        instructions: ["Mix flour, water, and starter; let it rest.", "Fold in the salt and perform stretch-and-folds.", "Let it ferment for 6-8 hours.", "Score the top and bake in a Dutch oven at 230°C."]
    }
};

function openModal(recipeId) {
    const modal = document.getElementById('recipeModal');
    const data = recipesData[recipeId];

    if (!data) {
        console.error("Recipe not found:", recipeId);
        return;
    }
    
    document.getElementById('modalTitle').innerText = data.title;
    
    const ingredientsList = document.getElementById('modalIngredients');
    ingredientsList.innerHTML = ""; 
    data.ingredients.forEach(function(item) {
        const li = document.createElement('li');
        li.innerText = item;
        li.style.display = "list-item";
        li.style.listStyleType = "disc";
        li.style.marginLeft = "30px";
        li.style.marginBottom = "10px";
        
        ingredientsList.appendChild(li);
    });

    const instructionsList = document.getElementById('modalInstructions');
    instructionsList.innerHTML = ""; 
    data.instructions.forEach(function(step) {
        const li = document.createElement('li');
        li.innerText = step;
        li.style.display = "list-item";
        li.style.listStyleType = "decimal";
        li.style.marginLeft = "30px";
        li.style.marginBottom = "10px";
        
        instructionsList.appendChild(li);
    });
    
    modal.style.display = "flex"; 
    setTimeout(function() {
        modal.classList.add('show');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('recipeModal');
    modal.classList.remove('show');
    setTimeout(function() {
        modal.style.display = "none";
    }, 400);  
}