import Footer from "@/components/PatientFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full h-screen">
      <main className="w-full h-[calc(100%-65px)]">{children}</main>
      <Footer />
    </section>
  );
}
