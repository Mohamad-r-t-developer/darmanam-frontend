import RequestHeader from "@/components/RequestHeader";
import RequestSteper from "@/components/RequestSteper";
import { DoctorGivingAdviceSvg } from "@/ui/icon";
import Confirmations from "./_/components/Confirmations";

export default function Page() {
  return (
    <div className="w-full h-full flex-col">
      <RequestHeader title="تایید سفیر سلامت" Icon={DoctorGivingAdviceSvg} />
      <RequestSteper step={3} />
      <div className="flex-1 h-[calc(100%-112px)] pb-14 overflow-y-auto scrollbar-hide">
        <Confirmations />
      </div>
    </div>
  );
}
