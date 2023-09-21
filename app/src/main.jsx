import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Riches from "./Riches.jsx";
import RichPage from "./RichPage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/riches",
    element: <Riches />,
  },
  {
    path: "/riches/:id",
    element: <RichPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
