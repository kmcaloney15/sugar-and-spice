import * as recipeAPI from "../../utilities/recipes-api";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NewRecipeForm({ setUpdated, allRecipes }) {
  const [formData, setFormData] = useState({
    // add in all fields
    name: "",
    categories: "",
    servings: "",
    rating: "",
    difficulty: "",
    prepTime: "",
    cookTime: "",
    totalTime: "",
    source: "",
    sourceUrl: "",
    ingredient: "",
    // ingredient: { type: Schema.Types.ObjectId, ref: "Ingredient" },
    description: "",
    directions: "",
    notes: "",
  });

  //FIXME
  //   const magic = setUpdated();

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    //sending new data to backend
    recipeAPI.newRecipe(formData);
    // setUpdated(!magic);
    // get data again from the backend
    // const recipes = recipeAPI.getAll();
    setFormData({
      name: "",
      categories: "",
      servings: "",
      rating: "",
      difficulty: "",
      prepTime: "",
      cookTime: "",
      totalTime: "",
      source: "",
      sourceUrl: "",
      ingredient: "",
      // ingredient: { type: Schema.Types.ObjectId, ref: "Ingredient" },
      description: "",
      directions: "",
      notes: "",
    });
  }

  //*** function = form data ***//
  function handleChange(evt) {
    // const updatedRecipe = { ...formData, [evt.target.name]: evt.target.value };

    // setFormData( evt.target.name === "category"? { ...formData, [evt.target.name]: evt.target.key }:{ ...formData, [evt.target.name]: evt.target.value } );
    setFormData({ ...formData, [evt.target.name]: evt.target.value });

    console.log(formData);
    console.log(allRecipes);
    // setNewRecipe(evt.target.value);
  }

  return (
    <>
      <div className="p-2 rounded-lg font-light">
        <div className="font-light text-lg text-left h-1/2 px-2 py-2">
          <h3 className="font-semibold text-lg">Create New Recipe</h3>
        </div>
        <form
          action=""
          onChange={handleChange}
          className="border-black border-[1px] rounded-md py-4 px-4 font-light text-justify"
          id="hardshadow"
        >
          {/* NAME */}
          {/* <div> */}
            {/* <label className="font-light text-left text-lg h-1/2 px-2 py-2">
              Name
            </label>
            <input
              type="text"
              name="title"
              value={formData.name}
              placeholder="write here..."
              className="bg-[#f7f7f2] border-b-[1px] border-black outline-0"
            /> */}
            <div>
            <label className="font-light text-left text-lg h-1/2 px-2 py-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Recipe name here"
              className="bg-[#f7f7f2]  border-b-[1px] border-black outline-0"
            />
          </div>

          {/* </div> */}
          {/* CATEGORY */}
          <div>
            <label className="font-light text-left text-lg h-1/2 px-2 py-2">
              Category:
            </label>
            <input
              type="text"
              name="categories"
              value={formData.categories}
              placeholder="write here..."
              className="bg-[#f7f7f2]  border-b-[1px] border-black outline-0"
            />
          </div>
          {/* SERVINGS */}
          <div>
            <label className="font-light text-left text-lg h-1/2 px-2 py-2">
              Servings:
            </label>
            <input
              type="text"
              name="servings"
              value={formData.servings}
              placeholder="write here..."
              className="bg-[#f7f7f2]"
            />
          </div>
          {/* RATING */}
          <div>
            <label className="font-light text-left text-lg h-1/2 px-2 py-2">
              Rating:
            </label>
            <input
              type="number"
              name="rating"
              value={formData.categories}
              placeholder="write here..."
              className="bg-[#f7f7f2]"
            />
          </div>
          {/* Difficulty */}
          <div>
            <label className="font-light text-left text-lg h-1/2 px-2 py-2">
              Difficulty:
            </label>
            <input
              type="text"
              name="difficulty"
              value={formData.difficulty}
              placeholder="write here..."
              className="bg-[#f7f7f2]"
            />
          </div>
          {/* Difficulty */}
          <div>
            <label className="font-light text-left text-lg h-1/2 px-2 py-2">
              Difficulty:
            </label>

            <select
              name="difficulty"
              value={formData.difficulty}
              placeholder="Select One"
              className="font-extralight text-2l text-left h-1/2 px-2 py-2 bg-[#f7f7f2]"
            >
              {/* // if I want to include categories as a reference */}
              {/* {allCats.map((cat) => (
              <option value={cat._id} key={cat._id}>
                {cat.title}
              </option>
            ))}  */}

              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          {/* Prep Time */}
          <div>
            <label className="font-light text-left text-lg h-1/2 px-2 py-2">
              Prep Time:
            </label>
            <input
              type="text"
              name="prepTime"
              value={formData.prepTime}
              placeholder="write here..."
              className="bg-[#f7f7f2]"
            />
          </div>
          {/* Cook Time */}
          <div>
            <label className="font-light text-left text-lg h-1/2 px-2 py-2">
              Cook Time:
            </label>
            <input
              type="text"
              name="cookTime"
              value={formData.cookTime}
              placeholder="write here..."
              className="bg-[#f7f7f2]"
            />
          </div>
          {/* Total Time */}
          <div>
            <label className="font-light text-left text-lg h-1/2 px-2 py-2">
              Total Time:
            </label>
            <input
              type="text"
              name="totalTime"
              value={formData.totalTime}
              placeholder="write here..."
              className="bg-[#f7f7f2]"
            />
          </div>
          {/* Source */}
          <div>
            <label className="font-light text-left text-lg h-1/2 px-2 py-2">
              Source:
            </label>
            <input
              type="text"
              name="source"
              value={formData.source}
              placeholder="write here..."
              className="bg-[#f7f7f2]"
            />
          </div>
          {/* Source URL */}
          <div>
            <label className="font-light text-left text-lg h-1/2 px-2 py-2">
              Source URL:
            </label>
            <input
              type="text"
              name="sourceURL"
              value={formData.sourceUrl}
              placeholder="write here..."
              className="bg-[#f7f7f2]"
            />
          </div>
          {/* Ingredients */}
          <div>
            <label className="font-light text-left text-lg h-1/2 px-2 py-2">
              Ingredients:
            </label>
            <input
              type="text"
              name="ingredient"
              value={formData.ingredient}
              placeholder="Add ingredients here..."
              className="bg-[#f7f7f2]"
            />
          </div>
          {/* Description */}
          <div>
            <label className="font-light text-left text-lg h-1/2 px-2 py-2">
              Description
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              placeholder="write the description here..."
              className="bg-[#f7f7f2] outline-0"
            />
          </div>
          {/* Directions */}
          <div>
            <label className="font-light text-left text-lg h-1/2 px-2 py-2">
              Total Time:
            </label>
            <input
              type="text"
              name="directions"
              value={formData.directions}
              placeholder="Add directions here..."
              className="bg-[#f7f7f2]"
            />
          </div>
          {/* Notes */}
          <div>
            <label className="font-light text-left text-lg h-1/2 px-2 py-2">
              Notes:
            </label>
            <input
              type="text"
              name="notes"
              value={formData.notes}
              placeholder="Add notes here..."
              className="bg-[#f7f7f2]"
            />
          </div>
          <p>&nbsp;</p>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#1f1f1f] text-white font-light py-2 px-4 rounded-lg hover:ring hover:ring-orange-400"
          >
            Create New Recipe
          </button>
        </form>
      </div>
    </>
  );
}
