import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { EventTimeline } from "../components/EventTimeline";
import { PatientCard } from "../components/PatientCard";
import { getPatientEvents, PatientEvent } from "../data/patientEvent";

import { getPatient, Patient, Sex } from "../data/patients";

export function PatientPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [patient, setPatient] = useState<Patient>({
    id: "",
    firstName: "",
    lastName: "",
    sex: Sex.Default,
  });

  const [patientEvents, setPatientEvents] = useState<PatientEvent[]>([]);

  useEffect(() => {
    const path = "/patients/:id/*";
    const match = matchPath(path, pathname);

    const id = match?.params.id!;

    setPatient(getPatient(id));
  }, [pathname]);

  useEffect(() => {
    const { events } = patient;

    setPatientEvents(getPatientEvents(events));
  }, [patient]);

  const handleAddEventClick = () => {
    navigate("./events/new");
  };

  return (
    <div className="">
      <PatientCard {...patient} />
      <div className="">
        <Button variant="contained" onClick={handleAddEventClick}>
          Add Event
        </Button>
        <EventTimeline events={patientEvents} />
      </div>
    </div>
  );
}
