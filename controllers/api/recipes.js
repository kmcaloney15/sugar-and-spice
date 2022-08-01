const Recipe = require('../../models/recipe');
// const Category = require("../../models/category");


module.exports = {
  index,
  create,
  // findAllRecipe,
  deleteRecipe,
  editRecipe,
  show
};

// Sorting all the todos by catetory. Might want to change this later -K
async function index(req, res) {
  // console.log('is the index working?')
  try {
    const recipeList = await Recipe.find({});
  
    res.json(recipeList);
  } catch {
    res.status(400).json('Bad Serverside')
  }
}


// create new recipes
async function create(req, res) {
  // console.log("controller create function ran")
  // console.log(req.body) // this is the body of the request
  try {
    // console.log('create recipe controller is working')
    const newRecipe = await Recipe.create(req.body);
    // console.log(`this is the new recipe ${newRecipe}`)
    res.json(newRecipe);

  } catch (e) {
    res.status(400).json(e)
  }
}

// to delete a todo
async function deleteRecipe(req, res) {
  // console.log(req.body)
  // console.log("controller delete ran")

  try {
    console.log(req.params.id)
    const one = await Recipe.findByIdAndDelete(req.params.id)
  } catch (e) {
    res.status(400).json(e);
  }
}

// to edit a recipe
async function editRecipe(req, res) {
  const recipeList = await Recipe.findByIdAndUpdate(
    {_id:req.params.id},
    { 
      name: req.body.name,
      categories: req.body.categories,
      servings: req.body.servings,
      rating: req.body.rating,
      difficulty: req.body.difficulty,
      prepTime: req.body.prepTime,
      cookTime: req.body.cookTime,
      totalTime: req.body.totalTime,
      source: req.body.source,
      sourceUrl: req.body.sourceUrl,
      ingredient: req.body.ingredient,
      description: req.body.description,
      directions: req.body.directions,
      notes: req.body.notes,
    },{new:true}
  );
  // console.log("editRecipe function ran")
}

// add in error message and don't allow user to edit recipes they don't own

async function show(req, res) {
  // console.log('recipe contl show is working')
  // console.log("req.params.id")
  const recipeList = await Recipe.findById(req.params.id);
  res.json(recipeList);
}