import { Submit } from "./../components/Submit";

import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { addPatient, Patient } from "../data/patients";

export function NewPatient() {
  const navigate = useNavigate();

  const [patient, setPatient] = useState<Patient>({
    id: "",
    firstName: "",
    lastName: "",
    sex: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPatient(patient);

    navigate("/patients");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <Input
          placeholder="First Name"
          name="firstName"
          value={patient.firstName}
          handleChange={handleChange}
        />

        <Input
          placeholder="Last Name"
          name="lastName"
          value={patient.lastName}
          handleChange={handleChange}
        />
        <Submit />
      </form>
    </div>
  );
}
