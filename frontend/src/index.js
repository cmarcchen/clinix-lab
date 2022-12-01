import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Trials } from "./pages/Trials";
import { NewTrial } from "./pages/NewTrial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "test",
        element: <h1>Test</h1>,
      },
      {
        path: "trials",
        element: <Trials />,
      },
      {
        path: "trials/new",
        element: <NewTrial />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
