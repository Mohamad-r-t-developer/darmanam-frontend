import {
  CopySvg,
  InstagramSvg,
  LinkSvg,
  TelegramSvg,
  TwitterSvg,
  WhatsappSvg,
  YoutubeSvg,
} from "@/ui/icon";
import Link from "next/link";

export default function InviteModal() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="border-b pb-4 border-neutral-200 border-dashed ">
        <div className="w-full flex items-center justify-around p-2 bg-neutral-100 rounded-primary-2 gap-2">
          <div className="bg-neutral-100 text-neutral-300 p-2 border border-neutral-300 rounded-primary-3">
            <LinkSvg className="w-6 h-6 -rotate-45" />
          </div>
          <div className="felx-1 flex flex-col justify-center items-center gap-2">
            <h3 className="font-medium">لینک معرفی به دوستان</h3>
            <span className="text-[9px]">https://darmanam.com/signup?refralCode=1234</span>
          </div>
          <button className="flex bg-primary-50 border border-primary-300 text-primary-500 p-2 rounded-primary-3 items-center justify-center gap-2">
            <span className="text-[11px] font-medium">کپی</span>
            <CopySvg className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="w-full flex items-center justify-around">
        <Link href="#" className="p-3 rounded-primary-2 bg-neutral-Pure_White shadow-primary-2">
          <TwitterSvg className="w-6 h-6" />
        </Link>
        <Link href="#" className="p-3 rounded-primary-2 bg-neutral-Pure_White shadow-primary-2">
          <InstagramSvg className="w-6 h-6" />
        </Link>
        <Link href="#" className="p-3 rounded-primary-2 bg-neutral-Pure_White shadow-primary-2">
          <YoutubeSvg className="w-6 h-6" />
        </Link>
        <Link href="#" className="p-3 rounded-primary-2 bg-neutral-Pure_White shadow-primary-2">
          <TelegramSvg className="w-6 h-6" />
        </Link>
        <Link href="#" className="p-3 rounded-primary-2 bg-neutral-Pure_White shadow-primary-2">
          <WhatsappSvg className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
