import { db } from "@/lib/db";
import Image from "next/image";
import { notFound } from "next/navigation";

interface CompanyLayoutProps {
  params: {
    companyId: string;
  };
  children: React.ReactNode;
}

const CompanyIdLayout = async ({
  params: { companyId },
  children,
}: CompanyLayoutProps) => {
  const company = await db.company.findUnique({
    where: {
      id: companyId,
    },
  });

  if (!company) return notFound();

  return (
    <div>
      <div className="relative h-[25vh]">
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-neutral-950/35" />
        <Image
          src={`/companies/${company.bannerUrl}`}
          fill
          alt="Company Banner"
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
      <div className="relative mx-auto max-w-4xl p-4">
        <div className="relative z-20 h-[124px] w-[124px] -translate-y-[62px] overflow-hidden rounded-md border">
          <Image
            src={`/companies/${company.logoUrl}`}
            alt="Company Logo"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default CompanyIdLayout;
