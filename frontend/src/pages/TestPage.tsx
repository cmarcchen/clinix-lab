import { Button } from "@mui/material";
import { useSnackbar } from "notistack";
import { useContext } from "react";
import { AppCtx } from "../context/Name";

function TestPage() {
  const data = useContext(AppCtx);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleClick = () => {
    enqueueSnackbar("I love hooks", { variant: "success" });
  };

  return <Button onClick={handleClick}>Show snackbar</Button>;
}

export default TestPage;
