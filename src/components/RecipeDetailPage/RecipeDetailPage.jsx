import RecipeList from "../../components/RecipeList/RecipeList";

export default function RecipeDetailPage() {
  return (
    <>
    <div className="recipe-detail-page">
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
    </div>
    </>
  );
}