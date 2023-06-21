import axios from "axios";
import { useLoaderData, Link, Navigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const data = await axios.get(`${singleCocktailUrl}${params.id}`);

  return { id: params.id, data: data.data.drinks };
};

const Cocktail = () => {
  const { id, data } = useLoaderData();
  if (!data) {
    return <Navigate to="/" />;
  }
  const singleCocktail = data[0];

  // const getIngredients = () => {
  //   let arr = [];
  //   for (let i = 1; i <= 15; i++) {
  //     let key = `strIngredient${i}`;
  //     if (singleCocktail[key]) {
  //       arr.push(singleCocktail[key]);
  //     }
  //   }
  //   return arr.join(", ");
  // };
  // const ingredients = getIngredients();

  const ingredients = Object.keys(singleCocktail)
    .filter(
      (key) => key.startsWith("strIngredient") && singleCocktail[key] !== null
    )
    .map((key) => singleCocktail[key])
    .join(", ");

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleCocktail;

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />

        <div className="drink-info">
          <p>
            <span className="drink-data">name</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients</span>
            {ingredients}
          </p>
          <p>
            <span className="drink-data">instructions</span>
            <span style={{ textTransform: "none" }}>{instructions}</span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Cocktail;
