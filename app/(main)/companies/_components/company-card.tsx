import Link from "next/link";
import Image from "next/image";
import { Prisma } from "@prisma/client";
import { AlarmClock, CircleDollarSign, Layers, MapPin } from "lucide-react";

import { formatDistanceToNow } from "date-fns";

import { Badge } from "@/components/ui/badge";

import { Company } from "@prisma/client";

type _count = {
  jobs: number;
};

interface CompanyCardProps {
  company: Company & {
    _count: {
      jobs: number;
    };
  };
}

export const CompanyCard = ({ company }: CompanyCardProps) => {
  const numberOfAvailableJobs = company._count.jobs;

  return (
    <Link
      href={`/companies/${company.id}/jobs`}
      className="flex flex-col gap-4 rounded-md border p-4 hover:shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-sm border">
          <Image
            src={`/companies/${company.logoUrl}`}
            fill
            className="object-cover"
            alt=""
          />
        </div>
        <div className="">
          <h1 className="font-bold">{company.name}</h1>
          <p className="line-clamp-2 text-muted-foreground">
            {company.description}
          </p>
        </div>

        {/* TODO: Update badge */}
        {numberOfAvailableJobs > 0 && (
          <Badge variant="brand" className="ml-auto">
            HIRING
          </Badge>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-4 gap-y-1 pl-[62px]">
        {numberOfAvailableJobs > 0 && (
          <Badge variant="outline">{company._count.jobs} available jobs</Badge>
        )}
      </div>
    </Link>
  );
};
