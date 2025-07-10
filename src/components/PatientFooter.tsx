"use client";

import { AccountSvg, FavoriteCardSvg, HomeSvg, OnlineSupportSvg } from "@/ui/icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PatientFooter() {
  const pathName = usePathname();

  return (
    <footer className="fixed bottom-0 left-0 right-0 max-w-screen-xs m-auto w-full h-16 flex items-center justify-around shadow-primary-2 py-2 bg-neutral-Pure_White">
      <Link
        href="/patient/services"
        className={`flex flex-col gap-1 items-center text-neutral-300 transition-all duration-300 ${pathName.startsWith("/patient/services") ? "text-primary-500 font-bold scale-110" : "text-neutral-300 font-normal"}`}
      >
        <HomeSvg className="w-6 h-6" />
        <span className="font-bold text-[11px]">خانه</span>
      </Link>
      <Link
        href="/patient/requests"
        className={`flex flex-col gap-1 items-center text-neutral-300 transition-all duration-300 ${pathName.startsWith("/patient/requests") ? "text-primary-500 font-bold scale-110" : "text-neutral-300 font-normal"}`}
      >
        <FavoriteCardSvg className="w-6 h-6" />
        <span className="text-[11px]">درخواست ها</span>
      </Link>
      <Link
        href="/patient/support"
        className={`flex flex-col gap-1 items-center text-neutral-300 transition-all duration-300 ${pathName.startsWith("/patient/support") ? "text-primary-500 font-bold scale-110" : "text-neutral-300 font-normal"}`}
      >
        <OnlineSupportSvg className="w-6 h-6" />
        <span className="text-[11px]">پشتیبانی</span>
      </Link>
      <Link
        href="/patient/profile"
        className={`flex flex-col gap-1 items-center text-neutral-300 transition-all duration-300 ${pathName.startsWith("/patient/profile") ? "text-primary-500 font-bold scale-110" : "text-neutral-300 font-normal"}`}
      >
        <AccountSvg className="w-6 h-6" />
        <span className="text-[11px]">حساب کاربری</span>
      </Link>
    </footer>
  );
}
