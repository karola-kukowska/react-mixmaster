import { RouterProvider } from "react-router-dom";
import { router, queryClient } from "./Router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const App = () => {
  return (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />;
    <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>
    )
};
export default App;
