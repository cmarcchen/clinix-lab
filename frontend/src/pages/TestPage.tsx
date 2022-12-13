import { useContext } from "react";
import { AppCtx } from "../context/Name";

function TestPage() {
  const data = useContext(AppCtx);
  return <h1>{data?.name}</h1>;
}

export default TestPage;
