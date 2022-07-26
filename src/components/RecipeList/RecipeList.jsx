import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as recipeAPI from "../../utilities/recipes-api";

export default function RecipeList({allRecipes, setAllRecipes, setUpdated, updated}) {
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
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

  console.log(allRecipes)
let viewMode = {}

  return (
    <>
      <div>
        <h1>Recipe List</h1>
      </div>

      <div>
      {allRecipes.map((recipe, idx, {setEdit}) => (
          <div className="border-black border-[1px] rounded-md pt-2 pb-4 px-4 font-light my-3  text-left" key={recipe._id}>
            {/* <h2>{recipe.name}</h2> */}
            <Link to={`/recipes/${recipe._id}`} style={viewMode}>
                        {recipe.name}
             </Link>
            <p>Prep time: {recipe.prepTime} &nbsp; Cook time: {recipe.cookTime} &nbsp; Total time: {recipe.totalTime}</p>
            <p>{recipe.categories}</p>
            <p>{recipe.ingredient}</p>
            <p>{recipe.directions}</p>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </>
  );

}

