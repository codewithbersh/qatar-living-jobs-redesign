import { ListFilter } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";

import { Filters } from "./filters";
import { SearchFilter } from "./search-filter";

export const JobFilters = () => {
  return (
    <div className="rounded-lg bg-white">
      <SearchFilter />
      <Separator className=" !bg-neutral-100" />
      <div className="hidden gap-4 p-4 md:flex">
        <Filters />
      </div>

      <div className="p-4 md:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="brand" size="sm" className="w-full">
              <ListFilter className="mr-2 h-4 w-4" />
              View filters
            </Button>
          </DrawerTrigger>
          <DrawerContent className="flex flex-col gap-4 p-4 pb-8">
            <Filters />
            <DrawerClose asChild>
              <Button className="w-full">Close</Button>
            </DrawerClose>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};
