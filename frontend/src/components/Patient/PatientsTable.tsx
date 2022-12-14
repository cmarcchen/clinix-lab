import React from "react";
import {
  DataGrid,
  DataGridProps,
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { GetPatientsQuery } from "../../graphql/generated";

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
  { field: "gender", headerName: "Gender" },
  {
    field: "dateOfBirth",
    headerName: "Date Of Birth",
    width: 120,
  },
  { field: "email", headerName: "Email", width: 240 },
  { field: "jobTitle", headerName: "Job Title", width: 200 },
  { field: "address", headerName: "Address", width: 320 },
];

interface PatientsTableProps {
  data: GetPatientsQuery;
  checkboxSelection?: DataGridProps["checkboxSelection"];
  selectionModel?: DataGridProps["selectionModel"];
  handleSelectionModelChange?: DataGridProps["onSelectionModelChange"];
}

export const PatientsTable: React.FC<PatientsTableProps> = ({
  data,
  checkboxSelection,
  selectionModel,
  handleSelectionModelChange,
}) => {
  return (
    <DataGrid
      checkboxSelection={checkboxSelection}
      rows={data?.patients!}
      columns={patientColumns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      onSelectionModelChange={handleSelectionModelChange}
      selectionModel={selectionModel}
    />
  );
};

export default PatientsTable;
