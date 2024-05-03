import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import Home from "./components/Home";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);
