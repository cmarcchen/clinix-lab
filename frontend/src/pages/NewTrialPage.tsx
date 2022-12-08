import { Button, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { CreateTrialDocument, Trial, TrialInput } from "../graphql/generated";

export function NewTrialPage() {
  const navigate = useNavigate();

  const [createTrial, { loading, error, data }] =
    useMutation(CreateTrialDocument);

  const [trial, setTrial] = useState<TrialInput>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await createTrial({
      variables: {
        data: trial,
      },
    });

    if (!loading) {
      navigate("./..");
    }
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
