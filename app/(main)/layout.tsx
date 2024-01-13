import { Navigation } from "@/components/navigation/navigation";
import { Footer } from "@/components/footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <div>{children}</div>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
