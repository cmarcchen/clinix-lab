import React from "react";
import { matchPath, useLocation } from "react-router-dom";
import { getTrial } from "../data/trials";

export function TrialPage() {
  const { pathname } = useLocation();
  const path = "/trials/:id/*";
  const match = matchPath(path, pathname);
  console.log(match?.params.id);
  const id = match?.params.id!;
  console.log(getTrial(id));
  return <div className="">TrialPage</div>;
}
