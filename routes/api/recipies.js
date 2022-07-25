const express = require('express');
const router = express.Router();
const recipiesCtrl = require('../../controllers/api/recipies');

// GET /api/todos
router.get('/', recipiesCtrl.index);

//POST /api/todos/new
router.post('/newRecipe', recipiesCtrl.create);

// POST /api/todos
router.put("/editRecipe/:id", recipiesCtrl.editTodo);

// DELETE /api/todos/:id
router.delete('/deleteRecipe/:id', recipiesCtrl.deleteTodo);

// GET /api/todos/:id
router.get('/:id', recipiesCtrl.show);

module.exports = router;
