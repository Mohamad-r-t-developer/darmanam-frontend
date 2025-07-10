
import { ChatSvg, GroupSvg, PhoneSvg } from "@/ui/icon";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="flex flex-col items-center">
        <GroupSvg className="w-20 h-20" />
        <h2 className="font-medium text-neutral-500 mt-4">به پشتیبانی نیاز دارید؟</h2>
        <p className="text-sm text-neutral-300 mt-4 leading-6 w-[55%] text-center">
          تیم پشتیبانی از ساعت 9 الی 21 آماده پاسخگویی به شما می باشد!
        </p>
        <div className="w-full flex items-center justify-around mt-10">
          <a href="tel:09123456789">
            <div className="flex items-center justify-center gap-2 text-primary-500">
              <PhoneSvg className="w-5 h-5" />
              <span className="text-[11px] font-medium">تماس با پشتیبانی</span>
            </div>
          </a>
          <Link
            href="/patient/support/form"
            className="bg-primary-500 rounded-primary-2 text-neutral-0 px-6 py-3 flex items-center justify-center gap-2"
          >
            <ChatSvg className="w-5 h-5" />
            <span className="text-[11px] font-medium">چت با پشتیبانی</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
