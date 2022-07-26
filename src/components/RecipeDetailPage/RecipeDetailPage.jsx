import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as recipeAPI from "../../utilities/recipes-api";
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
  const magic = setUpdated();

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
    },
    [id]
  );

  async function handleSubmit(evt) {
    evt.preventDefault();
    // console.log(formData)
    const id = recipe._id;
    // console.log(id)
    recipeAPI.editRecipe(id, formData);
    setUpdated(!magic);

    setFormData({});
  }

  function handleChange(evt) {
    const updatedRecipe = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(updatedRecipe);
    console.log(formData);
  }


//*** fucntion = creating new category ***//
async function deleteRecipe(evt) {
    console.log(evt.target.value);
    const recipes = allRecipes.filter((recipe) => recipe._id !== evt.target.value);
    console.log(recipes);
    setAllRecipes(recipes);
    setUpdated(!updated);
    await recipeAPI.deleteRecipe(evt.target.value);
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
        <div>
          <h1>{recipe.name}</h1>
          <p>{recipe.description}</p>
        </div>
        <p>testing text</p>

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
