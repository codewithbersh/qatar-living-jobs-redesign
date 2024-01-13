import { db } from "@/lib/db";
import { JobFilters } from "../jobs/_components/job-filters";
import { SearchCompanyFilter } from "./_components/search-company-filter";
import { CompanyCard } from "./_components/company-card";

interface CompaniesPageParams {
  searchParams: {
    [value: string]: string;
  };
}

const CompaniesPage = async ({ searchParams }: CompaniesPageParams) => {
  const queryString = searchParams.search
    ?.split(" ")
    .filter((word) => word.length > 0)
    .join(" | ");

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
    ],
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
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesPage;
