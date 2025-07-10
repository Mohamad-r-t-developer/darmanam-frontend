import { MedicalBagSvg } from "@/ui/icon";
import Image from "next/image";
import Link from "next/link";

export default function SingleHealthPackage() {
  return (
    <div className="min-w-[80%] relative h-36  rounded-primary-1 overflow-hidden shadow-md">
      <div className="w-full relative aspect-[3/1]">
        <Image fill src="/images/slide.png" alt="slide" className="object-center object-cover" />
      </div>
      <div className="absolute bottom-0 w-full left-0">
        {/* package detail */}
        <div className="flex p-2 items-center justify-between bg-neutral-0">
          <div className="text-neutral-500 flex items-center gap-2">
            <MedicalBagSvg className="w-6 h-6 " />
            <h3 className="font-medium">پکیج درمانی شماره 1</h3>
          </div>
          <Link
            href="#"
            className="text-primary-500 h-8 flex items-center justify-center px-2 border border-primary-500 text-[11px] rounded-primary-1"
          >
            اطلاعات بیشتر
          </Link>
        </div>
      </div>
    </div>
  );
}
