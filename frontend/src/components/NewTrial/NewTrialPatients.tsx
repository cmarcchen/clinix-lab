import PatientsTable from "../Patient/PatientsTable";
import React from "react";
import { DataGridProps, GridSelectionModel } from "@mui/x-data-grid";
import { useQuery } from "@apollo/client";
import { GetPatientsDocument } from "../../graphql/generated";
import { Alert, CircularProgress } from "@mui/material";

interface NewTrialPatientsProps {
  selectionModel: DataGridProps["selectionModel"];
  handleSelectionModelChange: DataGridProps["onSelectionModelChange"];
}

const NewTrialPatients: React.FC<NewTrialPatientsProps> = ({
  selectionModel,
  handleSelectionModelChange,
}) => {
  const { loading, error, data } = useQuery(GetPatientsDocument);

  return (
    <>
      {loading ? <CircularProgress /> : <></>}
      {error ? <Alert severity="error">Something went wrong</Alert> : <></>}
      {data ? (
        <div className="h-[30rem]">
          <PatientsTable
            data={data}
            checkboxSelection
            selectionModel={selectionModel}
            handleSelectionModelChange={handleSelectionModelChange}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default NewTrialPatients;
