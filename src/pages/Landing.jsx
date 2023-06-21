import axios from "axios";
import { useLoaderData } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const landingLoader = async () => {
  const searchTerm = "rum";
  const data = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { searchTerm, drinks: data.data.drinks };
};

const Landing = () => {
  const { searchTerm, drinks } = useLoaderData();
  return (
    <>
      <SearchForm />
      <CocktailList data={drinks} />
    </>
  );
};
export default Landing;
