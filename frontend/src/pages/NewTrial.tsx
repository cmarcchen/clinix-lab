import { TextArea } from "../components/TextArea";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export function NewTrial() {
  const navigate = useNavigate();

  const [trial, setTrial] = useState({
    shortDescription: "",
    longDescription: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/trials");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrial({ ...trial, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <Input
          placeholder="Short Description"
          name="shortDescription"
          value={trial.shortDescription}
          handleChange={handleChange}
        />
        <TextArea
          placeholder="Long Description"
          name="longDescription"
          value={trial.longDescription}
          handleChange={handleChange}
        />

        <input className="border bg-blue-700" type="submit" value="Submit" />
      </form>
    </div>
  );
}
