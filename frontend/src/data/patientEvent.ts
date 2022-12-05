interface patientEvent {
  id: string;
  patientId: string;
  title: string;
  description: string;
  eventType: string;
}

export let patientEvents: patientEvent[] = [
  {
    id: "a",
    patientId: "1",
    title: "test",
    description: "test",
    eventType: "Add in trial",
  },
];

export const addPatientData = (patientEvent: patientEvent): void => {
  patientEvents = [...patientEvents, patientEvent];
};
