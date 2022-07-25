const express = require("express");
const router = express.Router();
const noteCtrl = require("../../controllers/api/notes");

// GET /api/notes
router.get("/", noteCtrl.index);

// POST /api/notes
router.post("/newNote", noteCtrl.create);

// POST /api/notes
router.put("/editNote/:id", noteCtrl.editNote);

// DELETE /api/notes/:id
router.delete("/deleteNote/:id", noteCtrl.deleteNote);

// GET /api/notes/:id
router.get('/:id', noteCtrl.show);

module.exports = router;
