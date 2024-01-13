import { JobFilters } from "./_components/job-filters";

const JobsPage = async () => {
  return (
    <div>
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
    </div>
  );
};

export default JobsPage;
