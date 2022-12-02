import { TableCard } from "./../components/TableCard";
import Button from "@mui/material/Button";
import { patients } from "../data/patients";
import { Link } from "react-router-dom";

export function Patients() {
  return (
    <div className="m-2">
      <h1>Patients</h1>
      <Link to="./new">
        <Button variant="contained">New</Button>
      </Link>

      {patients.map(({ id, firstName, lastName }) => {
        return (
          <TableCard
            key={id}
            longDescription={firstName}
            shortDescription={lastName}
          />
        );
      })}
    </div>
  );
}
