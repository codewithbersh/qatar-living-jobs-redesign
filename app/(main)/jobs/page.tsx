"use client";

import { trpc } from "@/app/_trpc/client";

const JobsPage = () => {
  const { data: message } = trpc.message.useQuery();

  return <div>{message}</div>;
};

export default JobsPage;
