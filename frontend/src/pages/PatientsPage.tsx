import { PatientsTable } from "./../components/PatientsTable";
import { CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GetPatientsDocument } from "../graphql/generated";

export function PatientsPage() {
  const { loading, error, data } = useQuery(GetPatientsDocument);

  return (
    <div className="min-w-full h-[36rem]">
      <h1 className="mb-2">Patients</h1>
      <div className="mb-4">
        <Link to="./new">
          <Button variant="contained">New</Button>
        </Link>
      </div>

      {loading ? <CircularProgress /> : <></>}

      {data ? <PatientsTable data={data} /> : <></>}
    </div>
  );
}
