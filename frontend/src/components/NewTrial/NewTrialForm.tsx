import React, { ChangeEventHandler, FormEventHandler } from "react";
import { Stack } from "@mui/system";
import { TextField, Button } from "@mui/material";
import { TrialInput } from "../../graphql/generated";

interface NewTrialFormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  trial: TrialInput;
}

export const NewTrialForm: React.FC<NewTrialFormProps> = ({
  handleSubmit,
  handleChange,
  trial,
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
  );
};

export default NewTrialForm;
