import { applicantLocations, jobTypes, levelTypes } from "@/lib/job";
import { db } from "@/lib/db";

import { Filter } from "./filter";

export const Filters = async () => {
  const companies = await db.company
    .findMany({})
    .then((companies) => companies.map((company) => company.name));
  return (
    <>
      <Filter
        options={companies}
        valueKey="companyName"
        selectPlaceholder="Company"
      />
      <Filter options={jobTypes} valueKey="jobType" selectPlaceholder="Type" />
      <Filter
        options={levelTypes}
        valueKey="levelType"
        selectPlaceholder="Level"
      />
      <Filter
        options={applicantLocations}
        valueKey="applicantLocation"
        selectPlaceholder="Applicant location"
      />
    </>
  );
};
