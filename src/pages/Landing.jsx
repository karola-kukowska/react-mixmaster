import axios from "axios";
import { useLoaderData } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";

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
