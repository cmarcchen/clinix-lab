import { NewTrialForm } from "./../components/NewTrial/NewTrialForm";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CreateTrialDocument, TrialInput } from "../graphql/generated";
import { useSnackbar } from "notistack";
import NewTrialStepper from "../components/NewTrial/NewTrialStepper";
import NewTrialManager from "../components/NewTrial/NewTrialManager";
import NewTrialPatients from "../components/NewTrial/NewTrialPatients";
import { GridSelectionModel } from "@mui/x-data-grid";

export function NewTrialPage() {
  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <NewTrialForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            trial={trial}
          />
        );
      case 1:
        return <NewTrialManager />;
      case 2:
        return (
          <NewTrialPatients
            handleSelectionModelChange={handleSelectionModelChange}
            selectionModel={selectionModel}
          />
        );
      default:
        break;
    }
  };

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [selectionModel, setSelectionModel] =
    React.useState<GridSelectionModel>([]);

  const handleSelectionModelChange = (
    newSelectionModel: GridSelectionModel
  ) => {
    console.log(selectionModel);
    setSelectionModel(newSelectionModel);
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const [createTrial, { loading, error, data }] = useMutation(
    CreateTrialDocument,
    {
      onCompleted: () => {
        enqueueSnackbar("Created Trial", { variant: "success" });

        navigate("./..");
      },
    }
  );

  const [trial, setTrial] = useState<TrialInput>({
    title: "",
    product: "",
    description: "",
    formulation: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleFinish = async () => {
    const response = await createTrial({
      variables: {
        data: trial,
        patientsId: selectionModel as string[],
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrial({ ...trial, [e.target.name]: e.target.value });
  };

  const isStepOptional = (step: number) => {
    return step === (1 || 2);
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="w-full">
      <h1>New Trial</h1>

      {loading ? <CircularProgress /> : <></>}

      <NewTrialStepper
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}
        handleReset={handleReset}
        handleSkip={handleSkip}
        isStepOptional={isStepOptional}
        isStepSkipped={isStepSkipped}
        handleFinish={handleFinish}
      />
      {renderStep()}
    </div>
  );
}
