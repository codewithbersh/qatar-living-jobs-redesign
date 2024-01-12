import { db } from "@/lib/db";

const JobsPage = async () => {
  const data = await db.test.findMany({});
  return <div className="bg-red-500">{data.map((item) => item.hello)}</div>;
};

export default JobsPage;
