import Link from "next/link";

import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

import { TRoute } from "./navigation";

interface MobileNavigationProps {
  routes: TRoute[];
  userId: string | null;
}

export const MobileNavigation = ({ routes, userId }: MobileNavigationProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="brand" size="icon">
          <Menu className="" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex h-full flex-col gap-4">
          <Logo />
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

          {userId ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Button variant="brand">
              <Link href="/sign-in">Sign in</Link>
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
