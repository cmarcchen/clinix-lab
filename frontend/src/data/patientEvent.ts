interface patientEvent {
  id: string;
  title?: string;
  description?: string;
  dateTime?: string;
  eventType?: string;
  createdBy?: string;
}

export let patientEvents: patientEvent[] = [
  {
    id: "a",
    title: "test",
    description: "test",
    eventType: "Add in trial",
    createdBy: "Dr. ABCD",
  },
];

export const addPatientData = (patientEvent: patientEvent): void => {
  patientEvents = [...patientEvents, patientEvent];
};
