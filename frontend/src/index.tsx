import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Trials } from "./pages/Trials";
import { NewTrial } from "./pages/NewTrial";
import { Patients } from "./pages/Patients";
import { NewPatient } from "./pages/NewPatient";
import TestPage from "./pages/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "test",
        element: <TestPage />,
      },
      {
        path: "trials",
        element: <Trials />,
      },
      {
        path: "trials/new",
        element: <NewTrial />,
      },
      {
        path: "patients",
        element: <Patients />,
      },
      {
        path: "patients/new",
        element: <NewPatient />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
