import React, { useState, useEffect } from "react";
import { matchPath, useLocation } from "react-router-dom";
import { TrialCard } from "../components/Trial/TrialCard";
import { DataGrid, GridSelectionModel } from "@mui/x-data-grid";
import {
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Switch,
} from "@mui/material";
import { useQuery } from "@apollo/client";
import { GetTrialDocument } from "../graphql/generated";

export function TrialPage() {
  const { pathname } = useLocation();
  const path = "/trials/:id/*";
  const match = matchPath(path, pathname);

  const id = match?.params.id!;

  const { loading, error, data } = useQuery(GetTrialDocument, {
    variables: {
      trialId: id,
    },
  });

  const [selectionModel, setSelectionModel] =
    React.useState<GridSelectionModel>([]);

  const [enableEditPatients, setEnableEditPatients] = useState<boolean>(false);

  // useEffect(() => {
  //   if (!enableEditPatients) {
  //     setPatients(
  //       getPatients().filter((patient) => {
  //         return trial.patients.includes(patient.id);
  //       })
  //     );
  //   }

  //   if (enableEditPatients) {
  //     setPatients(getPatients());
  //   }
  // }, [trial, enableEditPatients]);

  // useEffect(() => {
  //   setSelectionModel(trial.patients);
  // }, [trial]);

  // useEffect(() => {
  //   if (!enableEditPatients) {
  //     setTrial({
  //       ...trial,
  //       patients: selectionModel.map((id) => id as string),
  //     });
  //   }
  // }, [enableEditPatients]);

  // const handleSwitchChange = () => {
  //   setEnableEditPatients(!enableEditPatients);
  //   setTrial({ ...trial, patients: selectionModel.map((id) => id as string) });
  // };

  return (
    <div className="">
      TrialPage
      {loading ? <CircularProgress /> : <TrialCard {...data!.trial} />}
      {/* <div className="h-2/3">
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
      </div> */}
    </div>
  );
}
