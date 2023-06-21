import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ data }) => {
  if (!data) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>
    );
  }
  const formattedData = data.map((item) => {
    return {
      id: item.idDrink,
      name: item.strDrink,
      image: item.strDrinkThumb,
      glass: item.strGlass,
      category: item.strCategory,
      info: item.strAlcoholic,
    };
  });
  return (
    <Wrapper>
      {formattedData.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};
export default CocktailList;
