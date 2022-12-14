import { PatientsTable } from "../components/Patient/PatientsTable";

import { Alert, Typography, Button, CircularProgress } from "@mui/material";

import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GetPatientsDocument } from "../graphql/generated";

export function PatientsPage() {
  const { loading, error, data } = useQuery(GetPatientsDocument);

  return (
    <div className="min-w-full min-h-[36rem] flex flex-col gap-4">
      <Typography>Patients</Typography>

      <Link to="./new">
        <Button variant="contained">New</Button>
      </Link>

      {loading ? <CircularProgress /> : <></>}
      {error ? <Alert severity="error">Failed to fetch</Alert> : <></>}
      {data ? <PatientsTable data={data} /> : <></>}
    </div>
  );
}
