import "@/styles/globals.css";

import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";

import { cn } from "@/lib/utils";

const font = GeistSans;

export const metadata: Metadata = {
  title: "Qatar Living Jobs",
  description: "A redesign of qatar living jobs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-background antialiased", font.className)}>
        <main>{children}</main>
      </body>
    </html>
  );
}
