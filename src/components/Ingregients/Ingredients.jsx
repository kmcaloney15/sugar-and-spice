
export default function Ingredients (props) {
  const { ingredients } = props;
  return (
    <div className="ingredients">
      <h3>Ingredients</h3>
      {/* <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient.id}>
            {ingredient.name}
          </li>
        ))}
      </ul> */}
    </div>
  );
}