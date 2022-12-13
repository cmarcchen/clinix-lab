import Button from "@mui/material/Button";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect, ReactNode } from "react";

import { useQuery } from "@apollo/client";
import { GetPatientsDocument } from "../graphql/generated";
import { CircularProgress } from "@mui/material";

const patientColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    renderCell: (params: GridRenderCellParams<String>): ReactNode => (
      <Link
        to={`./${params.value}`}
        className="text-blue-600 underline hover:text-blue-800"
      >
        {params.value?.substring(0, 10)}
      </Link>
    ),
  },
  { field: "firstName", headerName: "First Name" },
  { field: "lastName", headerName: "Last Name" },
  { field: "sex", headerName: "Sex" },
];

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

      {data ? (
        <DataGrid
          rows={data?.patients!}
          columns={patientColumns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
