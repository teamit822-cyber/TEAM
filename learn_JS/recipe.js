const recipes = [
    {
        title: "Chocolate Cake",
        ingredients: `For the Cake:
- 2 cups All-purpose flour
- 2 cups Granulated sugar
- ¾ cup Unsweetened cocoa powder
- 2 tsp Baking soda & 1 tsp Baking powder
- 1 tsp Salt
- 1 cup Buttermilk (room temp)
- ½ cup Vegetable oil
- 2 Large eggs
- 2 tsp Vanilla extract
- 1 cup Hot coffee

For the Frosting & Ganache:
- 1 ½ cups Unsalted butter (softened)
- 1 cup Cocoa powder
- 5 cups Powdered sugar
- ½ cup Whole milk
- 200g Dark chocolate (ganache)
- 1 cup Heavy cream (ganache)`,
        instructions: `1. Prepare the Batter:
Preheat oven to 180°C (350°F). Grease three 8-inch cake pans.
Mix all dry ingredients in a large bowl.
Add eggs, buttermilk, oil, and vanilla. Mix well.
Stir in hot coffee (batter will be thin).
2. Bake:
Pour batter evenly into pans.
Bake for 30-35 minutes. Test with toothpick.
Cool completely before frosting.
3. Make Frosting:
Whip butter until creamy. Add cocoa and powdered sugar alternately with milk until fudge-like consistency.
4. Assembly:
Layer cake with frosting between layers.
Make ganache: Heat cream, pour over chocolate, stir until smooth.
Pour ganache over cake so it drips down sides.`
    },
    {
        title: "Red Velvet Strawberry Cheesecake",
        ingredients: `Base: 1 ½ cups chocolate cookie crumbs + 4 tbsp melted butter.
Red Velvet Layer: 1 cup flour, ½ cup sugar, 1 tbsp cocoa powder, ½ tsp baking soda, ½ cup buttermilk, 1 egg, red food coloring.
Cheesecake Layer: 16 oz cream cheese, ½ cup sugar, 2 eggs, 1 tsp vanilla, ¼ cup sour cream.
Topping: Strawberry glaze/jam and fresh strawberries`,
        instructions: `Bake at 160°C for 45-50 minutes. Chill in fridge for at least 4 hours.
Spread strawberry glaze on top and decorate with fresh berries.`
    },
    {
        title: "Chocolate Cookies",
        ingredients: `Dry: 1 cup all-purpose flour, ⅔ cup cocoa powder, 1 tsp baking soda, ½ tsp salt.
Wet: ½ cup softened butter, ¾ cup brown sugar, ¼ cup white sugar, 1 egg, 1 tsp vanilla extract.
Mix-ins: 1 ½ cups semi-sweet chocolate chips.`,
        instructions: `Cream butter and sugars until smooth. Add egg and vanilla.
Fold in dry ingredients until soft dough forms. Stir in 1 cup chocolate chips.
Roll into balls on baking sheet. Press remaining chips on top.
Bake at 175°C for 10 minutes. Cool on tray for 5 minutes.`
    },
    {
        title: "French Macarons",
        ingredients: `Cookies: 1 ¾ cups powdered sugar, 1 cup almond flour, 3 egg whites (room temp), ¼ cup granulated sugar, ¼ tsp cream of tartar.
Fillings: Chocolate ganache, vanilla buttercream, or fruit jam.`,
        instructions: `Sift almond flour and powdered sugar.
Whip egg whites with cream of tartar and sugar until stiff peaks form.
Fold flour mixture into meringue gently until lava-like consistency.
Pipe 1-inch circles on parchment. Let rest 30-60 minutes until dry skin forms.
Bake at 150°C for 12-14 minutes. Cool completely.
Fill and refrigerate for 24 hours to mature.`
    },
    {
        title: "Mermaid Fantasy Cupcakes",
        ingredients: `Cupcake: 1 ½ cups flour, 1 cup sugar, 1 ½ tsp baking powder, ½ cup butter, 1 egg, ½ cup milk, vanilla, pink/teal food coloring.
Frosting: 1 cup butter, 3 cups powdered sugar, 2 tbsp cream, teal coloring.
Decor: Mermaid tail chocolates, sprinkles, edible seashells.`,
        instructions: `Mix batter and divide into two bowls. Color one pink, one teal.
Swirl together in cupcake liners. Bake at 175°C for 18-20 minutes.
Make frosting and pipe high swirls. Roll edges in sprinkles.
Insert chocolate mermaid tail and add seashells.`
    },
    {
        title: "Rainbow Fruit Platter",
        ingredients: `Berries: Strawberries, blueberries, cherries.
Tropical: Mango, passionfruit, figs.
Melons: Watermelon, cantaloupe, honeydew.
Accents: Golden kiwi, lychees, dark grapes.`,
        instructions: `Use melon baller for melons. Carve kiwis in zig-zag pattern.
Place melon bowls in center of large board.
Group larger fruits in sections around bowls.
Fill gaps with smaller fruits like figs and lychees.`
    },
    {
        title: "Cookie Sandwiches",
        ingredients: `Cookies: Chocolate chip cookies.
Filling: Large marshmallows, milk chocolate bars.`,
        instructions: `Place chocolate on bottom of one cookie.
Toast marshmallow until golden and gooey.
Place hot marshmallow on chocolate.
Top with second cookie and press gently.`
    },
    {
        title: "Pistachio Baklava",
        ingredients: `Pastry: Phyllo dough, 1 cup melted butter.
Filling: 2 cups chopped pistachios, 1 tsp cinnamon.
Syrup: 1 cup sugar, ½ cup water, 1 tbsp lemon juice, 1 tbsp honey.`,
        instructions: `Make syrup: Boil sugar, water, lemon juice. Add honey, cool completely.
Layer phyllo sheets, brushing each with butter. Spread pistachios.
Top with remaining phyllo. Cut into diamonds.
Bake at 165°C for 45-50 minutes.
Pour cold syrup over hot baklava. Rest 4 hours.`
    },
    {
        title: "Chocolate Éclairs",
        ingredients: `Choux: 1 cup water, ½ cup butter, 1 cup flour, 4 eggs.
Cream: 2 cups milk, 4 egg yolks, ½ cup sugar, ¼ cup cornstarch, 2 tsp vanilla.
Glaze: 4 oz dark chocolate, ½ cup heavy cream.`,
        instructions: `Make choux pastry and pipe logs. Bake at 200°C then 180°C.
Make pastry cream and chill.
Fill eclairs with cream.
Make glaze: Melt chocolate with hot cream. Dip tops.`
    },
    {
        title: "Individual Berry Cheesecake",
        ingredients: `Crust: 1 cup graham cracker crumbs, 2 tbsp sugar, 3 tbsp melted butter.
Filling: 8 oz cream cheese, ⅓ cup sugar, 1 egg, ½ tsp vanilla, 2 tbsp sour cream.
Topping: Fresh berries, berry coulis.`,
        instructions: `Mix crust and press into mini pans.
Beat cream cheese and sugar. Add egg, vanilla, sour cream.
Bake at 160°C for 20-25 minutes.
Chill 3 hours. Top with berry sauce and fresh berries.`
    },
    {
        title: "Mini Pineapple Upside-Down Cakes",
        ingredients: `Cake: 1 ½ cups flour, 1 cup sugar, ½ cup butter, 1 egg, ½ cup pineapple juice, 1 tsp baking powder.
Base: ¼ cup butter, ½ cup brown sugar, pineapple slices.
Topping: Whipped cream, fresh pineapple.`,
        instructions: `Put butter, brown sugar, and pineapple in mini molds.
Make batter and pour over pineapple.
Bake at 175°C for 20-25 minutes.
Flip upside-down. Top with whipped cream and fresh pineapple.`
    },
    {
        title: "Classic Tiramisu",
        ingredients: `Cream: 16 oz Mascarpone, 1 cup heavy cream, ½ cup sugar, 3 egg yolks, 1 tsp vanilla.
Soak: 1 ½ cups espresso (cooled), 2 tbsp cocoa powder.
Base: Ladyfingers.`,
        instructions: `Make mascarpone cream mixture.
Dip ladyfingers quickly in espresso.
Layer ladyfingers and cream in dish.
Repeat layers. Refrigerate 6+ hours.
Dust with cocoa powder before serving.`
    },
    {
        title: "Cinnamon Rolls",
        ingredients: `Dough: 4 cups flour, ⅓ cup butter, 1 cup warm milk, 2 ¼ tsp yeast, ½ cup sugar, 1 tsp salt, 2 eggs.
Filling: 1 cup brown sugar, 2 ½ tbsp cinnamon, ⅓ cup butter.
Frosting: 4 oz cream cheese, ¼ cup butter, 1 ½ cups powdered sugar, 1 tsp vanilla.`,
        instructions: `Make dough and let rise 1 hour.
Roll out, spread butter and cinnamon-sugar.
Roll into log, cut into 12 rolls. Rise 30 minutes.
Bake at 175°C for 20-25 minutes.
Top with cream cheese frosting while warm.`
    },
    {
        title: "Brioche French Toast",
        ingredients: `French Toast: 3 thick brioche slices, 2 eggs, ½ cup milk, 1 tsp cinnamon, 1 tsp vanilla, 2 tbsp butter.
Compote: 1 cup blueberries, 2 tbsp sugar, 1 tsp lemon juice.
Topping: Whipped cream, powdered sugar.`,
        instructions: `Make compote: Simmer blueberries, sugar, lemon juice 5-8 minutes.
Whisk eggs, milk, cinnamon, vanilla. Dip brioche.
Fry in butter until golden on both sides.
Top with compote, whipped cream, and powdered sugar.`
    },
    {
        title: "Lemon Poppy Seed Cheesecake Bites",
        ingredients: `Crust: 1 cup graham cracker crumbs, 2 tbsp sugar, 3 tbsp butter.
Cheesecake: 8 oz cream cheese, ⅓ cup sugar, 1 egg, ½ tsp vanilla, 2 tbsp sour cream.
Lemon Curd: ½ cup lemon juice, 1 tbsp zest, 3 egg yolks, ½ cup sugar, 4 tbsp butter.
Garnish: Whipped cream, poppy seeds, lemon slices.`,
        instructions: `Make crust and press into mini molds.
Make cheesecake layer and bake at 160°C for 15-18 minutes.
Make lemon curd and cool.
Spread lemon curd over cheesecake.
Top with whipped cream, poppy seeds, lemon slice.`
    },
    {
        title: "Pistachio Tiramisu",
        ingredients: `Cream: 1 cup Mascarpone, 1 cup heavy cream, ½ cup pistachio paste, ½ cup powdered sugar, 1 tsp vanilla.
Soak: 1 ½ cups coffee (cooled).
Base: Ladyfingers.
Topping: Crushed pistachios, cocoa powder.`,
        instructions: `Make pistachio mascarpone cream.
Dip ladyfingers in coffee.
Layer ladyfingers and cream.
Refrigerate 6+ hours.
Top with crushed pistachios and cocoa powder.`
    },
];

function showRecipe(index) {
    const selected = recipes[index];
    if (selected) {
        document.getElementById('modalTitle').innerHTML = selected.title;
        document.getElementById('modalIngredients').innerHTML = selected.ingredients.replace(/\n/g, '<br>');
        document.getElementById('modalInstructions').innerHTML = selected.instructions.replace(/\n/g, '<br>');
        document.getElementById('recipeModal').style.display = "block";
    }
}

function closeModal() {
    document.getElementById('recipeModal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('recipeModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const btn = document.querySelector('.mode_btn');
const dark = document.getElementById('dark_mode_button');
const light = document.getElementById('light_mode_button');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark_mode');
    if (dark) dark.style.display = "none";
    if (light) light.style.display = "block";
}
if (localStorage.getItem('theme') === 'light') {
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


function setupScrollButtons() {
    const recipeContainer = document.getElementById('recipeContainer');
    const scrollLeftBtn = document.getElementById('scrollLeftBtn');
    const scrollRightBtn = document.getElementById('scrollRightBtn');
    if (recipeContainer && scrollLeftBtn && scrollRightBtn) {
        scrollLeftBtn.addEventListener('click', () => {
            recipeContainer.scrollBy({ left: -300, behavior: 'smooth' });
        });
        scrollRightBtn.addEventListener('click', () => {
            recipeContainer.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }
}


function setupCardClicks() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = card.getAttribute('data-index');
            if (index !== null) {
                showRecipe(parseInt(index));
            }
        });
    });
}


document.addEventListener('DOMContentLoaded', function() {
    setupCardClicks();
    setupScrollButtons();
});