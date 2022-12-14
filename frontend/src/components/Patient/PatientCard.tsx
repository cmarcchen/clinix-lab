import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { GetPatientQuery } from "../../graphql/generated";
import { PatientModal } from "./PatientModal";

export const PatientCard: React.FC<GetPatientQuery["patient"]> = ({
  firstName,
  lastName,
  jobTitle,
  email,
  gender,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {jobTitle}
        </Typography>
        <Typography variant="h5" component="div">
          {`${firstName} ${lastName}`}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {email}
        </Typography>
        <Typography variant="body2">{gender}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpen}>
          Edit Patient
        </Button>
      </CardActions>
      <PatientModal open={open} handleClose={handleClose} />
    </Card>
  );
};
