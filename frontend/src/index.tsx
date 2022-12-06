import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TrialsPage } from "./pages/TrialsPage";
import { NewTrialPage } from "./pages/NewTrialPage";
import { PatientsPage } from "./pages/PatientsPage";
import { NewPatientPage } from "./pages/NewPatientPage";
import { TrialPage } from "./pages/TrialPage";
import TestPage from "./pages/TestPage";
import { PatientPage } from "./pages/PatientPage";
import { NewEventPage } from "./pages/NewEventPage";

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
        element: <TrialsPage />,
      },
      {
        path: "trials/new",
        element: <NewTrialPage />,
      },
      {
        path: "trials/:id",
        element: <TrialPage />,
      },
      {
        path: "patients",
        element: <PatientsPage />,
      },
      {
        path: "patients/new",
        element: <NewPatientPage />,
      },
      {
        path: "patients/:id",
        element: <PatientPage />,
      },
      {
        path: "patients/:id/events/new",
        element: <NewEventPage />,
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
