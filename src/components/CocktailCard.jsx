import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailCard";
import { paths } from "../Router";

const CocktailCard = ({ id, name, image, info, glass }) => {
  return (
    <Wrapper>
      <div className="image-wrapper">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/${paths.COCKTAIL}/${id}`} className="btn">
          Details
        </Link>
      </div>
    </Wrapper>
  );
};
export default CocktailCard;
