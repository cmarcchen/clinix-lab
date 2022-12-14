import * as React from "react";
import Box from "@mui/material/Box";
import Stepper, { StepperProps } from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button, { ButtonProps } from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const steps = [
  "General Information",
  "Assign a project manager and an investigator",
  "Assign a list of patients",
];

interface NewTrialStepperProps {
  activeStep: number;
  handleNext: ButtonProps["onClick"];
  handleBack: ButtonProps["onClick"];
  handleSkip: ButtonProps["onClick"];
  isStepOptional: (index: number) => boolean;
  isStepSkipped: (index: number) => boolean;
  handleReset: ButtonProps["onClick"];
  handleFinish: any;
}

export const NewTrialStepper: React.FC<NewTrialStepperProps> = ({
  activeStep,
  handleNext,
  handleBack,
  handleSkip,
  isStepOptional,
  isStepSkipped,
  handleReset,
  handleFinish,
}) => {
  React.useEffect(() => {
    if (activeStep === steps.length) {
      handleFinish();
    }
  }, [activeStep]);
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default NewTrialStepper;
