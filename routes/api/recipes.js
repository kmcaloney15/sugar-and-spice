const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/api/recipes');

// GET /api/todos
router.get('/', recipesCtrl.index);

//POST /api/todos/new
router.post('/newRecipe', recipesCtrl.create);

// POST /api/todos
router.put("/editRecipe/:id", recipesCtrl.editTodo);

// DELETE /api/todos/:id
// router.delete('/deleteRecipe/:id', recipesCtrl.deleteTodo);

// GET /api/todos/:id
router.get('/:id', recipesCtrl.show);

module.exports = router;
