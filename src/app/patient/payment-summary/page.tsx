import Header from "@/components/Header";
import { CloseSvg, PaidBillSvg } from "@/ui/icon";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col gap-2">
      <Header />
      <div className="flex-1 relative overflow-y-auto w-full flex flex-col gap-6 items-center justify-center">
        <div className="absolute top-0 left-0 w-full p-4 flex items-center justify-end">
          <Link href="/patient/services">
            <CloseSvg className="w-8 h-8 text-neutral-500" />
          </Link>
        </div>
        <PaidBillSvg className="size-20 text-secondary-400" />
        <div className="flex flex-col gap-2">
          <h2 className="font-medium">پرداخت با موفقیت انجام شد!</h2>
          <div className="flex gap-2 text-neutral-300 text-sm">
            <span>شناسه پرداخت: </span>
            <span>545661321674</span>
          </div>
        </div>
      </div>
    </div>
  );
}
