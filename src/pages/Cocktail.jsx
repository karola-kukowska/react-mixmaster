import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLoaderData, Link, Navigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";


const singleCocktailQuery = (id) => {
  return {
    queryKey: ["cocktail",id],
    queryFn: async () => {
      const data = await axios.get(`${singleCocktailUrl}${id}`);
      return data.data.drinks
    }
  }
}

export const loader = (queryClient) => async ({ params }) => {
  //const data = await axios.get(`${singleCocktailUrl}${params.id}`);
  await queryClient.ensureQueryData(singleCocktailQuery(params.id))
  return { id: params.id };
};

const Cocktail = () => {
  const { id } = useLoaderData();
  const {data} = useQuery(singleCocktailQuery(id));

  if (!data) {
    return <Navigate to="/" />;
  }
  const singleCocktail = data[0];

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
