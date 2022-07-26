// // to edit and delete category schema, it seems like we need to build api,routes,controller files for the categories. - Sam
import { getToken } from "./users-service";

const BASE_URL = "/api/recipes";

export function getAll() {
  return sendRequest(BASE_URL);
}

export function deleteRecipe(id) {
  return sendRequest(`${BASE_URL}/deleteRecipe/${id}`, "DELETE");
}

// export function editNote(id) {
//   return sendRequest(`${BASE_URL}/editTodo/${id}`, "PUT");
// }

// Add an recipe to the recipe list
export function newRecipe(recipeData) {
  // Just send itemId for best security (no pricing)
  console.log(recipeData)
  return sendRequest(`${BASE_URL}/newRecipe`, "POST", recipeData);
}

// get a recipe by id
export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`, "GET");
}

/*--- Helper Functions ---*/

async function sendRequest(url, method = "GET", payload = null) {
  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  console.log("sending request");
  if (res.ok) return res.json();
  console.log(res.json);
  throw new Error("Not so good. Come on man, you're better than this.");
}
