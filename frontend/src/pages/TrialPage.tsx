import React, { useState, useEffect } from "react";
import { matchPath, useLocation } from "react-router-dom";
import { getTrial } from "../data/trials";
import { TrialCard } from "../components/TrialCard";
import { Trial } from "../data/trials";

export function TrialPage() {
  const { pathname } = useLocation();
  const [trial, setTrial] = useState<Trial>({
    id: "",
    creationDate: "",
    description: "",
    formulation: "",
    product: "",
    title: "",
  });

  useEffect(() => {
    const path = "/trials/:id/*";
    const match = matchPath(path, pathname);
    console.log(match?.params.id);
    const id = match?.params.id!;
    console.log(getTrial(id));
    setTrial(getTrial(id));
  }, [pathname]);

  return (
    <div className="">
      TrialPage
      <TrialCard {...trial} />
    </div>
  );
}
