"use client";
import GoBack from "@/ui/GoBack";
import { ChatSvg } from "@/ui/icon";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/patient/support/chat");
  };

  return (
    <div className="w-full h-full flex flex-col items-center p-4">
      <div className="w-full flex">
        <GoBack href="/patient/support" />
      </div>
      <ChatSvg className="text-neutral-100 w-14 h-14" />
      <h2 className="font-medium mt-4">گفتگو با درمانم</h2>
      <span className="text-[11px] mt-2 text-neutral-300">پاسخگوی سوالات شما هستیم!</span>
      <form onSubmit={submitHandler} className="mt-10">
        <label className="text-neutral-900" htmlFor="">
          برای شروع گفتگو لطفا نام و نام خانوادگی خود را وارد کنید :
        </label>
        <input
          type="text"
          className="outline-none p-3 mt-4 placeholder:text-sm focus:border-primary-500 border-2 border-neutral-200 w-full rounded-primary-2"
          placeholder="نام و نام خانوادگی"
        />
        <button
          type="submit"
          className="bg-primary-500 text-sm text-neutral-0 px-6 py-3 w-full mt-4 rounded-primary-2 flex items-center justify-center gap-2"
        >
          <ChatSvg className="w-5 h-5" />
          <span>شروع گفتگو</span>
        </button>
      </form>
    </div>
  );
}
