import PageHeader from "@/components/PageHeader";
import Vouchers from "./_/components/Vouchers";

export default function page() {
  return (
    <div className="w-full h-full flex flex-col">
      <PageHeader title="پیشنهادات ویژه" />
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <Vouchers />
      </div>
    </div>
  );
}
