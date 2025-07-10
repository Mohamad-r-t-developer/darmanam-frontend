import AddressList from "@/components/AddressList";
import PageHeader from "@/components/PageHeader";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col">
      <PageHeader title="آدرس ها" />
      <div className="flex-1 scrollbar-hide overflow-y-auto">
        <AddressList />
      </div>
    </div>
  );
}
