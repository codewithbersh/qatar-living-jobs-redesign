import Link from "next/link";

import { Menu } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Routes } from "./routes";

export type TRoute = {
  href: string;
  label: string;
};

export const Navigation = () => {
  return (
    <div className="border-b shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <Logo />

          <h1 className=" hidden text-2xl font-extrabold italic text-yellow-600 md:inline ">
            Jobs
          </h1>
        </Link>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="brand" size="icon">
              <Menu className="" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex h-full flex-col gap-4">
              <Logo />
              <Routes />
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden items-center gap-4 md:flex">
          <Routes />
        </div>
      </nav>
    </div>
  );
};
