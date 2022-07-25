import './App.css';
import { useState, useEffect, useRef } from 'react'
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import RecipeIndex from '../RecipeIndex/RecipeIndex';
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import * as recipeAPI from "../../utilities/recipes-api";
import { set } from "mongoose";


export default function App() {
  const [user, setUser] = useState(getUser());
  const [allRecipes, setAllRecipes] = useState([]);
  const [updated, setUpdated] = useState(false);
 
  // recipes
  useEffect(
    function () {
      
      async function getRecipes() {
        console.log("getRecipes")
        const recipes = await recipeAPI.getAll();
        console.log(recipes);
        setAllRecipes(recipes);
        
      }
      getRecipes();
    },
    [updated]
    );
    
    console.log(allRecipes);


  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/home" element={<NewOrderPage />} />
            <Route
              path="/recipes"
              element={
                <RecipeIndex
                  allRecipes={allRecipes}
                  setAllRecipes={setAllRecipes}
                  updated={updated}
                  setUpdated={setUpdated}
                />}
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
