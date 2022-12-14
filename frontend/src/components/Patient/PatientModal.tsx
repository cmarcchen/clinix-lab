import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { PatientForm } from "./PatientForm";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  GetPatientDocument,
  PatientInput,
  UpdatePatientDocument,
} from "../../graphql/generated";
import dayjs from "dayjs";
import { useMutation, useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
};

interface PatientModalProps {
  open: boolean;
  handleClose: any;
}

export const PatientModal: React.FC<PatientModalProps> = ({
  open,
  handleClose,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const path = "/patients/:id/*";
  const match = matchPath(path, pathname);

  const id = match?.params.id!;

  const { loading, error, data } = useQuery(GetPatientDocument, {
    variables: {
      patientId: id,
    },
  });

  const [updatePatient] = useMutation(UpdatePatientDocument, {
    onCompleted: () => {
      handleClose();
      navigate(0);
      enqueueSnackbar("Edited Patient", { variant: "success" });
    },
  });

  const [patient, setPatient] = useState<PatientInput>({
    firstName: data?.patient.firstName,
    lastName: data?.patient.lastName,
    email: data?.patient.email,
    gender: data?.patient.gender,
    jobTitle: data?.patient.jobTitle,
    dateOfBirth: data?.patient.dateOfBirth,
    address: data?.patient.address,
    pictureUrl: data?.patient.pictureUrl,
    age: data?.patient.age,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await updatePatient({
      variables: {
        updatePatientId: id,
        data: patient,
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <PatientForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          patient={patient}
          setPatient={setPatient}
        />
      </Box>
    </Modal>
  );
};
