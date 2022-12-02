import { Submit } from "./../components/Submit";
import { TextArea } from "../components/TextArea";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { addTrial } from "../data/trials";

export function NewTrial() {
  const navigate = useNavigate();

  const [trial, setTrial] = useState({
    id: "",
    shortDescription: "",
    longDescription: "",
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
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <Input
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
        <Input
          name="product"
          value={trial.product}
          handleChange={handleChange}
        />
        <Input
          name="formulation"
          value={trial.formulation}
          handleChange={handleChange}
        />

        <Submit />
      </form>
    </div>
  );
}
