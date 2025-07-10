
import RequestHeader from "@/components/RequestHeader";
import RequestSteper from "@/components/RequestSteper";
import ScheduleForm from "./_/components/ScheduleForm";
import { AddressSvg } from "@/ui/icon";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col">
      <RequestHeader title="انتخاب آدرس و زمان" Icon={AddressSvg} />
      <RequestSteper step={2} />
      <div className="flex-1 h-[calc(100%-112px)] pb-14 overflow-y-auto scrollbar-hide">
        <ScheduleForm />
      </div>
    </div>
  );
}
