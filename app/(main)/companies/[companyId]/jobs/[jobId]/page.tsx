import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { db } from "@/lib/db";

import { Button } from "@/components/ui/button";
import { JobDescriptionHeading } from "./_components/job-description-heading";
import Markdown from "@/components/ui/markdown";

interface JobIdPageParams {
  params: {
    jobId: string;
  };
}

const JobIdPage = async ({ params: { jobId } }: JobIdPageParams) => {
  const job = await db.job.findUnique({
    where: {
      id: jobId,
    },
  });

  if (!job) return notFound();

  return (
    <div className="space-y-8 pb-24">
      <div className="pb-12">
        <Button variant="ghost" asChild>
          <Link href={`/companies/${job.companyId}/jobs`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            View company jobs
          </Link>
        </Button>
      </div>
      <div className="space-y-4">
        <div className="flex flex-col justify-between gap-y-4 md:flex-row">
          <h1 className="text-2xl font-bold md:text-3xl">{job.title}</h1>
          <Button variant="brand">Apply now</Button>
        </div>
        <div className="flex flex-col gap-2">
          <JobDescriptionHeading type="Location" value="Doha, Qatar" />
          <JobDescriptionHeading type="Job type" value={job.type} />
          <JobDescriptionHeading
            type="Applicant location"
            value={job.applicantLocation}
          />
          <JobDescriptionHeading type="Salary" value={job.salary} />
        </div>
        B
      </div>
      <Markdown>{job.description}</Markdown>
    </div>
  );
};

export default JobIdPage;
