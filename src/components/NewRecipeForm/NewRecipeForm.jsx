import * as recipeAPI from "../../utilities/recipes-api";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NewRecipeForm({ setUpdated, allRecipes }) {
  const [formData, setFormData] = useState({
    // add in all fields
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

  //FIXME
//   const magic = setUpdated();

//   async function handleSubmit(evt) {
//     evt.preventDefault();
//     console.log(formData);

//     // const oneallCats.filter((cat) => cat.title === formData.category)
//     // setAllTodos([...allTodos,formData]);
//     // addTodos(formData);
//     //send new form data to app
//     // setAllTodos(todos);
//     //sending new data to backend
//     todoAPI.newTodo(formData);
//     setUpdated(!magic);
//     // get data again from the backend
//     // const todos = todoAPI.getAll();
//     setFormData({
//         name: "",
//         categories: "",
//         servings: "",
//         rating: "",
//         difficulty: "",
//         prepTime: "",
//         cookTime: "",
//         totalTime: "",
//         source: "",
//         sourceUrl: "",
//         ingredient: "",
//         // ingredient: { type: Schema.Types.ObjectId, ref: "Ingredient" },
//         description: "",
//         directions: "",
//         notes: "",
//     });
//   }

  //*** function = form data ***//
  function handleChange(evt) {
    // const updatedTodo = { ...formData, [evt.target.name]: evt.target.value };

    // setFormData( evt.target.name === "category"? { ...formData, [evt.target.name]: evt.target.key }:{ ...formData, [evt.target.name]: evt.target.value } );
    setFormData({ ...formData, [evt.target.name]: evt.target.value });

    console.log(formData);
    console.log(allRecipes)
    // setNewTodo(evt.target.value);
  }

  return (
    <>
      <div className="p-2 rounded-lg font-light">
        <div className="font-light text-lg text-left h-1/2 px-2 py-2">
       

          <h3 className="font-semibold text-lg">Create New Recipe</h3>
        </div>
        <form
          action=""
          onChange={handleChange}
          className="border-black border-[1px] rounded-md py-4 px-4 font-light text-justify"
          id="hardshadow"
        >
          <label className="font-light text-left text-lg h-1/2 px-2 py-2">
            Name
          </label>
          <input
            type="text"
            name="title"
            value={formData.name}
            placeholder="write here..."
            className="bg-[#f7f7f2] border-b-[1px] border-black outline-0"
          />
          <p>&nbsp;</p>
           <label className="font-light text-left text-lg h-1/2 px-2 py-2">
            Category:
          </label>
          <input
            type="text"
            name="categories"
            value={formData.categories}
            placeholder="write here..."
            className="bg-[#f7f7f2]"
          />
          <p>&nbsp;</p>

          {/* // temporarily commenting out category to get the to-do to work and then can incorporate in the categories back in -KM 

          <label className="font-light text-left text-lg h-1/2 px-2 py-2">
            Category
          </label>

          <select
            name="category"
            value={formData.category}
            className="font-extralight text-2l text-left h-1/2 px-2 py-2 bg-[#f7f7f2]"
          >
            {/* {allCats.map((cat) => (
              <option value={cat._id} key={cat._id}>
                {cat.title}
              </option>
            ))} 

            {/* <option value="A">a</option>
            <option value="B">b</option>
            <option value="C">c</option> 
          </select>
          <p>&nbsp;</p>
          <label className="font-light text-left text-lg h-1/2 px-2 py-2">
            Urgency
          </label>
          <select
            name="urgency"
            value={formData.urgency}
            className="font-extralight text-2l text-left h-1/2 px-2 py-2 bg-[#f7f7f2]"
          >
            <option value="low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <p>&nbsp;</p>
          <label className="font-light text-left text-lg h-1/2 px-2 py-2">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            placeholder="write here..."
            className="bg-[#f7f7f2] outline-0"
          /> */}
          <p>&nbsp;</p>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#1f1f1f] text-white font-light py-2 px-4 rounded-lg hover:ring hover:ring-orange-400"
          >
            Create New Recipe
          </button>
        </form>
      </div>
    </>
  );
}
