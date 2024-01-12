import { Navigation } from "@/components/navigation/navigation";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navigation />
      <div>{children}</div>
    </main>
  );
};

export default MainLayout;
