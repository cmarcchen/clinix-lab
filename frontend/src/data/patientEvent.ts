export interface PatientEvent {
  id: string;
  title?: string;
  description?: string;
  dateTime?: string;
  eventType?: string;
  createdBy?: string;
}

export let patientEvents: PatientEvent[] = [
  {
    id: "a",
    title: "test",
    description: "test",
    eventType: "Add in trial",
    createdBy: "Dr. ABCD",
  },
];

export const addPatientData = (patientEvent: PatientEvent): void => {
  patientEvents = [...patientEvents, patientEvent];
};

export const getPatientEvents = (
  eventList: string[] | undefined
): PatientEvent[] => {
  if (eventList === undefined) {
    return [];
  }
  return patientEvents.filter((patientEvent) =>
    eventList.includes(patientEvent.id)
  );
};
