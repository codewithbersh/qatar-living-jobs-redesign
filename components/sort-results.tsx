"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortResultsProps {}

const sortFields = [
  {
    value: "createdAtDesc" as const,
    label: "Date (newest first)",
  },
  {
    value: "createdAtAsc" as const,
    label: "Date (oldest first)",
  },
];

export const SortResults = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentSortByQuery = searchParams.get("sortBy");
  const isValidSortByQuery = sortFields.find(
    (field) => field.value === currentSortByQuery,
  );

  const onSubmit = (value: string) => {
    const currentQuery = qs.parse(searchParams.toString());

    const query = {
      ...currentQuery,
      sortBy: value,
    };

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query,
      },
      {
        skipEmptyString: true,
        skipNull: true,
      },
    );

    router.push(url);
  };

  return (
    <Select
      onValueChange={onSubmit}
      value={isValidSortByQuery ? isValidSortByQuery.value : undefined}
    >
      <SelectTrigger>
        <SelectValue placeholder="Sort by" className="mr-2" />
      </SelectTrigger>
      <SelectContent align="end">
        {sortFields.map((field) => (
          <SelectItem key={field.value} value={field.value}>
            {field.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
