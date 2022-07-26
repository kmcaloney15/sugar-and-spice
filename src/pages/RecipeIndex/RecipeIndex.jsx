import * as usersService from '../../utilities/users-service'
import { Link } from 'react-router-dom'
import RecipeList from '../../components/RecipeList/RecipeList'
import * as recipeAPI from "../../utilities/recipes-api";

export default function RecipeIndex({allRecipes, setAllRecipes, setUpdated, updated}) {

    async function handleCheckToken() {
        const expDate = await usersService.checkToken()
        console.log(expDate)
    }

    return (
        <>
            <h1>Recipe Index</h1>
            <div className="px-5 py-7">
              <Link to={`/recipes/new`}>
                <button className="border-black bg-black border-t-[1px] rounded-lg font-light text-white text-large py-2 px-3 hover:ring hover:ring-orange-400">
                  Create New Recipe
                </button>
              </Link>
            </div>
            <RecipeList
             allRecipes={allRecipes}
             setAllRecipes={setAllRecipes}
             updated={updated}
             setUpdated={setUpdated}
            />
            {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
        </>
        
    );
  }
  