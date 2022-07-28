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
    

    // const recipeList = await Recipe.find({}).populate('category').exec();
    // .populate('category').exec();
    // re-sort based upon the sortOrder of the categories
    // todos.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.json(recipeList);
  } catch {
    res.status(400).json('Bad Serverside')
  }
}



// create new recipes
async function create(req, res) {
  console.log(req.body) // this is the body of the request
  try {

    // const one = Category.findOne({title:req.body.category})
    console.log('create recipe controller is working')

    const newRecipe = await Recipe.create(req.body);
    const recipeList = await Recipe.find({});
    recipeList.push(newRecipe)
    console.log('new recipe created')
    console.log(recipeList)
    //.then((todoList) => {console.log(todoList)})
    console.log(`controller create is ${newRecipe}`)
    await recipeList.save();
    console.log(`${recipeList} from controller create ran`);
    res.json(recipeList);
    response.json();
  } catch (e) {
    res.status(400).json(e)
  }
}


// need to find all todos for a specific user - this might not be necessary -K
// async function findAllRecipes(userId) {
//   return await this.find({ user: userId });
// }


// to delete a todo
async function deleteRecipe(req, res) {
  // console.log(req.body)
  console.log("controller delete ran")

  try {
    console.log(req.params.id)
    const one = await Recipe.findByIdAndDelete(req.params.id)
    // const recipeList = await Todo.find({})
    // await recipeList.save()
    // res.json(todoList)
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
  console.log("editRecipe function ran")
}

async function show(req, res) {
  console.log('recipe contl show is working')
  console.log("req.params.id")
  const recipeList = await Recipe.findById(req.params.id);
  res.json(recipeList);
}