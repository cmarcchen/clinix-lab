import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";
import { GetPatientsDocument } from "../graphql/generated";
import { CircularProgress } from "@mui/material";

export function PatientsPage() {
  const { loading, error, data } = useQuery(GetPatientsDocument);

  const [disableEdit, setDisableEdit] = useState<boolean>(true);

  return (
    <div className="">
      <h1>Patients</h1>
      <div className="flex space-x-4">
        <Link to="./new">
          <Button variant="contained">New</Button>
        </Link>
      </div>

      {loading ? (
        <CircularProgress />
      ) : (
        <div className="">Hello</div>
        // <DataGrid
        //   rows={data?.patients!}
        //   columns={patientColumns}
        //   pageSize={10}
        //   rowsPerPageOptions={[10]}
        //   checkboxSelection
        //   onSelectionModelChange={(newSelectionModel) => {
        //     setSelectionModel(newSelectionModel);
        //   }}
        //   selectionModel={selectionModel}
        // />
      )}
    </div>
  );
}
