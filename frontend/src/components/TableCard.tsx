import React from "react";

interface TableCardProps {
  shortDescription: string;
  longDescription: string;
}

export const TableCard: React.FC<TableCardProps> = ({
  shortDescription,
  longDescription,
}) => {
  return (
    <div className="flex border gap-2 flex-col">
      <h2 className="font-bold">{shortDescription}</h2>
      <p>{longDescription}</p>
    </div>
  );
};
