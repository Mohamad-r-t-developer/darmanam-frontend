"use client";

import RequestPrice from "@/components/RequestPrice";
import { NotFoundLocationSvg, QuickSvg, ReserveSvg } from "@/ui/icon";
import Link from "next/link";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import CalendarSvg from "@/ui/icon/CalendarSvg";

const timeRanges = [
  { id: 1, value: "06:00 الی 08:00" },
  { id: 2, value: "08:00 الی 10:00" },
  { id: 3, value: "10:00 الی 12:00" },
  { id: 4, value: "12:00 الی 14:00" },
  { id: 5, value: "14:00 الی 16:00" },
  { id: 6, value: "16:00 الی 18:00" },
  { id: 7, value: "18:00 الی 20:00" },
  { id: 8, value: "20:00 الی 22:00" },
  { id: 9, value: "22:00 الی 00:00" },
];

export default function ScheduleForm() {
  const [selectedTime, setSelectedTime] = useState<"quick" | "reserve">("quick");
  const [selectedNurse, setSelectedNurse] = useState<"previous" | "new">("new");
  const [timeRange, setTimeRange] = useState<string>(timeRanges[0].value);
  return (
    <form className="w-full">
      <div className="flex flex-col gap-10 p-4">
        <div className="w-full flex flex-col gap-6">
          <div className="w-full flex items-center justify-between">
            <label>انتخاب آدرس ها</label>
            <Link href="/patient/requests/address-list" className="text-primary-500 text-[11px]">
              تغییر / افزودن آدرس جدید
            </Link>
          </div>
          {/* <SingleAddress
          address="قم - قم - بلوار امین - کوچه ستاره - فرعی چهارم - بن بست دوم - انتهای کوچه - پلاک 145 - واحد 2 - طبقه پنجم"
          addressTitle="خانه پدری"
        /> */}
          <div className="w-full flex flex-col gap-2 items-center text-neutral-400">
            <Link href="/patient/requests/address-list">
              <NotFoundLocationSvg className="w-16 h-16 text-neutral-200" />
            </Link>
            <h3 className="font-medium">عدم وجود آدرس</h3>
            <p className="text-[9px]">
              برای ادامه روند ثبت درخواست شما میتوانید با زدن دکمه افزودن آدرس، آدرس جدید را ثبت
              کنید
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <label>انتخاب زمان</label>
          <div className="w-full flex items-center gap-4">
            {/* quick  */}
            <div
              onClick={() => setSelectedTime("quick")}
              className={`${selectedTime === "quick" ? "bg-primary-500 scale-105 text-neutral-Pure_White shadow-primary-2" : ""} flex-1 flex transition-all duration-300 flex-col gap-4 p-4  text-neutral-400 border border-neutral-200 rounded-primary-1 cursor-pointer`}
            >
              <div className="flex items-center gap-2">
                <QuickSvg className="w-5 h-5" />
                <h4 className="font-medium">درخواست فوری</h4>
              </div>
              <p className="text-[10px] leading-5">
                نزدیک ترین سفیر سلامت برای شما انتخاب و در سریع ترین زمان ممکن در محل حاضر می‌شود
              </p>
            </div>
            {/* reserved */}
            <div
              onClick={() => setSelectedTime("reserve")}
              className={`${selectedTime === "reserve" ? "bg-primary-500 scale-105 text-neutral-Pure_White shadow-primary-2" : ""} flex-1 flex transition-all duration-300 flex-col gap-4 p-4 text-neutral-400 border border-neutral-200 rounded-primary-1 cursor-pointer`}
            >
              <div className="flex items-center gap-2">
                <ReserveSvg className="w-5 h-5" />
                <h4 className="font-medium">رزرو برای آینده</h4>
              </div>
              <p className="text-[10px] leading-5">
                سفیر سلامت برای شما انتخاب و در زمان و تاریخ مشخص شده در محل حاضر می‌شود
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <label>انتخاب پرستار</label>
          <div className="w-full flex items-center gap-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                setSelectedNurse("previous");
              }}
              className={`${selectedNurse === "previous" ? "bg-secondary-400 text-neutral-Pure_White shadow-primary-2" : "text-neutral-400 border border-neutral-400"} flex-1 h-12 rounded-primary-1 text-sm`}
            >
              پرستار قبلی
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setSelectedNurse("new");
              }}
              className={`${selectedNurse === "new" ? "bg-secondary-400 text-neutral-Pure_White shadow-primary-2" : "text-neutral-400 border border-neutral-400"} flex-1 h-12 rounded-primary-1 text-sm`}
            >
              پرستار جدید
            </button>
          </div>

          {selectedNurse === "previous" && (
            <div className="w-full">
              <p>new nurse</p>
            </div>
          )}
        </div>
        {selectedTime === "reserve" && (
          <div className="w-full flex flex-col gap-4">
            <label htmlFor="">تاریخ درخواست را مشخص کنید</label>
            <div className="flex items-center h-12 gap-2 bg-neutral-Pure_White rounded-primary-1 border border-neutral-200 overflow-hidden">
              <DatePicker
                calendar={persian}
                locale={persian_fa}
                inputClass="w-full text-sm  px-4 py-3 outline-none"
                containerClassName="flex-1"
              />
              <div className="px-4 border-r border-neutral-200">
                <CalendarSvg className="w-6 h-6 text-neutral-200" />
              </div>
            </div>
          </div>
        )}
        {selectedTime === "reserve" && (
          <div className="w-full flex flex-col gap-4">
            <label htmlFor="">بازه ساعت را مشخص کنید</label>
            <div className="w-full overflow-x-auto scrollbar-hide  flex items-center gap-2">
              {timeRanges.map((time) => (
                <div
                  key={time.id}
                  onClick={() => setTimeRange(time.value)}
                  className={`${timeRange === time.value ? "bg-secondary-400 text-neutral-Pure_White" : "text-neutral-200"} transition-all duration-300  min-w-32 text-sm border-neutral-200 border rounded-primary-1 text-center py-3 cursor-pointer`}
                >
                  <span>{time.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <RequestPrice disabled={false} buttonTitle="ثبت درخواست" price={50000} />
    </form>
  );
}
