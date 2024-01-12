import Link from "next/link";
import { auth } from "@clerk/nextjs";

import { Logo } from "@/components/logo";

import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";

export type TRoute = {
  href: string;
  label: string;
};

export const Navigation = () => {
  const { userId } = auth();

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
    <div className="border-b shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <Logo />

          <h1 className=" hidden text-2xl font-extrabold italic text-yellow-600 md:inline ">
            Jobs
          </h1>
        </Link>

        <DesktopNavigation routes={routes} userId={userId} />
        <MobileNavigation routes={routes} userId={userId} />
      </nav>
    </div>
  );
};
