import PageHeader from "@/components/PageHeader";
import RequestsHistory from "./_/components/RequestsHistory";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col">
      <PageHeader title="تاریخچه درخواست ها" />
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <RequestsHistory />
      </div>
    </div>
  );
}
