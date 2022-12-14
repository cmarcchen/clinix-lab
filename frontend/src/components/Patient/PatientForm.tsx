import React from "react";
import { Button, Stack, TextField, MenuItem } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface PatientFormProps {
  handleSubmit: any;
  handleChange: any;
  setPatient: any;
  patient: any;
}

export const PatientForm: React.FC<PatientFormProps> = ({
  handleSubmit,
  handleChange,
  setPatient,
  patient,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Stack
        spacing={3}
        sx={{
          minWidth: 300,
        }}
      >
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
  );
};
