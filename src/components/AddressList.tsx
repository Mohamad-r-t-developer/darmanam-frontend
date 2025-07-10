"use client";
import SingleAddress from "@/components/SingleAddress";
import { AddRoundedSvg } from "@/ui/icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AddressList() {
  const pathName = usePathname();

  return (
    <div className="w-full h-full flex flex-col p-4">
      <div className="flex-1 w-full flex flex-col gap-2">
        <SingleAddress
          address="قم - قم - بلوار امین - کوچه ستاره - فرعی چهارم - بن بست دوم - انتهای کوچه - پلاک 145 - واحد 2 - طبقه پنجم"
          addressTitle="خانه پدری"
        />
        <SingleAddress
          address="قم - قم - بلوار امین - کوچه ستاره - فرعی چهارم - بن بست دوم - انتهای کوچه - پلاک 145 - واحد 2 - طبقه پنجم"
          addressTitle="خانه خودم"
        />
      </div>
      <Link
        href={`${pathName.split("/")[2] === "profile" ? "/patient/profile/add-address" : "/patient/requests/add-address"}`}
        className="rounded-primary-1 bg-primary-500 py-3 text-sm text-neutral-0 flex items-center justify-center gap-2"
      >
        <AddRoundedSvg className="w-5 h-5" />
        <span>افزودن آدرس جدید</span>
      </Link>
    </div>
  );
}
