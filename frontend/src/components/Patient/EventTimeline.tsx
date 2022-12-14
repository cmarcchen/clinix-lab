import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { GetPatientQuery, PatientEvent } from "../../graphql/generated";
import { Alert } from "@mui/material";

interface EventTimelineProps {
  events: GetPatientQuery["patient"]["events"];
}

export const EventTimeline: React.FC<EventTimelineProps> = ({ events }) => {
  return (
    <>
      {events?.length ? (
        <Timeline>
          {events.map((event) => {
            return (
              <TimelineItem key={event?.id}>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{event?.title}</TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      ) : (
        <Alert severity="info">No Events Found</Alert>
      )}
    </>
  );
};
