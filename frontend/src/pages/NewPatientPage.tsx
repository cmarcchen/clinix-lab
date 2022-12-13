import { Button, Stack, TextField, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { CreatePatientDocument } from "../graphql/generated";
import { PatientInput } from "../graphql/generated";

export function NewPatientPage() {
  const navigate = useNavigate();

  const [createPatient, { loading, error, data }] = useMutation(
    CreatePatientDocument
  );

  const [patient, setPatient] = useState<PatientInput>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createPatient({
      variables: {
        data: patient,
      },
    });

    if (!loading) {
      navigate("./..");
      navigate(0);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>New Trial</h1>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3} sx={{ minWidth: 300 }}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First Name"
            value={patient.firstName}
            onChange={handleChange}
          />
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last Name"
            value={patient.lastName}
            onChange={handleChange}
          />
          <TextField
            select
            required
            id="sex"
            name="sex"
            label="Sex"
            value={patient.sex}
            onChange={handleChange}
          >
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
          </TextField>

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
}
