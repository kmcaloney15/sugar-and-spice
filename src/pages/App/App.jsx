import './App.css';
import { useState } from 'react'
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import RecipeIndex from '../RecipeIndex/RecipeIndex';
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service'

export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
      <h1>Chester the Tester</h1>
      {user ?
      <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/recipes" element={<RecipeIndex />} />
          </Routes>
      </>
      :
      <AuthPage setUser={setUser} />}
    </main>
  );
}
