import PageHeader from "@/components/PageHeader";
import HealthRecords from "./_/components/HealthRecords";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col">
      <PageHeader title="پرونده های سلامت" />
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <HealthRecords />
      </div>
    </div>
  );
}
