import { Link } from "react-router-dom";
import { Button, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GetTrialsDocument } from "../graphql/generated";
import { TrialCard } from "../components/Trial/TrialCard";
import Alert from "@mui/material/Alert";
import { useEffect } from "react";

export function TrialsPage() {
  const { loading, error, data } = useQuery(GetTrialsDocument);

  return (
    <div className="w-full flex flex-col gap-4">
      <Typography>Trials</Typography>
      <div className="flex space-x-3">
        <Link to="./new">
          <Button variant="contained">New</Button>
        </Link>
      </div>

      {error ? <Alert severity="error">{error.message}</Alert> : <></>}
      {loading ? <CircularProgress /> : <></>}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data ? (
          data.trials.map((trial) => {
            return <TrialCard key={trial!.id} {...trial!} />;
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
