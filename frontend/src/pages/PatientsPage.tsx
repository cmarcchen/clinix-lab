import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPatients, Patient, Sex } from "../data/patients";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "sex",
    headerName: "Sex",
    width: 90,
  },
];

export function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([
    {
      firstName: "",
      lastName: "",
      id: "",
      sex: Sex.Default,
    },
  ]);

  useEffect(() => {
    setPatients(getPatients());
  }, []);
  return (
    <div className="m-2 w-full">
      <h1>Patients</h1>
      <Link to="./new">
        <Button variant="contained">New</Button>
      </Link>
      <div className="h-2/3">
        <DataGrid
          rows={patients}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
