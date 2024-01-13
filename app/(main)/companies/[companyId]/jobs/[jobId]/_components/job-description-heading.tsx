import React from "react";

interface JobDescriptionHeadingProps {
  type: string;
  value: string;
}

export const JobDescriptionHeading = ({
  type,
  value,
}: JobDescriptionHeadingProps) => {
  return (
    <div>
      <span className="font-bold">{type}:</span> {value}
    </div>
  );
};
