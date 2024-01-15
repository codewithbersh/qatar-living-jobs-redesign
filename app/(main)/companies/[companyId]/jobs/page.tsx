import { notFound } from "next/navigation";
import { Share } from "lucide-react";

import { db } from "@/lib/db";

import { validSortByQueries } from "../../page";

import { JobCard } from "@/app/(main)/jobs/_components/job-card";
import { SortResults } from "@/components/sort-results";
import { Button } from "@/components/ui/button";
import Markdown from "@/components/ui/markdown";
import { NoResults } from "@/components/no-results";

interface CompanyJobsPageParams {
  params: {
    companyId: string;
  };
  searchParams: {
    [value: string]: string;
  };
}

const CompanyJobsPage = async ({
  params: { companyId },
  searchParams,
}: CompanyJobsPageParams) => {
  const currentSortByQuery = searchParams.sortBy;
  const sortByQuery = validSortByQueries.find(
    (query) => query.key === currentSortByQuery,
  )?.value;

  const company = await db.company.findUnique({
    where: {
      id: companyId,
    },
    include: {
      jobs: {
        include: {
          company: true,
        },
        orderBy: [
          {
            isPromoted: "desc",
          },
          {
            createdAt: sortByQuery,
          },
        ],
      },
    },
  });

  if (!company) return notFound();

  return (
    <div className="flex flex-col gap-8 pb-48">
      <div>
        <div className="flex flex-col justify-between gap-y-4 md:flex-row">
          <h1 className="text-2xl font-bold md:text-3xl">{company.name}</h1>
          <Button variant="outline">
            <Share className="mr-2 h-4 w-4" /> Share
          </Button>
        </div>
      </div>
      <Markdown>{company.description}</Markdown>
      <div className="flex flex-col gap-4 py-12">
        <div className="flex items-center justify-between">
          <h1 className="font-bold leading-none">
            {company.jobs.length} Jobs found
          </h1>
          <div className="ml-auto">
            <SortResults />
          </div>
        </div>
        {!company.jobs.length && <NoResults />}
        {company.jobs.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default CompanyJobsPage;
