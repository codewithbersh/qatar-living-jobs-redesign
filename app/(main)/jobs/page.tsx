import { UserButton } from "@clerk/nextjs";

const JobsPage = () => {
  return (
    <div className="bg-red-500">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default JobsPage;
