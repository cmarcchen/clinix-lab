import { useQuery } from "@apollo/client";
import { Button, CircularProgress } from "@mui/material";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { EventTimeline } from "../components/Patient/EventTimeline";
import { PatientCard } from "../components/Patient/PatientCard";
import { GetPatientDocument } from "../graphql/generated";

export function PatientPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const path = "/patients/:id/*";
  const match = matchPath(path, pathname);

  const id = match?.params.id!;

  const { loading, error, data } = useQuery(GetPatientDocument, {
    variables: {
      patientId: id,
    },
  });

  const handleAddEventClick = () => {
    navigate("./events/new");
  };

  return (
    <div className="flex flex-col gap-4">
      {loading ? <CircularProgress /> : <></>}
      {data ? <PatientCard {...data.patient} /> : <></>}

      <Button variant="contained" onClick={handleAddEventClick}>
        Add Event
      </Button>

      {data ? <EventTimeline events={data.patient.events} /> : <></>}
    </div>
  );
}
