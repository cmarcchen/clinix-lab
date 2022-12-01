import { TableCard } from "./../components/TableCard";
import { Button } from "../components/Button";
import { trials } from "../data/trials";
import { Link } from "react-router-dom";

export function Trials() {
  return (
    <div className="m-2">
      <h1>Trials</h1>
      <Link to="./new">
        <Button>New</Button>
      </Link>

      {trials.map(({ id, longDescription, shortDescription }) => {
        return (
          <TableCard
            key={id}
            longDescription={longDescription}
            shortDescription={shortDescription}
          />
        );
      })}
    </div>
  );
}
