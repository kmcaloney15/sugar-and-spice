import * as recipeAPI from "../../utilities - front end/recipes-api";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function NewRecipeForm({ setUpdated, allRecipes, setAllRecipes,
    updated}) {
    const [createData, setCreateData] = useState(false);
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
    description: "",
    directions: "",
    notes: "",
  });

  //FIXME
    // const newData = setUpdated();

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log(`this is the form: ${formData}`);

    const newData = await createData(formData);
    setFormData(newData);
    console.log(`this is the new data: ${newData}`);
    setCreateData(true);
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
      description: "",
      directions: "",
      notes: "",
    })

    //sending new data to backend
    // recipeAPI.newRecipe(formData);
    // setUpdated(!newData);

    // try an if statement to save changed data
    // if (formData.name !== "") {
    // setUpdated(formData);
    // console.log(`${formData.name} has run`);
    // }



    // get data again from the backend
    const recipes = recipeAPI.getAll();
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
      description: "",
      directions: "",
      notes: "",
    });
  }

  //*** function = form data ***//
  function handleChange(evt) {
    const updatedRecipe = { ...formData, [evt.target.name]: evt.target.value };

    // const newRecipe = {[evt.target.name]: evt.target.value };
    // console.log(`this is the new recipeForm: ${newRecipe}`);
    setFormData(updatedRecipe);

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
          onSubmit={handleSubmit}
          className="border-black border-[1px] rounded-md py-4 px-4 font-light text-justify"
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
              className="bg-[#f7f7f2]  border-b-[1px] border-black outline-0"
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
              className="bg-[#f7f7f2]  border-b-[1px] border-black outline-0"
            />
          </div>
          {/* <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
          /> */}
          ;<p>&nbsp;</p>
          <button
            type="submit"
            // onClick={handleSubmit}
            className="bg-[#1f1f1f] text-white font-light py-2 px-4 rounded-lg hover:ring hover:ring-orange-400"
          >
            Create New Recipe
          </button>
        </form>
      </div>
    </>
  );
}
