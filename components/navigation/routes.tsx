"use client";

import Link from "next/link";

import { UserButton, useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

export const Routes = () => {
  const { user } = useUser();

  const routes = [
    {
      href: "/jobs",
      label: "Jobs",
    },
    {
      href: "/companies",
      label: "Companies",
    },
  ];
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

      {/* TODO: Link to job form */}
      <Button variant="outline">Post a job</Button>

      {/* TODO: Update after signOutUrl */}
      {user?.id ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <Button variant="brand" asChild>
          <Link href="/sign-in">Sign in</Link>
        </Button>
      )}
    </>
  );
};
