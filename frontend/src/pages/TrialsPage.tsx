import React from "react";
import { trials } from "../data/trials";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { DataGrid, GridColDef, GridSelectionModel } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 130 },
  { field: "description", headerName: "Description", width: 130 },
  {
    field: "product",
    headerName: "Product",
    width: 90,
  },
];

export function TrialsPage() {
  const [selectionModel, setSelectionModel] =
    React.useState<GridSelectionModel>([]);

  const [disableEdit, setDisableEdit] = React.useState<boolean>(true);

  React.useEffect(() => {
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
      <h1>Trials</h1>
      <div className="flex space-x-3">
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
          rows={trials}
          columns={columns}
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
