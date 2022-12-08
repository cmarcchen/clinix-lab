import { createBrowserRouter } from "react-router-dom";
import { TrialsPage } from "../pages/TrialsPage";
import { NewTrialPage } from "../pages/NewTrialPage";
import { PatientsPage } from "../pages/PatientsPage";
import { NewPatientPage } from "../pages/NewPatientPage";
import { TrialPage } from "../pages/TrialPage";
import TestPage from "../pages/TestPage";
import { PatientPage } from "../pages/PatientPage";
import { NewEventPage } from "../pages/NewEventPage";
import App from "../App";

export const router = createBrowserRouter([
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