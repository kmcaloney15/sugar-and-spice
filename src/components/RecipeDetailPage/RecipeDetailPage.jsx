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
}) {
  const [recipe, setRecipe] = useState([]);
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    // time: "",
    // category: "",
    description: "",
    urgency: "",

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
    ingredient: [""],
    description: "",
    directions: "",
    notes: "",
  });

  let { id } = useParams();
  const magicObject = {updated};
  console.log(magicObject.updated) // returning false... why??

  useEffect(
    function () {
      async function getSingleRecipe() {
        // let foundTodo = allTodos.filter((todo) => todo._id === id)
        // console.log(foundTodo)
        const foundRecipe = await recipeAPI.getById(id);
        setRecipe(foundRecipe);
      }
      getSingleRecipe(id);
      //   setActiveCat(activeCat);
      // important to have the brackets below, otherwise infinate loop
    },[]
    // [{updated}]
  );
  
  //     // FIXME
  async function handleSubmit(evt) {
    evt.preventDefault();
    // console.log(formData)
    const id = recipe._id;
    // console.log(id)
    recipeAPI.editRecipe(id, formData);
    // need to check for truthyness / check for some value in magic
    //use a if statment 
    // I want to check to see if magic has been updated and if so, then setUpdated to the new magic value
    setUpdated(true)
    setFormData({});
  }

  function handleChange(evt) {
    const updatedRecipe = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(updatedRecipe);
    console.log(formData);
  }

  const navigate = useNavigate();

//*** fucntion = creating new category ***//
async function deleteRecipe(evt) {
    console.log(evt.target.value);
    const recipes = allRecipes.filter((recipe) => recipe._id !== evt.target.value);
    console.log('delete function running');
    setAllRecipes(recipes);
    setUpdated(!updated);
    await recipeAPI.deleteRecipe(evt.target.value);
    // want to send user back to recipe index page
    navigate(-1)
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
        {/* <div>
        <RecipeList 
            allRecipes={allRecipes}
            setAllRecipes={setAllRecipes}
            updated={updated}
            setUpdated={setUpdated}
        />
    </div> */}
        <div className="border-black border-[1px] rounded-md pt-2 pb-4 px-4 font-light my-3  text-left" key={recipe._id}>
          <h1>{recipe.name}</h1>
          <p>{recipe.description}</p>
          <p>Prep time: {recipe.prepTime} &nbsp; Cook time: {recipe.cookTime} &nbsp; Total time: {recipe.totalTime}</p>
            <p>Category: {recipe.categories}</p>
            <p>Ingredients: {recipe.ingredient}</p>
            <p>Directions: {recipe.directions}</p>
            <p>Description: {recipe.description}</p>
        </div>

        <button
          className="border-1 border-black bg-black  rounded text-white text-sm px-1 mx-2"
          onClick={handleEditing}
          style={viewMode}
        >
          Edit
        </button>

        <button
          type="submit"
          value={recipe._id}
          className="bg-[#1f1f1f] flex items-end font-light text-sm text-white mt-1 py-1 px-3 rounded-lg hover:ring hover:ring-orange-400 float-right"
          // do we want the todo to be deleted when the button is clicked? Like marking it complete... -K
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
