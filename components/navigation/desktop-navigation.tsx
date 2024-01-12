import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

import { TRoute } from "./navigation";

interface DesktopNavigationProps {
  routes: TRoute[];
  userId: string | null;
}

export const DesktopNavigation = ({
  routes,
  userId,
}: DesktopNavigationProps) => {
  return (
    <div className="hidden gap-4 md:flex">
      {routes.map((route) => (
        <Button asChild key={route.href} variant="ghost">
          <Link href={route.href}>{route.label}</Link>
        </Button>
      ))}

      {/* TODO: Link to job form */}
      <Button variant="outline">Post a job</Button>

      {/* TODO: Logout function */}
      {userId ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <Button variant="brand">
          <Link href="/sign-in">Sign in</Link>
        </Button>
      )}
    </div>
  );
};
