import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPatients, Patient, patientColumns, Sex } from "../data/patients";
import { DataGrid, GridSelectionModel } from "@mui/x-data-grid";

export function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([
    {
      firstName: "",
      lastName: "",
      id: "",
      sex: Sex.Default,
    },
  ]);

  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

  const [disableEdit, setDisableEdit] = useState<boolean>(true);

  useEffect(() => {
    if (selectionModel.length > 0) {
      setDisableEdit(false);
    } else {
      setDisableEdit(true);
    }
  }, [selectionModel]);

  const getEditLink = () => {
    const link = selectionModel[0] ? `./${selectionModel[0]}` : ".";
    console.log(link);
    return link;
  };

  useEffect(() => {
    setPatients(getPatients());
  }, []);
  return (
    <div className="m-2 w-full">
      <h1>Patients</h1>
      <div className="flex space-x-4">
        <Link to="./new">
          <Button variant="contained">New</Button>
        </Link>
        <Link to={getEditLink()}>
          <Button disabled={disableEdit} variant="contained">
            Edit
          </Button>
        </Link>
      </div>
      <div className="h-2/3">
        <DataGrid
          rows={patients}
          columns={patientColumns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
        />
      </div>
    </div>
  );
}
