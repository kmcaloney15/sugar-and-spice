import * as usersService from '../../utilities/users-service'
import { Link } from 'react-router-dom'
import RecipeList from '../../components/RecipeList/RecipeList'

export default function OrderHistoryPage() {

    async function handleCheckToken() {
        const expDate = await usersService.checkToken()
        console.log(expDate)
    }

    return (
        <>
            <h1>Recipe Index</h1>
            <RecipeList />
            {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
        </>
        
    );
  }
  