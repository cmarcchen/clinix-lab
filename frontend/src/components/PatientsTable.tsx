import React from "react";
import {
  DataGrid,
  DataGridProps,
  GridColDef,
  GridRenderCellParams,
  GridSelectionModel,
} from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { GetPatientsQuery } from "../graphql/generated";

const patientColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    renderCell: (params: GridRenderCellParams<String>): React.ReactNode => (
      <Link
        to={`/patients/${params.value}`}
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

interface PatientsTableProps {
  data: GetPatientsQuery;
  checkboxSelection?: DataGridProps["checkboxSelection"];
}

export const PatientsTable: React.FC<PatientsTableProps> = ({
  data,
  checkboxSelection,
}) => {
  const [selectionModel, setSelectionModel] =
    React.useState<GridSelectionModel>([]);

  return (
    <DataGrid
      checkboxSelection={checkboxSelection}
      rows={data?.patients!}
      columns={patientColumns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      onSelectionModelChange={(newSelectionModel) => {
        setSelectionModel(newSelectionModel);
        console.log(newSelectionModel);
      }}
      selectionModel={selectionModel}
    />
  );
};

export default PatientsTable;
