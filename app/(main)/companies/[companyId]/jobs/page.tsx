import { JobCard } from "@/app/(main)/jobs/_components/job-card";
import { Button } from "@/components/ui/button";
import Markdown from "@/components/ui/markdown";
import { db } from "@/lib/db";
import { ArrowUpNarrowWide, ChevronDown, Share } from "lucide-react";

import { notFound } from "next/navigation";

interface CompanyJobsPageParams {
  params: {
    companyId: string;
  };
}

const CompanyJobsPage = async ({
  params: { companyId },
}: CompanyJobsPageParams) => {
  const company = await db.company.findUnique({
    where: {
      id: companyId,
    },
    include: {
      jobs: {
        include: {
          company: true,
        },
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
        <Button variant="outline" className="mb-4 ml-auto mt-6 w-fit">
          <ArrowUpNarrowWide className="mr-2 h-4 w-4" />
          Sort by
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
        {company.jobs.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default CompanyJobsPage;
