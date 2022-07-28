// // to edit and delete category schema, it seems like we need to build api,routes,controller files for the categories.
import { getToken } from "./users-service";

const BASE_URL = "http://localhost:3001/api/recipes";

export function getAll() {
  return sendRequest(`${BASE_URL}`);
}

export function deleteRecipe(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}

// 
export function editRecipe(id, data) {
  return sendRequest(`${BASE_URL}/recipes/${id}`, "PUT", data);
}

// Add an recipe to the recipe list
// FIXME
export function newRecipe(recipeData) {
  // Just send itemId for best security (no pricing)
  console.log(`${recipeData} ran from newRecipe recipe-api`)
  return sendRequest(`${BASE_URL}`, "POST", recipeData);
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
  // need token to make sure someone is actually logged in
  const token = getToken();
  if (token) {
    // Ensure headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  console.log("sending request - recipe-api");
  if (res.ok) return res.json();
  console.log(res.json);
  throw new Error("Did not work. You can fix this.");
}
