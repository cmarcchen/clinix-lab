import * as React from "react";
import { useMutation } from "@apollo/client";
import { CreatePatientDocument } from "../graphql/generated";
import { Button } from "@mui/material";

export default function TestPage() {
  const [createPatient, { loading, error, data }] = useMutation(
    CreatePatientDocument
  );
  const handleClick = async () => {
    await createPatient();
    if (!loading) {
      console.log(data?.createPatient.patient?.id);
    }
  };
  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Create Patient
      </Button>
    </div>
  );
}
