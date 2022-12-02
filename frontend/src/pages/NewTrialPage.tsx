import { Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { addTrial } from "../data/trials";

export function NewTrialPage() {
  const navigate = useNavigate();

  const [trial, setTrial] = useState({
    id: "",
    title: "",
    description: "",
    product: "",
    formulation: "",
    creationDate: "",
    startDate: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTrial(trial);

    navigate("/trials");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrial({ ...trial, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>New Trial</h1>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3} sx={{ minWidth: 300 }}>
          <TextField
            required
            id="title"
            name="title"
            label="title"
            value={trial.title}
            onChange={handleChange}
          />
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            rows={4}
            value={trial.description}
            onChange={handleChange}
          />
          <TextField
            required
            id="product"
            name="product"
            label="Product"
            value={trial.product}
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
