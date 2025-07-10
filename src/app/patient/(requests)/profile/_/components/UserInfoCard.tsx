
import { EditSvg, StarSvg } from "@/ui/icon";
import Image from "next/image";

export default function UserInfoCard() {
  return (
    <div className="w-full bg-neutral-Pure_White p-4 flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-tertiary-300">
            <Image width={56} height={56} src="/images/avatar.png" alt="avatar" />
          </div>
          <span className="absolute flex shadow-md cursor-pointer items-center justify-center bg-neutral-Pure_White right-0 -bottom-1 p-[2px] rounded-full">
            <EditSvg className="w-5 h-5" />
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium">محمدیاسر اکبری</span>
          <span className="text-[10px]">09337719258</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1">
        <span className="text-[11px]">4.3</span>
        <StarSvg className="fill-[#F5E20F] w-5 h-5" />
      </div>
    </div>
  );
}
