import Header from "@/components/Header";
import PatientFooter from "@/components/PatientFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full h-screen flex flex-col items-center">
      <Header />
      <div className="pb-[64px] w-full h-[calc(100%-64px)] flex-1 overflow-x-hidden overflow-y-auto scrollbar-hide">
        {children}
      </div>
      <PatientFooter />
    </section>
  );
}
