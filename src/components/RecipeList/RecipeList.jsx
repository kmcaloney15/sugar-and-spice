import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./RecipeList.css";
import * as recipeAPI from "../../utilities - front end/recipes-api";

export default function RecipeList({allRecipes, setAllRecipes, setUpdated, updated, formData, setFormData, user}) {
  const [edit, setEdit] = useState(false);


  // console.log(allRecipes)
let viewMode = {}

  return (
    <>
      {/* <div>
        <h1>Recipe List</h1>
      </div> */}

      <div>
      {allRecipes.map((recipe, idx, {setEdit}) => (
          <div className="RecipeList border-[1px] rounded-md pt-2 pb-4 px-4 font-light my-3  text-left" key={recipe._id}>
            {/* <h2>{recipe.name}</h2> */}
            <Link to={`/recipes/${recipe._id}`} style={viewMode}
            >
             {recipe.name}
             </Link>
             <p>Rating: {recipe.rating}</p>
             <p>Source: {recipe.source}</p>
             {/* //show user name */}
             <p>Author: {recipe.user}</p>

            {/* <p>Prep time: {recipe.prepTime} &nbsp; Cook time: {recipe.cookTime} &nbsp; Total time: {recipe.totalTime}</p> */}
            {/* <p>Category: {recipe.categories}</p> */}
            {/* <p>Ingredients: {recipe.ingredient}</p> */}
            {/* <p>Directions: {recipe.directions}</p> */}
            {/* <div>
            <p>Description: {recipe.description}</p>
            </div> */}
          </div>
        ))}
      </div>
    </>
  );

}

