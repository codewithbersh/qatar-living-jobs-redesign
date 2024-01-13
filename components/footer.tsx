import Link from "next/link";

import { Button } from "./ui/button";
import { Logo } from "./logo";
import { routes } from "./navigation/routes";

export const Footer = () => {
  return (
    <div className="bg-brand">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 py-6">
        <Link href="/jobs">
          <Logo className="fill-white" />
        </Link>
        <div className="flex gap-4">
          {routes.map((route) => (
            <Button
              key={route.href}
              asChild
              variant="link"
              className="text-white"
            >
              <Link href={route.href}>{route.label}</Link>
            </Button>
          ))}
          <Button variant="link" className=" cursor-not-allowed text-white">
            Post a job
          </Button>
          <Button variant="link" className=" cursor-not-allowed text-white">
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};
