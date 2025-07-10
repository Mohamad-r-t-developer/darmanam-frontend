import PatientInfoForm from "@/components/PatientInfoForm";
import RequestHeader from "@/components/RequestHeader";
import RequestSteper from "@/components/RequestSteper";
import { PurchaseOrderSvg } from "@/ui/icon";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col">
      <RequestHeader title="تکمیل اطلاعات" Icon={PurchaseOrderSvg} />
      <RequestSteper step={1} />
      <div className="flex-1 h-[calc(100%-112px)] pb-14 w-full overflow-y-auto scrollbar-hide">
        <PatientInfoForm />
      </div>
    </div>
  );
}
