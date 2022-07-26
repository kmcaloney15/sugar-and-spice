const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/api/recipes');

// GET /api/todos
router.get('/', recipesCtrl.index);

//POST /api/recipes/new
router.post('/new', recipesCtrl.create);

// POST /api/todos
// FIXME - edit route is throwing an error
router.put("/editRecipe/:id", recipesCtrl.editRecipe);

// DELETE /api/todos/:id
// FIXME - delete route is throwing an error 
router.delete('/deleteRecipe/:id', recipesCtrl.deleteRecipe);

// GET /api/todos/:id
router.get('/:id', recipesCtrl.show);

module.exports = router;
