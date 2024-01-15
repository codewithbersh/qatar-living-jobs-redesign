"use client";

import { useState } from "react";
import { AlertTriangle, X } from "lucide-react";

import { Button } from "./ui/button";

export const AlertProjectInfo = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return;

  return (
    <div className="fixed left-0 top-0 z-50 flex w-screen items-center bg-black/25 py-4 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-4xl items-start  gap-4 bg-yellow-200/75 p-2 px-4 md:items-center">
        <AlertTriangle className="h-4 w-4" />
        <div className="text-sm">
          <span className="font-bold">Important note: </span>
          This is an independent redesign of Qatar Living Jobs and is not
          affiliated with Qatar Living.
        </div>
        <Button
          className="ml-auto"
          size="icon"
          variant="brand"
          onClick={() => setIsOpen(false)}
        >
          <X />
        </Button>
      </div>
    </div>
  );
};
