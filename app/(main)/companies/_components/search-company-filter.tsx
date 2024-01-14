"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import qs from "query-string";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const SearchCompanyFilter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState<string | undefined>("");

  const currentQueryStrings = qs.parse(searchParams.toString());
  const currentSearch = searchParams.get("search");

  const onSubmit = () => {
    const query = {
      ...currentQueryStrings,
      search: value,
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

  useEffect(() => {
    setValue(currentSearch || undefined);
  }, [currentSearch]);

  return (
    <div
      className="rounded-lg
 bg-white"
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-1 items-center">
          <label htmlFor="searchInput">
            <Search className="h-6 w-6" />
          </label>
          <Input
            placeholder="Search for company names"
            className="border-none outline-none ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0  "
            id="searchInput"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={() => {
              setValue("");
              router.push("/companies");
            }}
          >
            <X className="mr-2 h-4 w-4" />
            Clear
          </Button>
          <Button variant="brand" onClick={onSubmit}>
            Find companies
          </Button>
        </div>
      </div>
    </div>
  );
};
