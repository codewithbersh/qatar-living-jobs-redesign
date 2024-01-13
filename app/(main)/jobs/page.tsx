import { ArrowUpNarrowWide } from "lucide-react";

import { db } from "@/lib/db";

import { Button } from "@/components/ui/button";

import { JobCard } from "./_components/job-card";
import { JobFilters } from "./_components/job-filters";

interface JobsPageParams {
  searchParams: {
    [key: string]: string | undefined;
  };
}

const JobsPage = async ({ searchParams }: JobsPageParams) => {
  const {
    applicationLocation,
    companyName,
    jobType,
    levelType,
    search,
    jobCategory,
  } = searchParams;

  // FIXME: No need to add query string for mySQL, see docs: https://www.prisma.io/docs/orm/prisma-client/queries/full-text-search

  const queryString = search
    ?.split(" ")
    .filter((word) => word.length > 0)
    .join(" | ");

  const jobs = await db.job.findMany({
    where: {
      applicantLocation: applicationLocation,
      company: {
        name: companyName,
      },
      // category: {
      //   // has: "",
      //   // isEmpty: false,
      // },
      type: jobType,
      level: levelType,
      title: {
        search: queryString,
      },
      category: {
        mode: "insensitive",
        contains: jobCategory,
      },
    },
    include: {
      company: true,
    },
    orderBy: [
      {
        isPromoted: "desc",
      },
      {
        createdAt: "desc",
      },
    ],
  });

  const totalJobsFound = jobs.length;

  return (
    <div className="pb-48">
      <div className="bg-neutral-100 p-4">
        <div className="mx-auto max-w-4xl space-y-6 py-8">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold">
              The <span className="text-brand">#1</span> Jobs Website in{" "}
              <span className="text-brand">Qatar</span>
            </h1>
            <p className="text-muted-foreground">
              Discover the best work at the best companies in Qatar.
            </p>
          </div>

          <JobFilters />
        </div>
      </div>
      <div className="p-4">
        <div className="mx-auto max-w-4xl space-y-6 py-8">
          <div className="flex items-center justify-between">
            <h1 className="font-bold leading-none">
              {totalJobsFound} Jobs found
            </h1>

            {/* TODO: Sort Button */}
            <Button variant="outline">
              <ArrowUpNarrowWide className="mr-2 h-4 w-4" />
              Most recent
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            {jobs.map((job) => (
              <JobCard job={job} key={job.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
