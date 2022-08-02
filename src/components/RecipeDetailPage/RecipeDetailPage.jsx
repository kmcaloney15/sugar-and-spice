import { useState, useEffect } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import * as recipeAPI from "../../utilities - front end/recipes-api";
import RecipeList from "../../components/RecipeList/RecipeList";
import { Link } from "react-router-dom";
import "./RecipeDetail.css";
import "../../index.css"

export default function RecipeDetailPage({
  allRecipes,
  setAllRecipes,
  updated,
  setUpdated,
  formData,
  setFormData,
  user,
}) {
  // const [recipe, setRecipe] = useState([]);
  const [edit, setEdit] = useState(false);
  const allowChanges = allRecipes.user === user._id;
  console.log(allRecipes)

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

  async function handleSubmit(evt) {
    evt.preventDefault();
    // console.log(formData)
    const id = formData._id;
    // console.log(id)
    recipeAPI.editRecipe(id, formData);
    setUpdated(!updated);
    setFormData({});
    navigate("/recipes");
  }

  function handleChange(evt) {
    const updatedRecipe = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(updatedRecipe);
    // console.log(formData);
  }

  const navigate = useNavigate();

  //*** fucntion = creating new category ***//
   function deleteRecipe(evt) {
    console.log(`this is the delete recipe ${evt.target.value}`);
    const recipes = allRecipes.filter(
      (recipe) => recipe._id !== evt.target.value
    );
    console.log("delete function running");
    setAllRecipes(recipes);
    // setUpdated(!updated);
    recipeAPI.deleteRecipe(evt.target.value);
    // want to send user back to recipe index page
    setUpdated(!updated);
    navigate(-1);
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
      
        {/* INPUT DETAILS */}
        <div>
          <div
            className="form-container text-left rounded-md pt-2 pb-4 px-4 my-3"
            // "border-black border-[1px] rounded-md pt-2 pb-4 px-4 font-light my-3  text-left"
            key={formData._id}
          >
            {/* NAME */}
            <label className="font-extralight text-xl text-2l text-left pt-5">
              Name
            </label>
            <p
              style={viewMode}
              className="font-light"
            >
              {formData.name}
            </p>
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
            <div className="prep-time">
            {/* PREP TIME */}
            <label className="font-extralight text-xl text-2l text-left pt-5">
              Prep time:
            </label>
            <p style={viewMode} className="font-light ">
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
             &nbsp;&nbsp;

            {/* COOK TIME */}
            <label className="font-extralight  text-2l text-left pt-5">
              Cook Time
            </label>
            &nbsp;
            <p style={viewMode} className="font-light  ">
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
            <p style={viewMode} className="font-light ">
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
            </div>
            {/* CATEGORY */}
            <label className="font-extralight text-xl text-2l text-left pt-5">
              Category
            </label>
            <p style={viewMode} className="font-light  ">
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
            {/* INGREDIENTS */}
            <label className="font-extralight text-xl text-2l text-left pt-5">
              Ingredients
            </label>
            <p style={viewMode} className="font-light  ">
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
            {/* DESCRIPTION */}
            <label className="font-extralight text-xl text-2l text-left pt-5">
              Description:
            </label>
            <p style={viewMode} className="font-light">
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
            {/* DIRECTIONS */}
            <label className="font-extralight text-xl text-2l text-left pt-5">
              Directions:
            </label>
            <p style={viewMode} className="font-light  ">
              {formData.directions}
            </p>
            <input
              type="text"
              name="directions"
              className="textInput bg-[#f7f7f2] box-content w-32"
              style={editMode}
              placeholder={formData.directions}
              value={formData.directions}
              onChange={handleChange}
            />
            {/* DESCRIPTION */}
            <label className="font-extralight text-xl text-2l text-left pt-5">
              Description:
            </label>
            {/* parce just around the p tags */}
            <p style={viewMode} className="font-light  ">
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
        {/* REMOVE BUTTONS IF YOU ARE NOT AUTHOR OF RECIPE */}
        {/* {allowChanges && ( */}
          <>
        <button
          className="button"
          onClick={handleEditing}
          style={viewMode}
        >
          Edit
        </button>
      

        <button
          className="button"
          onClick={handleEditing}
          style={editMode}
        >
          Close Edit
        </button>
        &nbsp; &nbsp;

        <button
          className="button"
          type="submit"
          value={formData._id}
          style={editMode}
          onClick={handleSubmit}
        >
          Save
        </button>
        &nbsp; &nbsp;

        <button
          className="button"
          type="submit"
          value={formData._id}
          onClick={deleteRecipe}
        >
          Delete
        </button>
        &nbsp; &nbsp;

        <Link to="/recipes">
          <button className="button">
            Go To Recipe Page
          </button>
        </Link>
        </>

        {/* )}  */}

        {/* <Link to="/recipes">
          <button className="button">
            Go To Recipe Page
          </button>
        </Link> */}
        
      </div>
    </>
  );
}
