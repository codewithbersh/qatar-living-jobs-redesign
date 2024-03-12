"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import qs from "query-string";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

interface PaginationProps {
  currentPage: number;
  totalResults: number;
  limit: number;
}

export const Pagination = ({
  limit,
  totalResults,
  currentPage,
}: PaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentQueryString = qs.parse(searchParams.toString());

  const hasNoNextPage = (limit * currentPage) / totalResults >= 1;

  return (
    <div className="ml-auto flex gap-4">
      <Button
        variant="outline"
        size="sm"
        asChild
        className={cn(
          currentPage === 1 &&
            "cursor-not-allowed border-muted text-muted-foreground hover:border-muted hover:bg-inherit hover:text-muted-foreground",
        )}
      >
        <Link
          href={{
            href: pathname,
            query: {
              ...currentQueryString,
              page: currentPage > 1 ? currentPage - 1 : currentPage,
            },
          }}
          scroll={false}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Prev
        </Link>
      </Button>
      <Button
        variant="outline"
        size="sm"
        asChild
        className={cn(
          hasNoNextPage &&
            "cursor-not-allowed border-muted text-muted-foreground hover:border-muted hover:bg-inherit hover:text-muted-foreground",
        )}
      >
        <Link
          href={{
            href: pathname,
            query: {
              ...currentQueryString,
              page: hasNoNextPage ? currentPage : currentPage + 1,
            },
          }}
        >
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
};
