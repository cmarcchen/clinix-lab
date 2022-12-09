import React from "react";
import { Link } from "react-router-dom";
import { Button, CircularProgress, Typography } from "@mui/material";
import { GridColDef, GridSelectionModel } from "@mui/x-data-grid";
import { useQuery } from "@apollo/client";
import { GetTrialsDocument } from "../graphql/generated";
import { TrialCard } from "../components/TrialCard";

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
  const { loading, error, data } = useQuery(GetTrialsDocument);

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

    return link;
  };
  return (
    <div className="w-full">
      <Typography
        sx={{
          marginBottom: "20px",
        }}
      >
        Trials
      </Typography>
      <div className="flex space-x-3 mb-10">
        <Link to="./new">
          <Button variant="contained">New</Button>
        </Link>
        <Link to={getEditLink()}>
          <Button disabled={disableEdit} variant="contained">
            Edit
          </Button>
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <CircularProgress />
        ) : (
          data?.trials.map((trial) => {
            return <TrialCard key={trial!.id} {...trial!} />;
          })
        )}
      </div>
    </div>
  );
}
