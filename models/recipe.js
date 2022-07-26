const mongoose = require("mongoose");
const { Schema, model } = mongoose;
require("./user");

// make todo schema
const recipeSchema = new Schema(
  {
    // user: { type: Schema.Types.ObjectId, ref: 'User' },
    user: String, // this will just be sending back a string with their name
    name: String,
    // users: [String], //where all users my id number - then you can filter for favorites
    categories: String,
    servings: String,
    rating: Number,
    // difficulty: {
    //   type: String,
    //   enum: ["Easy", "Medium", "Hard"],
    // },
    prepTime: String,
    cookTime: String,
    totalTime: String,
    source: String,
    sourceUrl: String,
    ingredient: [String],
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
// const User = model("User", userSchema);

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
// Adding Notes
module.exports = Recipe;
