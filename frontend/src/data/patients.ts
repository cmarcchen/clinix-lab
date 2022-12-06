import { GridColDef } from "@mui/x-data-grid";

export enum Sex {
  Default = "",
  Male = "Male",
  Female = "Female",
}

export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  sex: Sex;
  email?: string;
  events?: string[];
  dateOfBirth?: string;
  age?: number;
}

export let patients: Patient[] = [
  {
    id: "1",
    firstName: "Elon",
    lastName: "Musk",
    sex: Sex.Male,
    events: ["a"],
  },
  {
    id: "2",
    firstName: "Barack",
    lastName: "Obama",
    sex: Sex.Male,
  },
  {
    id: "3",
    firstName: "Kate",
    lastName: "Middleton",
    sex: Sex.Female,
  },
];

export const addPatient = (patient: Patient): void => {
  patients = [...patients, patient];
};

export const getPatients = (): Patient[] => {
  return patients;
};

export const getPatient = (id: string): Patient => {
  const result = patients.filter((patient) => patient.id === id);
  return result[0];
};

export const patientColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "sex",
    headerName: "Sex",
    width: 90,
  },
];
