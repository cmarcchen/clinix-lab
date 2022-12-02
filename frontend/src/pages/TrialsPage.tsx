import { TableCard } from "../components/TableCard";

import { trials } from "../data/trials";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export function TrialsPage() {
  return (
    <div className="m-2">
      <h1>Trials</h1>
      <Link to="./new">
        <Button variant="contained">New</Button>
      </Link>

      {trials.map(({ id, title, description }) => {
        return (
          <TableCard
            key={id}
            shortDescription={title}
            longDescription={description}
          />
        );
      })}
    </div>
  );
}
