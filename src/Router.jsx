import { createBrowserRouter } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
  SinglePageError,
} from "./pages/index";
import { landingLoader } from "./pages/Landing";
import { loader as cocktailLoader } from "./pages/Cocktail";
import { QueryClient } from "@tanstack/query-core";


export const queryClient = new QueryClient({
defaultOptions: {
  queries: {
    staleTime: 1000*60*5,
  }
  }
});

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
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader(queryClient),
        element: <Landing />,
        errorElement: <SinglePageError />,
      },
      {
        path: `${paths.COCKTAIL}/:id`,
        element: <Cocktail />,
        errorElement: <SinglePageError />,
        loader: cocktailLoader(queryClient),
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
