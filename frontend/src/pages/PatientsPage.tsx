import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { patientColumns } from "../data/patients";
import { DataGrid, GridSelectionModel } from "@mui/x-data-grid";
import { useQuery } from "@apollo/client";
import { GetPatientsDocument } from "../graphql/generated";

export function PatientsPage() {
  const { loading, error, data } = useQuery(GetPatientsDocument);

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
          rows={data?.patients!}
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
