import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { PatientEvent } from "../data/patientEvent";

interface EventTimelineProps {
  events: PatientEvent[];
}

export const EventTimeline: React.FC<EventTimelineProps> = ({ events }) => {
  return (
    <Timeline>
      {events.map(({ id, title }) => {
        return (
          <TimelineItem key={id}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{title}</TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};
