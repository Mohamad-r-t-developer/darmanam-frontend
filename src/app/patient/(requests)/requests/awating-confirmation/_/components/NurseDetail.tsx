import { NurseStatusType } from "@/types/nurseStatusype";
import { MessageSvg, PhoneSvg, StarSvg } from "@/ui/icon";
import Image from "next/image";
import Link from "next/link";

type NurseDetailType = {
  status: NurseStatusType;
};

export default function NurseDetail({ status }: NurseDetailType) {
  const renderStatus = () => {
    switch (status) {
      case "on-the-way":
        return (
          <p className="text-neutral-300 text-2xs">
            مدت زمان رسیدن :<span className="font-bold">1 ساعت</span>
          </p>
        );
      case "in-progress":
        return <p className="text-neutral-300 text-2xs">سفیر در حال انجام خدمت</p>;

      default:
        return;
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 bg-neutral-Pure_White p-4">
      <h3 className="font-medium">مشخصات سفیر سلامت</h3>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-tertiary-300">
            <Image width={56} height={56} src="/images/avatar.png" alt="avatar" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium">محمدیاسر اکبری</p>
            <p className="text-2xs">کارشناس اتاق عمل</p>
            {renderStatus()}
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-1">
            <span className="text-xs font-medium">4.3</span>
            <StarSvg className="size-5 fill-[#F5E20F]" />
          </div>
          <div className="flex gap-2 text-neutral-Pure_White">
            <Link
              href="/"
              className="size-8 bg-secondary-400 rounded-full flex items-center justify-center"
            >
              <PhoneSvg className="size-5" />
            </Link>
            <Link
              href=""
              className="size-8 bg-primary-500 rounded-full flex items-center justify-center"
            >
              <MessageSvg className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
