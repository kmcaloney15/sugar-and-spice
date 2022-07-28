import { useState, useEffect } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import * as recipeAPI from "../../utilities - front end/recipes-api";
import RecipeList from "../../components/RecipeList/RecipeList";
import { Link } from "react-router-dom";

export default function RecipeDetailPage({
  allRecipes,
  setAllRecipes,
  updated,
  setUpdated,
  formData,
  setFormData,
}) {
  // const [recipe, setRecipe] = useState([]);
  const [edit, setEdit] = useState(false);

  let { id } = useParams();


  useEffect(
    function () {
      async function getSingleRecipe() {
        // let foundrecipe = allrecipes.filter((recipe) => recipe._id === id)
        // console.log(foundrecipe)
        const foundRecipe = await recipeAPI.getById(id);
        setFormData(foundRecipe);
      }
      getSingleRecipe(id);
      //   setActiveCat(activeCat);
      // important to have the brackets below, otherwise infinate loop
    },
    []
    // [{updated}]
  );

  //     // FIXME
  async function handleSubmit(evt) {
    evt.preventDefault();
    // console.log(formData)
    const id = formData._id;
    // console.log(id)
    recipeAPI.editRecipe(id, formData);
    // need to check for truthyness / check for some value in magic
    //use a if statment
    // call setAllRecipes here to make sure they render
    setUpdated(true);
    setFormData({});
    setAllRecipes(...allRecipes.push(formData));
  }

  function handleChange(evt) {
    const updatedRecipe = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(updatedRecipe);
    // console.log(formData);
  }

  const navigate = useNavigate();

  //*** fucntion = creating new category ***//
  async function deleteRecipe(evt) {
    console.log(`this is the delete recipe ${evt.target.value}`);
    const recipes = allRecipes.filter(
      (recipe) => recipe._id !== evt.target.value
    );
    console.log("delete function running");
    setAllRecipes(recipes);
    // setUpdated(!updated);
    await recipeAPI.deleteRecipe(evt.target.value);
    // want to send user back to recipe index page
    navigate("/recipes");
    // redirects to look into: talk to Eric
  }

  //*** function = Edit data ***//
  function handleEditing(evt) {
    setEdit(!edit);
  }

  let viewMode = {};
  let editMode = {};

  if (edit) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <>
      <div className="recipe-detail-page">
        <h1>Recipe Detail Page</h1>
       
        {/* INPUT DETAILS */}
        <div>
          <div
            className="border-black border-[1px] rounded-md pt-2 pb-4 px-4 font-light my-3  text-left"
            key={formData._id}
          >
            {/* NAME */}
            <label className="font-extralight text-xl text-2l text-left pt-5">
              Name
            </label>
            <h1
              style={viewMode}
              className="font-light text-xl border-black border-b-[1px]"
            >
              {formData.name}
            </h1>
            {/* &nbsp;&nbsp; */}
            <input
              type="text"
              name="name"
              value={formData.name}
              style={editMode}
              // placeholder={recipe.name}
              default
              onChange={handleChange}
              className="bg-[#f7f7f2]"
            />
            {/* DESCRIPTION */}
            <label className="font-extralight text-xl text-2l text-left pt-5">
              Description:
            </label>
            <p style={viewMode} className="font-light text-xl ">
              {formData.description}
            </p>
            <input
              type="text"
              name="description"
              className="textInput bg-[#f7f7f2]"
              style={editMode}
              // placeholder={formData.description}
              value={formData.description}
              onChange={handleChange}
            />
            {/* PREP TIME */}
            <label className="font-extralight text-xl text-2l text-left pt-5">
              Prep time:
            </label>
            <p style={viewMode} className="font-light text-xl ">
              {formData.prepTime}{" "}
            </p>
            <input
              type="text"
              name="prepTime"
              className="textInput bg-[#f7f7f2]"
              style={editMode}
              // placeholder={formData.prepTime}
              value={formData.prepTime}
              onChange={handleChange}
            />
            {/* COOK TIME */}
            <label className="font-extralight text-xl text-2l text-left pt-5">
              Cook Time
            </label>
            &nbsp;
            <p style={viewMode} className="font-light text-xl ">
              {formData.cookTime}{" "}
            </p>
            &nbsp;
            <input
              type="text"
              name="cookTime"
              className="textInput bg-[#f7f7f2]"
              style={editMode}
              // placeholder={formData.cookTime}
              value={formData.cookTime}
              onChange={handleChange}
            />
            {/* TOTAL TIME  */}
            <label className="font-extralight text-xl text-2l text-left pt-5">
              Total time:
            </label>
            <p style={viewMode} className="font-light text-xl ">
              {formData.totalTime}
            </p>
            <input
              type="text"
              name="totalTime"
              className="textInput bg-[#f7f7f2]"
              style={editMode}
              // placeholder={formData.totalTime}
              value={formData.totalTime}
              onChange={handleChange}
            />
            {/* CATEGORY */}
            <label className="font-extralight text-xl text-2l text-left pt-5">
              Category
            </label>
            <p style={viewMode} className="font-light text-xl ">
              {formData.categories}
            </p>
            <input
              type="text"
              name="categories"
              className="textInput bg-[#f7f7f2]"
              style={editMode}
              // placeholder={formData.categories}
              value={formData.categories}
              onChange={handleChange}
            />
            <p>&nbsp;</p>
            {/* INGREDIENTS */}
            <label className="font-extralight text-xl text-2l text-left pt-5">
              Ingredients
            </label>
            <p style={viewMode} className="font-light text-xl ">
              {formData.ingredient}
            </p>
            <input
              type="text"
              name="ingredient"
              className="textInput bg-[#f7f7f2]"
              style={editMode}
              // placeholder={formData.ingredient}
              value={formData.ingredient}
              onChange={handleChange}
            />
            {/* DIRECTIONS */}
            <label className="font-extralight text-xl text-2l text-left pt-5">
              Directions:
            </label>
            <p style={viewMode} className="font-light text-xl ">
              {formData.directions}
            </p>
            <input
              type="text"
              name="directions"
              className="textInput bg-[#f7f7f2]"
              style={editMode}
              placeholder={formData.directions}
              value={formData.directions}
              onChange={handleChange}
            />
            {/* <p>&nbsp;</p> */}
            {/* DESCRIPTION */}
            <label className="font-extralight text-xl text-2l text-left pt-5">
              Description:
            </label>
            <p style={viewMode} className="font-light text-xl ">
              {formData.description}
            </p>
            <input
              type="text"
              name="description"
              className="textInput bg-[#f7f7f2]"
              style={editMode}
              placeholder={formData.description}
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* BUTTONS */}
        <button
          className="border-1 border-black bg-black  rounded text-white text-sm px-1 mx-2"
          onClick={handleEditing}
          style={viewMode}
        >
          Edit
        </button>
        <button
          className="bg-[#1f1f1f] flex items-end font-light text-sm text-white mt-1 py-1 px-3 rounded-lg hover:ring hover:ring-orange-400"
          onClick={handleEditing}
          style={editMode}
        >
          Close Edit
        </button>
        <button
          className="bg-[#1f1f1f] flex items-end font-light text-sm text-white mt-1 py-1 px-3 rounded-lg hover:ring hover:ring-orange-400"
          type="submit"
          value={formData._id}
          style={editMode}
          onClick={handleSubmit}
        >
          Save
        </button>
        <button
          type="submit"
          value={formData._id}
          className="bg-[#1f1f1f] flex items-end font-light text-sm text-white mt-1 py-1 px-3 rounded-lg hover:ring hover:ring-orange-400 float-right"
          onClick={deleteRecipe}
        >
          Delete
        </button>

        <Link to="/recipes">
          <button className="bg-[#1f1f1f] flex items-end font-light text-sm text-white mt-1 py-1 px-3 rounded-lg hover:ring hover:ring-orange-400">
            Go To Recipe Page
          </button>
        </Link>
      </div>
    </>
  );
}
