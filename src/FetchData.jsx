import axios from "axios";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const landingLoader = async () => {
  const searchTerm = "apple";
  const data = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { searchTerm, drinks: data.data.drinks };
};
