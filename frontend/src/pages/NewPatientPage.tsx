import { Button, Stack, TextField, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { CreatePatientDocument } from "../graphql/generated";
import { PatientInput } from "../graphql/generated";

import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export function NewPatientPage() {
  const navigate = useNavigate();

  const [createPatient, { loading, error, data }] = useMutation(
    CreatePatientDocument,
    {
      onCompleted: () => {
        navigate("./..");
        navigate(0);
      },
    }
  );

  const [patient, setPatient] = useState<PatientInput>({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    jobTitle: "",
    dateOfBirth: dayjs(),
    address: "",
    pictureUrl: "",
    age: null,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await createPatient({
      variables: {
        data: patient,
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-4">
      <h1>New Patient</h1>
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
            required
            id="email"
            name="email"
            label="Email"
            value={patient.email}
            onChange={handleChange}
          />
          <TextField
            select
            required
            id="gender"
            name="gender"
            label="Gender"
            value={patient.gender}
            onChange={handleChange}
          >
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
          </TextField>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date Of Birth"
              value={patient.dateOfBirth}
              onChange={(newValue) => {
                setPatient({ ...patient, dateOfBirth: newValue });
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <TextField
            id="jobTitle"
            name="jobTitle"
            label="Job Title"
            value={patient.jobTitle}
            onChange={handleChange}
          />
          <TextField
            id="address"
            name="address"
            label="Address"
            value={patient.address}
            onChange={handleChange}
          />

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  );
}
