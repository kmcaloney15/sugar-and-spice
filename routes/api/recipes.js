const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/api/recipes');

// GET /api/recipes
router.get('/', recipesCtrl.index);

//POST /api/recipes/new
router.post('/', recipesCtrl.create);

// POST /api/recipes
// FIXME - edit route is throwing an error
router.put("/recipes/:id", recipesCtrl.editRecipe);

// DELETE /api/recipes/:id
router.delete('/:id', recipesCtrl.deleteRecipe);

// GET /api/recipes/:id
router.get('/:id', recipesCtrl.show);

module.exports = router;
