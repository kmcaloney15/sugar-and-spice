import "./App.css";
import { useState, useEffect, useRef } from "react";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import RecipeIndex from "../RecipeIndex/RecipeIndex";
import RecipeDetailPage from "../../components/RecipeDetailPage/RecipeDetailPage";
import NewRecipeForm from "../../components/NewRecipeForm/NewRecipeForm";
import { Routes, Route, Navigate, useParams, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities - front end/users-service";
import * as recipeAPI from "../../utilities - front end/recipes-api";
import { set } from "mongoose";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


export default function App() {
  const [user, setUser] = useState(getUser());
  const [allRecipes, setAllRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [editorState, setEditorState] = useState();
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
    ingredient: [""],
    description: "",
    directions: "",
    notes: "",
  });

  // const navigate = useNavigate();
  // recipes
  useEffect(
    function () {
      async function getRecipes() {
        // console.log("getRecipes");
        const recipes = await recipeAPI.getAll();
        // console.log(recipes);
        setAllRecipes(recipes);
      }
      getRecipes();
    },
    [updated]
  );

  // console.log(allRecipes);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/recipes"
              element={
                <RecipeIndex
                  allRecipes={allRecipes}
                  setAllRecipes={setAllRecipes}
                  updated={updated}
                  setUpdated={setUpdated}
                  formData={formData}
                  setFormData={setFormData}
                  user={user}
                />
              }
            />
            <Route
              path="/recipes/new"
              element={
                <NewRecipeForm
                  allRecipes={allRecipes}
                  setAllRecipes={setAllRecipes}
                  updated={updated}
                  setUpdated={setUpdated}
                  formData={formData}
                  setFormData={setFormData}
                  user={user}
                />
              }
            />
            <Route
              path="/recipes/:id"
              element={
                <RecipeDetailPage
                  allRecipes={allRecipes}
                  setAllRecipes={setAllRecipes}
                  updated={updated}
                  setUpdated={setUpdated}
                  formData={formData}
                  setFormData={setFormData}
                  user={user}
                />
              }
            />
            {/* <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={this.onEditorStateChange}
            /> */}
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
