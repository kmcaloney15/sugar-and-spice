require("dotenv").config();
require("./config/database");

const Recipe = require("./models/recipe");

(async function () {
  await Recipe.deleteMany({});
  const recipes = await Recipe.create([
    {
        name: 'Angel Food Cupcakes',
          categories: 'Dessert',
          user: 'Carol',
          servings: 'Yield: 14-16 cupcakes',
          rating: 5,
          difficulty: "Easy",
          prepTime: '30 minutes',
          cookTime: '20 minutes',
          totalTime: '50 min',
          source: 'sallysbakingaddiction.com',
          sourceUrl: 'https://sallysbakingaddiction.com/angel-food-cupcakes/',
          ingredient: ["3/4 cup (150g) granulated sugar"],
          description: 'So delicious!',
          directions: "Adjust the oven rack to the lower middle position and preheat oven to 325°F (163°C). Line a 12-cup muffin pan with cupcake liners. Line a second pan with 2-4 liners – this recipe makes about 14-16 cupcakes. Set aside.",
          notes: "Make Ahead Instructions: Cupcakes can be made ahead 1 day in advance, covered, and stored at room temperature. To freeze, wrap unfrosted cupcakes individually in aluminum foil or plastic wrap, and freeze in a large container. Thaw on the counter before frosting and serving.",
    },
    {
        name: 'Fall Harvest Salad with Apple Cider Vinaigrette',
          categories: 'Lunch',
          user: 'Johnnie',
          servings: 'Yields 6-8',
          rating: 4,
          difficulty: "Easy",
          prepTime: '15 min',
          cookTime: '15 minutes',
          totalTime: '30 min',
          source: 'withsaltandwit.com',
          sourceUrl: 'http://withsaltandwit.com/fall-harvest-salad-with-apple-cider-vinaigrette/',
          ingredient: ["1/2 cup uncooked wild rice"],
          description: 'A perfect fall salad',
          directions: "Preheat the oven to 375 degrees F. Line a large baking sheet with parchment paper or foil. Toss the butternut squash with a bit of olive oil, salt and pepper. Add to prepared baking sheet. Spread into even layer.",
          notes: "No notes at this time.",
    },
    {
      name: 'No-Knead Bread',
        categories: 'Bread',
        user: 'Katy',
        servings: 'Yield one 1 1/2-pound loaf',
        rating: 5,
        difficulty: "Easy",
        prepTime: '20 minutes',
        cookTime: '1 hour 30 minutes',
        totalTime: '2 hours',
        source: 'cooking.nytimes.com',
        sourceUrl: 'https://cooking.nytimes.com/recipes/11376-no-knead-bread',
        ingredient: ["3 cups all-purpose or bread flour, more for dusting"],
        description: 'The easiest bread to make',
        directions: "In a large bowl combine flour, yeast and salt. Add 1 5/8 cups water, and stir until blended; dough will be shaggy and sticky. Cover bowl with plastic wrap. Let dough rest at least 12 hours, preferably about 18, at warm room temperature, about 70 degrees.",
        notes: "Make sure you make it the night before",
  },
  {
    name: 'EASY BURRITO BOWLS',
      categories: 'Dinner',
      user: 'Katy',
      servings: 'Yield one 1 1/2-pound loaf',
      rating: 5,
      difficulty: "Easy",
      prepTime: '10 minutes',
      cookTime: '15 minutes',
      totalTime: '25 mimnutes',
      source: 'Damn Delicious',
      sourceUrl: 'https://damndelicious.net/2014/09/10/easy-burrito-bowls/',
      ingredient: ["1 cup uncooked rice, 1 cup salsa, homemade or store-bought, 3 cups chopped Romaine lettuce, 1 (15.25-ounce) can whole kernel corn, drained, 1 (15-ounce) black beans, drained and rinsed, 2 Roma tomatoes, diced, 1 avocado, halved, seeded, peeled and diced, 2 tablespoons chopped fresh cilantro leaves"],
      description: 'Weeknight dinners are easy with this easy burrito bowl',
      directions: "In a large saucepan of 1 1/2 cups water, cook rice according to package instructions; let cool and stir in salsa; set aside.",
      notes: "*2 tablespoons chipotle peppers, in adobo sauce, can be substituted for chipotle paste.",
},
{
  name: 'Focaccia Bread',
    categories: 'Bread',
    user: 'Katy',
    servings: 'Yield one 1 1/2-pound loaf',
    rating: 5,
    difficulty: "Easy",
    prepTime: '20 minutes',
    cookTime: '1 hour 30 minutes',
    totalTime: '2 hours',
    source: 'cooking.nytimes.com',
    sourceUrl: 'https://cooking.nytimes.com/recipes/11376-no-knead-bread',
    ingredient: ["3 cups all-purpose or bread flour, more for dusting"],
    description: 'The easiest bread to make',
    directions: "In a large bowl combine flour, yeast and salt. Add 1 5/8 cups water, and stir until blended; dough will be shaggy and sticky. Cover bowl with plastic wrap. Let dough rest at least 12 hours, preferably about 18, at warm room temperature, about 70 degrees.",
    notes: "Make sure you make it the night before",
},
  ]);

  console.log(recipes);

  process.exit();
})();
