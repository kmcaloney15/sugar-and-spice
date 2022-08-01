import * as usersService from "../../utilities - front end/users-service";
import { Link } from "react-router-dom";
import RecipeList from "../../components/RecipeList/RecipeList";
import * as recipeAPI from "../../utilities - front end/recipes-api";

export default function RecipeIndex({
  allRecipes,
  setAllRecipes,
  setUpdated,
  updated,
  formData,
  setFormData,
  user,
}) {
  async function handleCheckToken() {
    const expDate = await usersService.checkToken();
    console.log(expDate);
  }

  return (
    <>
      {/* <h1>Recipe Index</h1> */}
      <div className="px-5 py-7">
        <Link to={`/recipes/new`}>
          <button className="border-black bg-black border-t-[1px] rounded-lg font-light text-white text-large py-2 px-3 hover:ring hover:ring-orange-400">
            Create New Recipe
          </button>
        </Link>
      </div>
      {/* // add in a flip so if no recipes, show a message */}
      <div className="px-5 py-7">
        {allRecipes.length > 0 ? (
          <RecipeList
            allRecipes={allRecipes}
            setAllRecipes={setAllRecipes}
            setUpdated={setUpdated}
            updated={updated}
            formData={formData}
            setFormData={setFormData}
            user={user}
          />
        ) : (
          <div className="text-center">
            <h2 className="text-lg font-light">No recipes yet!</h2>
            <p className="text-sm font-light">
              Create a new recipe to get started.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
