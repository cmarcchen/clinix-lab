import React, { useState, useEffect } from "react";
import { matchPath, useLocation } from "react-router-dom";
import { getTrial } from "../data/trials";
import { TrialCard } from "../components/TrialCard";
import { Trial } from "../data/trials";
import { getPatients, Patient, patientColumns, Sex } from "../data/patients";
import { DataGrid, GridSelectionModel } from "@mui/x-data-grid";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

export function TrialPage() {
  const { pathname } = useLocation();
  const [selectionModel, setSelectionModel] =
    React.useState<GridSelectionModel>([]);

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
    if (!enableEditPatients) {
      setPatients(
        getPatients().filter((patient) => {
          return trial.patients.includes(patient.id);
        })
      );
    }

    if (enableEditPatients) {
      setPatients(getPatients());
    }
  }, [trial, enableEditPatients]);

  useEffect(() => {
    setSelectionModel(trial.patients);
  }, [trial]);

  // useEffect(() => {
  //   if (!enableEditPatients) {
  //     setTrial({
  //       ...trial,
  //       patients: selectionModel.map((id) => id as string),
  //     });
  //   }
  // }, [enableEditPatients]);

  const handleSwitchChange = () => {
    setEnableEditPatients(!enableEditPatients);
    setTrial({ ...trial, patients: selectionModel.map((id) => id as string) });
  };

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
                onChange={handleSwitchChange}
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
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
        />
      </div>
    </div>
  );
}
