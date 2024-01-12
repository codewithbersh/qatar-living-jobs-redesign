import "@/styles/globals.css";

import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";

import { cn } from "@/lib/utils";

import { Providers } from "@/components/providers/providers";

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
    <ClerkProvider>
      <html lang="en">
        <body className={cn("bg-background antialiased", font.className)}>
          <Providers>
            <main>{children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
