require("dotenv").config();
require("./config/database");

const Recipe = require("./models/recipe");

(async function () {
  await Recipe.deleteMany({});
  const recipes = await Recipe.create([
    {
        name: "Angel Food Cupcakes",
        categories: "Dessert",
        servings: "Yield: 14-16 cupcakes",
        rating: 5,
        difficulty: "Easy",
        description: "so yummy",
        prepTime: "30 minutes",
        cookTime: "20 minutes",
        totalTime: "50 min",
        source: "sallysbakingaddiction.com",
        sourceUrl: "https://sallysbakingaddiction.com/angel-food-cupcakes/",
        ingredient: "2 eggs",
        directions: "Adjust the oven rack to the lower middle position and preheat oven to 325°F (163°C). Line a 12-cup muffin pan with cupcake liners. Line a second pan with 2-4 liners – this recipe makes about 14-16 cupcakes. Set aside.",
        notes: "Make Ahead Instructions: Cupcakes can be made ahead 1 day in advance, covered, and stored at room temperature. To freeze, wrap unfrosted cupcakes individually in aluminum foil or plastic wrap, and freeze in a large container. Thaw on the counter before frosting and serving.",
    },
    {
        name: "Aptos Golden Latte",
        categories: "Hot drinks",
        servings: "Yield: ",
        rating: 5,
        difficulty: "Easy",
        // description: ,
        prepTime: "15 minutes",
        cookTime: "5 minutes",
        totalTime: "20 min",
        source: "Mom",
        sourceUrl: "https://sallysbakingaddiction.com/angel-food-cupcakes/",
        ingredient: ["12 oz oat milk (or your choice of milk)", "40 grams honey", "60 grams Tumeric"],
        directions: "Preblend spices for ease and store in air tight containe. Heat honey and milk so honey blends with the milk. Add 1½ t of latte mix and whisk to blend. Heat til desired temp",
        notes: "I halfed the pepper and it still has a kick to it. ",
    } 
  ]);

  console.log(recipes);

  process.exit();
})();
