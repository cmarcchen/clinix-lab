import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { matchPath, useLocation } from "react-router-dom";
import { PatientCard } from "../components/PatientCard";

import { getPatient, Patient, Sex } from "../data/patients";
import TestPage from "./TestPage";

export function PatientPage() {
  const { pathname } = useLocation();

  const [patient, setPatient] = useState<Patient>({
    id: "",
    firstName: "",
    lastName: "",
    sex: Sex.Default,
  });

  useEffect(() => {
    const path = "/patients/:id/*";
    const match = matchPath(path, pathname);

    const id = match?.params.id!;

    setPatient(getPatient(id));
  }, [pathname]);

  return (
    <div className="">
      <PatientCard {...patient} />
      <div className="">
        <Button variant="contained">Add Event</Button>
        <TestPage />
      </div>
    </div>
  );
}
