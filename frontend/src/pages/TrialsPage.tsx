import { Link } from "react-router-dom";
import { Button, CircularProgress, Typography } from "@mui/material";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GetTrialsDocument } from "../graphql/generated";
import { TrialCard } from "../components/TrialCard";
import Alert from "@mui/material/Alert";
import { useEffect } from "react";

export function TrialsPage() {
  const { loading, error, data } = useQuery(GetTrialsDocument);

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
