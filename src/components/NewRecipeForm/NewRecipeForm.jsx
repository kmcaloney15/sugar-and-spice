import * as recipeAPI from "../../utilities - front end/recipes-api";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function NewRecipeForm({
  setUpdated,
  allRecipes,
  setAllRecipes,
  updated,
  formData,
  setFormData,
  user,
}) {
  const newData = setUpdated();

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log(`this is the form: ${formData}`);
    //assigning user id to user field
    formData.user = user.name;
    console.log(`${formData}form data console log`);
    //sending new data to backend
    recipeAPI.newRecipe(formData);
    // also 
  }

  //*** function = form data ***//
  function handleChange(evt) {
    const updatedRecipe = { ...formData, [evt.target.name]: evt.target.value };
    console.log(`this is the updatedRecipe: ${updatedRecipe}`);
    // const newRecipe = {[evt.target.name]: evt.target.value };
    // console.log(`this is the new recipeForm: ${newRecipe}`);
    setFormData(updatedRecipe);

    console.log(formData);
    console.log(allRecipes);
    // setNewRecipe(evt.target.value);
  }

  return (
    <>
      <div
        className="form-container"
        // "p-2 rounded-lg font-light" //tailwind
      >
        <div
          className=""
          // "font-light text-lg text-left h-1/2 px-2 py-2" // tailwind
        >
          <h1 className="font-semibold text-lg">Create New Recipe</h1>
          <br></br>
        </div>
        <form
          action=""
          onChange={handleChange}
          onSubmit={handleSubmit}
          className=""
          // "border-black border-[1px] rounded-md py-4 px-4 font-light text-justify"
          id="hardshadow"
        >
          {/* NAME */}
          <div>
            <label className="font-light text-left text-lg h-1/2 px-2 py-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Recipe name here"
              className="bg-[#f7f7f2]"
            />
          </div>
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
              className="bg-[#f7f7f2]  "
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
            {/* look into client side validation to make it so they can only enter in a number */}
            <label className="font-light text-left text-lg h-1/2 px-2 py-2">
              Rating:
            </label>
            <input
              type="text"
              name="rating"
              value={formData.rating}
              placeholder="enter a number here..."
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

              <option value="Easy">-</option>
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
              name="sourceUrl"
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
            <textarea
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
              Directions:
            </label>
            <textarea
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
            <textarea
              type="text"
              name="notes"
              value={formData.notes}
              placeholder="Add notes here..."
              className="bg-[#f7f7f2]"
            />
          </div>

          {/* <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
          /> */}
          <p>&nbsp;</p>
          <button
            type="submit"
            // onClick={handleSubmit}
            className="button text-white font-light py-2 px-4 rounded-lg hover:ring hover:ring-orange-400"
          >
            Create New Recipe
          </button>
        </form>
      </div>
    </>
  );
}
