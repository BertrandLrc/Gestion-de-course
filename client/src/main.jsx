import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import connexion from "./services/connexion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      try {
        const ingredients = await connexion.get("/api/products");
        return ingredients.data;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
