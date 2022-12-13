import { Button, CircularProgress, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { CreateTrialDocument, TrialInput } from "../graphql/generated";
import { useSnackbar } from "notistack";

export function NewTrialPage() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [createTrial, { loading, error, data }] = useMutation(
    CreateTrialDocument,
    {
      onCompleted: () => {
        enqueueSnackbar("Created Trial", { variant: "success" });

        navigate("./..");
      },
    }
  );

  const [trial, setTrial] = useState<TrialInput>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await createTrial({
      variables: {
        data: trial,
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrial({ ...trial, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>New Trial</h1>
      {loading ? <CircularProgress /> : <></>}
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
