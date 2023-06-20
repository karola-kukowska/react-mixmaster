import { createBrowserRouter } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
} from "./pages/index";

export const paths = {
  COCKTAIL: "cocktail",
  ERROR: "error",
  NEWSLETTER: "newsletter",
  ABOUT: "about",
  MAIN: "/",
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: paths.COCKTAIL,
        element: <Cocktail />,
      },
      {
        path: paths.ERROR,
        element: <Error />,
      },
      {
        path: paths.NEWSLETTER,
        element: <Newsletter />,
      },
      {
        path: paths.ABOUT,
        element: <About />,
      },
    ],
  },
]);
