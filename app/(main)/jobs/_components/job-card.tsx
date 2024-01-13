import Link from "next/link";
import Image from "next/image";
import { Prisma } from "@prisma/client";
import { AlarmClock, CircleDollarSign, Layers, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";

interface JobCardProps {
  job: Prisma.JobGetPayload<{
    include: {
      company: true;
    };
  }>;
}

export const JobCard = ({ job }: JobCardProps) => {
  const jobFields = [
    {
      icon: AlarmClock,
      label: job.type,
    },
    {
      icon: Layers,
      label: `${job.level} level`,
    },
    {
      icon: CircleDollarSign,
      label: job.salary,
    },
    {
      icon: MapPin,
      label: job.applicantLocation,
    },
  ];
  return (
    <Link
      href={`/companies/${job.companyId}/jobs/${job.id}`}
      key={job.id}
      className="flex flex-col gap-4 rounded-md border p-4 hover:shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-sm border">
          <Image
            src={`/companies/${job.company.logoUrl}`}
            fill
            className="cover"
            alt=""
          />
        </div>
        <div className="truncate">
          <h1 className="font-bold">{job.title}</h1>
          <p className="text-muted-foreground">{job.company.name}</p>
        </div>

        {/* TODO: Update badge */}
        <Badge variant="brand" className="ml-auto">
          PROMOTED
        </Badge>
      </div>
      <div className="flex flex-wrap items-center gap-4 gap-y-1 pl-[62px]">
        {jobFields.map((field) => (
          <Badge variant="outline" key={field.label}>
            {<field.icon className="mr-1 h-4 w-4" />}
            {field.label}
          </Badge>
        ))}
      </div>
      <div className="pl-[62px] text-sm leading-none text-yellow-600">
        #Engineering
      </div>
    </Link>
  );
};
