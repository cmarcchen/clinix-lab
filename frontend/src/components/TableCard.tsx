import React from "react";

interface TableCardProps {
  short_description: string;
  long_description: string;
}

export const TableCard: React.FC<TableCardProps> = ({
  short_description,
  long_description,
}) => {
  return (
    <div className="flex border gap-2 flex-col">
      <h2 className="font-bold">{short_description}</h2>
      <p>{long_description}</p>
    </div>
  );
};
