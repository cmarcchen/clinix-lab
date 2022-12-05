import { trials } from "../data/trials";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

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
  return (
    <div className="m-2 w-full">
      <h1>Trials</h1>
      <Link to="./new">
        <Button variant="contained">New</Button>
      </Link>

      <div className="h-2/3">
        <DataGrid
          rows={trials}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
