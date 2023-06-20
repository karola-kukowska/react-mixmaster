import { NavLink } from "react-router-dom";
import { paths } from "../Router";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink to={paths.MAIN} className="nav-link">
            Home
          </NavLink>
          <NavLink to={paths.ABOUT} className="nav-link">
            About
          </NavLink>
          <NavLink to={paths.NEWSLETTER} className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
