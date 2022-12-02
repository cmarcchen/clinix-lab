export enum Sex {
  male = "male",
  female = "female",
}

export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  sex: Sex | string;
}

export const patients: Patient[] = [
  {
    id: "1",
    firstName: "Anna",
    lastName: "Kingston",
    sex: Sex.male,
  },
  {
    id: "2",
    firstName: "John",
    lastName: "Bell",
    sex: Sex.female,
  },
  {
    id: "3",
    firstName: "Victor",
    lastName: "Kasparov",
    sex: Sex.female,
  },
];

export const addPatient = (patient: Patient): void => {
  patients.push(patient);
};
