import SingleChatMessage from "@/components/SingleChatMessage";
import GoBackButton from "@/ui/GoBack";
import { AttachSvg } from "@/ui/icon";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full h-full grid grid-cols-1 grid-rows-3 gap-2 p-4">
        {/* messages */}
      <div className="row-span-2 flex flex-col bg-neutral-Pure_White rounded-primary-2 shadow-primary-2 px-4">
        {/* chat header */}
        <div className="w-full flex gap-4 items-center  border-b border-neutral-200 py-4">
          <div>
            <GoBackButton href="/support" />
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image width={48} height={48} src="/images/avatar.png" alt="avatar" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-neutral-500">کارشناس شماره 1055</span>
            <span className="text-[11px]">علیرضا احمدی</span>
          </div>
        </div>
        {/* chat content */}
        <div className="w-full flex-1 flex flex-col gap-4 overflow-y-auto p-2">
          <SingleChatMessage
            owner="محمدیاسر اکبری (کاربر) - امروز 11:20"
            type="send"
            message="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،"
          />
          <SingleChatMessage
            owner="مهدی شجاع (پشتیبانی) - امروز 11:54"
            type="recive"
            message="مشکل شما در حال بررسی می‌باشد."
          />
        </div>
      </div>
      {/* input message */}
      <div className="row-span-1 flex flex-col bg-neutral-Pure_White rounded-primary-2 shadow-primary-2 p-4">
        <div className="w-full flex-1">
          <textarea
            className="resize-none w-full outline-none placeholder:text-sm p-4 text-sm h-full border border-neutral-200 rounded-primary-2"
            placeholder="پیام خود را بنویسید"
          ></textarea>
        </div>
        <div className="w-full flex items-center justify-center gap-2 p-2">
          <span className="w-10 flex items-center justify-center h-10 rounded-primary-2 border-2 border-primary-500 text-primary-500">
            <AttachSvg className="w-5 h-5" />
          </span>
          <button className="flex-1 py-2 bg-primary-500 rounded-primary-2 text-neutral-0">ارسال پیام</button>
        </div>
      </div>
    </div>
  );
}
