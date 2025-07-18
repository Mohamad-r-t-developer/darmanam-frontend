import { DoneSvg } from "@/ui/icon";
import Link from "next/link";

type RequestRegisterProps = {
  title: string;
  onClose: () => void;
};

export default function RequestRegister({ title, onClose }: RequestRegisterProps) {
  return (
    <div className="w-full space-y-8">
      <div className="w-full flex items-center gap-2">
        <div className="p-1 flex items-center text-neutral-Pure_White justify-center rounded-full bg-secondary-400">
          <DoneSvg className="w-4" />
        </div>
        <h3 className="font-medium">{`درخواست ${title} شما ثبت شد !`}</h3>
      </div>
      <div className="w-full flex gap-4 items-center text-xs font-semibold">
        <button onClick={onClose} className="flex-1 text-neutral-0 bg-primary-500 rounded-primary-2 h-12">
          درخواست جدید
        </button>
        <Link href="/patient/requests" className="flex-1 rounded-primary-2 text-primary-500 border border-primary-500 flex items-center justify-center h-12">
          تکمیل درخواست
        </Link>
      </div>
    </div>
  );
}
