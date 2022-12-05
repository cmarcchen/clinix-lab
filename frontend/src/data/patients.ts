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
}

export let patients: Patient[] = [];

export const addPatient = (patient: Patient): void => {
  patients = [...patients, patient];
};

export const getPatients = (): Patient[] => {
  return patients;
};
