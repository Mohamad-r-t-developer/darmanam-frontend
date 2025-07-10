"use client";
import { CloseSvg, StarRoundedSvg, StarSvg } from "@/ui/icon";
import Link from "next/link";
import { useState } from "react";
import ScoringActions from "./_/components/ScoringActions";


const positivePoints = [
  "برخورد محترمانه",
  "مهارت بالا در انجام خدمت",
  "حضور به موقع",
  "رعایت بهداشت",
  "صبور و دلسوز",
  "ظاهر مرتب",
  "رعایت اصول اخلاقی",
  "همراه داشتن وسایل به صورت کامل",
];
const negativePoints = [
  "برخورد نامناسب",
  "بی دقتی در کار",
  "تاخیر در رسیدن",
  "عدم رعایت بهداشت",
  "پاسخگو نبودن",
  "ظاهر نامناسب",
  "درخواست مبلغ اضافه",
  "نداشتن تجهیزات کافی",
];

export default function Page() {
  const [activePoints, setPoints] = useState<"negative" | "positive">("negative");
  const [scoringPoints, setScoringPoints] = useState<string[]>([]);

  const clickHandler = (point: string) => {
    const index = scoringPoints.indexOf(point);

    if (index !== -1) {
      const filteredPoints = scoringPoints.filter((p) => p !== point);
      setScoringPoints(filteredPoints);
    } else {
      setScoringPoints([...scoringPoints, point]);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col bg-neutral-0 gap-2">
      <header className="h-16 w-full p-4 flex items-center justify-between bg-neutral-Pure_White">
        <div className="flex items-center gap-2">
          <StarRoundedSvg className="w-6 h-6" />
          <h2>امتیاز دهی به سفیر سلامت</h2>
        </div>
        <Link href="/patient/services">
          <CloseSvg className="w-8 h-8" />
        </Link>
      </header>
      <div className="flex-1 w-full overflow-y-auto space-y-4 scrollbar-hide bg-neutral-Pure_White pb-14 px-4">
        <div className="w-full flex items-center p-4 justify-between bg-neutral-Pure_White text-neutral-300">
          <span className="text-sm">بدون امتیاز</span>
          <div className="flex items-center gap-1">
            <StarSvg className="w-6 h-6 cursor-pointer" />
            <StarSvg className="w-6 h-6 cursor-pointer" />
            <StarSvg className="w-6 h-6 cursor-pointer" />
            <StarSvg className="w-6 h-6 cursor-pointer" />
            <StarSvg className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
        <div className="w-full flex items-center bg-neutral-100 rounded-primary-1 h-12 p-1 gap-1">
          <button
            onClick={() => setPoints("positive")}
            className={`${activePoints === "positive" ? "bg-neutral-Pure_White text-secondary-400" : " bg-neutral-100 text-neutral-300"} flex-1 h-full rounded-primary-1 transition-all duration-300 ease-in-out`}
          >
            نکات مثبت
          </button>
          <button
            onClick={() => setPoints("negative")}
            className={`${activePoints === "negative" ? "bg-neutral-Pure_White text-tertiary-500" : "bg-neutral-100 text-neutral-300"} flex-1 h-full rounded-primary-1 transition-all duration-300 ease-in-out`}
          >
            نکات منفی
          </button>
        </div>
        {activePoints === "positive" ? (
          <div className="w-full grid grid-cols-2 grid-rows-4 text-neutral-200 gap-4 text-sm">
            {positivePoints.map((point) => (
              <div
                onClick={() => clickHandler(point)}
                key={point}
                className={`${scoringPoints.includes(point) ? "bg-secondary-400 text-neutral-0" : "border border-neutral-200"} h-16 flex items-center justify-center cursor-pointer rounded-primary-1 `}
              >
                {point}
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full grid grid-cols-2 grid-rows-4 text-neutral-200 gap-4 text-sm">
            {negativePoints.map((point) => (
              <div
                onClick={() => clickHandler(point)}
                key={point}
                className={`${scoringPoints.includes(point) ? "bg-tertiary-500 text-neutral-0" : "border border-neutral-200"} h-16 flex items-center justify-center cursor-pointer rounded-primary-1 `}
              >
                {point}
              </div>
            ))}
          </div>
        )}
        <div className="w-full p-4">
          <div className="flex flex-col gap-4">
            <label htmlFor="">توضیحات اضافه</label>
            <textarea className="resize-none outline-none w-full p-4 border border-neutral-200 text-sm rounded-primary-1 h-40" />
          </div>
        </div>
      </div>
      <ScoringActions/>
    </div>
  );
}
