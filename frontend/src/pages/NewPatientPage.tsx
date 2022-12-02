import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { addPatient, Patient, Sex } from "../data/patients";
import { Button, Stack, MenuItem, TextField } from "@mui/material";

export function NewPatientPage() {
  const navigate = useNavigate();

  const [patient, setPatient] = useState<Patient>({
    id: "",
    firstName: "",
    lastName: "",
    sex: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPatient(patient);

    navigate("/patients");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  return (
    <div>
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
            <MenuItem value={Sex.female}>{Sex.female}</MenuItem>
            <MenuItem value={Sex.male}>{Sex.male}</MenuItem>
          </TextField>

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
}
