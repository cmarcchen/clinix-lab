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

      {trials.map((trial) => {
        return (
          <div className="flex border gap-2 flex-col">
            <h2 className="font-bold">{trial.short_description}</h2>
            <p>{trial.long_description}</p>
          </div>
        );
      })}
    </div>
  );
}
