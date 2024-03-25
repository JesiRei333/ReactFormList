//import React from 'react'
import ReactDOM from "react-dom/client";
import ListaSuper from "./pages/ListaSuper";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ListaSuper />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
