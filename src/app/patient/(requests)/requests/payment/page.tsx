import RequestHeader from "@/components/RequestHeader";
import RequestSteper from "@/components/RequestSteper";
import { WalletSvg } from "@/ui/icon";
import Payment from "./_/components/Payment";

export default function Page() {
  return (
    <div className="w-full h-full flex-col">
      <RequestHeader title="پرداخت" Icon={WalletSvg} />
      <RequestSteper step={4} />
      <div className="flex-1 h-[calc(100%-112px)] pb-14 overflow-y-auto scrollbar-hide">
        <Payment />
      </div>
    </div>
  );
}
