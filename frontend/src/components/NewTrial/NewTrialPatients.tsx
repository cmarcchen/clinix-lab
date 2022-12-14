import PatientsTable from "../PatientsTable";

import { useQuery } from "@apollo/client";
import { GetPatientsDocument } from "../../graphql/generated";
import { Alert, CircularProgress } from "@mui/material";

function NewTrialPatients() {
  const { loading, error, data } = useQuery(GetPatientsDocument);

  return (
    <>
      {loading ? <CircularProgress /> : <></>}
      {error ? <Alert severity="error">Something went wrong</Alert> : <></>}
      {data ? (
        <div className="h-[30rem]">
          <PatientsTable data={data} checkboxSelection />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default NewTrialPatients;
