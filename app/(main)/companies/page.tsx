import { db } from "@/lib/db";

import { Pagination } from "@/components/pagination";
import { SortResults } from "@/components/sort-results";
import { NoResults } from "@/components/no-results";

import { SearchCompanyFilter } from "./_components/search-company-filter";
import { CompanyCard } from "./_components/company-card";

interface CompaniesPageParams {
  searchParams: {
    [value: string]: string;
  };
}

export const validSortByQueries = [
  {
    key: "createdAtAsc",
    value: "asc" as const,
  },
  {
    key: "createdAtDesc",
    value: "desc" as const,
  },
];

const CompaniesPage = async ({ searchParams }: CompaniesPageParams) => {
  const queryString = searchParams.search
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

  const COMPANIES_LIMIT_PER_PAGE = 2;

  const skip = (currentPage - 1) * COMPANIES_LIMIT_PER_PAGE;

  const totalCompaniesFound = await db.company.count({
    where: {
      name: {
        search: queryString,
      },
    },
    orderBy: [
      {
        jobs: {
          _count: "desc",
        },
      },
      {
        createdAt: sortByQuery,
      },
    ],
  });

  const companies = await db.company.findMany({
    where: {
      name: {
        search: queryString,
      },
    },
    include: {
      _count: {
        select: {
          jobs: true,
        },
      },
    },
    orderBy: [
      {
        jobs: {
          _count: "desc",
        },
      },
      {
        createdAt: sortByQuery,
      },
    ],
    skip,
    take: COMPANIES_LIMIT_PER_PAGE,
  });

  return (
    <div className="space-y-8 pb-48">
      <div className="bg-neutral-100 p-4">
        <div className="mx-auto max-w-4xl space-y-6 py-8">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold">
              Find the <span className="text-brand">Top</span> companies in{" "}
              <span className="text-brand">Qatar</span>
            </h1>
            <p className="text-muted-foreground">
              Discover the best work at the best companies in Qatar.
            </p>
          </div>

          <SearchCompanyFilter />
        </div>
      </div>
      <div className="p-4">
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="font-bold leading-none">
              {totalCompaniesFound} Companies found
            </h1>
            <div className="ml-auto">
              <SortResults />
            </div>
          </div>
          {!totalCompaniesFound && <NoResults />}
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
          <Pagination
            currentPage={currentPage}
            limit={COMPANIES_LIMIT_PER_PAGE}
            totalResults={totalCompaniesFound}
          />
        </div>
      </div>
    </div>
  );
};

export default CompaniesPage;
