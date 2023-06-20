import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <Outlet />
    </div>
  );
};
export default HomeLayout;
