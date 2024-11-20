import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";

import NavBar from "./Components/NavBar";
import HomePage from "./Pages/Home";
import Details from "./Pages/Details";


const Layout = () => (
  <div>
    <NavBar /> 
    <Outlet /> 
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        path: "/", 
        element: <HomePage />,
      },
      {
        path: "details/:countryCode",
        element: <Details />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
