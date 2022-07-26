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

  let { id } = useParams();

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
        <Link to="/recipes">
          <button className="bg-[#1f1f1f] flex items-end font-light text-sm text-white mt-1 py-1 px-3 rounded-lg hover:ring hover:ring-orange-400">
            Go To Recipe Page
          </button>
        </Link>
      </div>
    </>
  );
}
