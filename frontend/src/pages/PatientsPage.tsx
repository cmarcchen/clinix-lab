import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPatients, Patient, patientColumns, Sex } from "../data/patients";
import { DataGrid } from "@mui/x-data-grid";

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
          columns={patientColumns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
