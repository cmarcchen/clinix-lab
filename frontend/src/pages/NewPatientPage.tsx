import { PatientForm } from "./../components/Patient/PatientForm";

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { CreatePatientDocument } from "../graphql/generated";
import { PatientInput } from "../graphql/generated";

import dayjs from "dayjs";

export function NewPatientPage() {
  const navigate = useNavigate();

  const [createPatient, { loading, error, data }] = useMutation(
    CreatePatientDocument,
    {
      onCompleted: () => {
        navigate("./..");
        navigate(0);
      },
    }
  );

  const [patient, setPatient] = useState<PatientInput>({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    jobTitle: "",
    dateOfBirth: dayjs(),
    address: "",
    pictureUrl: "",
    age: null,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await createPatient({
      variables: {
        data: patient,
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-4">
      <h1>New Patient</h1>
      <PatientForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        setPatient={setPatient}
        patient={patient}
      />
    </div>
  );
}
