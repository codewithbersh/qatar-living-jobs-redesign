import { db } from "@/lib/db";

import { Pagination } from "@/components/pagination";
import { SortResults } from "@/components/sort-results";
import { validSortByQueries } from "../companies/page";

import { JobCard } from "./_components/job-card";
import { JobFilters } from "./_components/job-filters";

interface JobsPageParams {
  searchParams: {
    [key: string]: string | undefined;
  };
}

const JOBS_LIMIT_PER_PAGE = 2;

const JobsPage = async ({ searchParams }: JobsPageParams) => {
  const {
    applicantLocation,
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

  const currentSortByQuery = searchParams.sortBy;
  const sortByQuery = validSortByQueries.find(
    (query) => query.key === currentSortByQuery,
  )?.value;

  const currentPage =
    typeof searchParams.page === "string"
      ? Number(searchParams.page) >= 1
        ? Number(searchParams.page)
        : 1
      : 1;

  const skip = (currentPage - 1) * JOBS_LIMIT_PER_PAGE;

  const totalJobsFound = await db.job.count({
    where: {
      applicantLocation: applicantLocation,
      company: {
        name: companyName,
      },

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
    orderBy: [
      {
        isPromoted: "desc",
      },
      {
        createdAt: sortByQuery,
      },
    ],
  });

  const jobs = await db.job.findMany({
    where: {
      applicantLocation: applicantLocation,
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
        createdAt: sortByQuery,
      },
    ],
    take: JOBS_LIMIT_PER_PAGE,
    skip,
  });

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
        <div className="mx-auto flex max-w-4xl flex-col gap-6 py-8">
          <div className="flex items-center justify-between">
            <h1 className="font-bold leading-none">
              {totalJobsFound} Jobs found
            </h1>

            <div className="ml-auto">
              <SortResults />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {jobs.map((job) => (
              <JobCard job={job} key={job.id} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalResults={totalJobsFound}
            limit={JOBS_LIMIT_PER_PAGE}
          />
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
