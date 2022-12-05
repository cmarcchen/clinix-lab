import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Sex } from "../data/patients";

interface PatientCardProps {
  id: string;
  firstName: string;
  lastName: string;
  sex: Sex;
}

export const PatientCard: React.FC<PatientCardProps> = ({
  id,
  firstName,
  lastName,
  sex,
}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Trial
        </Typography>
        <Typography variant="h5" component="div">
          {firstName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {id}
        </Typography>
        <Typography variant="body2">{lastName}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit Patient</Button>
      </CardActions>
    </Card>
  );
};
