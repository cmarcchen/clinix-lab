import { Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { PatientEvent } from "../data/patientEvent";

export function NewEventPage() {
  const navigate = useNavigate();

  const [patientEvent, setPatientEvent] = useState<PatientEvent>({
    id: "",
    title: "",
    description: "",
    eventType: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(patientEvent);

    navigate("./../..");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatientEvent({ ...patientEvent, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>New Event</h1>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3} sx={{ minWidth: 300 }}>
          <TextField
            required
            id="title"
            name="title"
            label="title"
            value={patientEvent.title}
            onChange={handleChange}
          />
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            rows={4}
            value={patientEvent.description}
            onChange={handleChange}
          />
          <TextField
            required
            id="eventType"
            name="eventType"
            label="Event Type"
            value={patientEvent.eventType}
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
