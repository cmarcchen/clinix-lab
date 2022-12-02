import React from "react";
import TextField from "@mui/material/TextField";

interface InputProps {
  handleChange: any;
  name: string;
  value: string;
}
export const Input: React.FC<InputProps> = ({ handleChange, name, value }) => {
  return <TextField label={name} value={value} onChange={handleChange} />;
};
