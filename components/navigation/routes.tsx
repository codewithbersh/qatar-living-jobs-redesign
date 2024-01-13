import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

export const routes = [
  {
    href: "/jobs",
    label: "Jobs",
  },
  {
    href: "/companies",
    label: "Companies",
  },
];
export const Routes = () => {
  return (
    <>
      {routes.map((route, index) => (
        <Button
          asChild
          key={route.href}
          variant="ghost"
          className={cn(index === 0 && "mt-auto")}
        >
          <Link href={route.href}>{route.label}</Link>
        </Button>
      ))}

      <Button variant="outline" className=" cursor-not-allowed">
        Post a job
      </Button>

      <Button variant="brand" className=" cursor-not-allowed">
        Sign in
      </Button>
    </>
  );
};
