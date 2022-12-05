import React, { useState, useEffect } from "react";
import { matchPath, useLocation } from "react-router-dom";
import { getTrial } from "../data/trials";
import { TrialCard } from "../components/TrialCard";
import { Trial } from "../data/trials";
import { getPatients, Patient, patientColumns, Sex } from "../data/patients";
import { DataGrid } from "@mui/x-data-grid";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

export function TrialPage() {
  const { pathname } = useLocation();
  const [trial, setTrial] = useState<Trial>({
    id: "",
    creationDate: "",
    description: "",
    formulation: "",
    product: "",
    title: "",
    patients: [],
  });
  const [patients, setPatients] = useState<Patient[]>([
    {
      firstName: "",
      lastName: "",
      id: "",
      sex: Sex.Default,
    },
  ]);
  const [enableEditPatients, setEnableEditPatients] = useState<boolean>(false);

  useEffect(() => {
    const path = "/trials/:id/*";
    const match = matchPath(path, pathname);

    const id = match?.params.id!;

    setTrial(getTrial(id));
  }, [pathname]);

  useEffect(() => {
    setPatients(
      getPatients().filter((patient) => {
        return trial.patients.includes(patient.id);
      })
    );
  }, [trial]);

  return (
    <div className="">
      TrialPage
      <TrialCard {...trial} />
      <div className="h-2/3">
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={enableEditPatients}
                onChange={() => setEnableEditPatients(!enableEditPatients)}
              />
            }
            label="Edit Patients"
          />
        </FormGroup>
        <DataGrid
          rows={patients}
          columns={patientColumns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection={enableEditPatients}
        />
      </div>
    </div>
  );
}
