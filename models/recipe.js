const mongoose = require("mongoose");
const { Schema, model } = mongoose;
// require("./");

// make todo schema
const recipeSchema = new Schema(
  {
    // user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: {
      type: String,
      required: true,
    },
    categories: String,
    servings: String,
    rating: Number,
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
    },
    prepTime: String,
    cookTime: String,
    totalTime: String,
    source: String,
    sourceUrl: String,
    ingredient: String,
    // ingredient: { type: Schema.Types.ObjectId, ref: "Ingredient" },
    description: String,
    directions: String,
    notes: String,
  },
  { timestamps: true }
);

// make recipe model
const Recipe = model("Recipe", recipeSchema);

// make category model
// const Category = model("Category", categorySchema);

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
// Adding Notes
module.exports = Recipe;
