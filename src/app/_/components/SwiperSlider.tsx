"use client";

import { AmbulanceSvg, BandageSvg, CheckupSvg, InjectionSvg, NurseCallSvg } from "@/ui/icon";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

export default function CenteredPartialSlides() {
  const slides = [
    { title: "پانسمان", Icon: BandageSvg, des: "زخم دیابتی - زخم بستر - سوختگی" },
    { title: "تزریقات", Icon: InjectionSvg, des: "تزریق سرم - تزریق آمپول" },
    { title: "چک آپ", Icon: CheckupSvg, des: "اندازه‌گیری فشار خون - قند خون و ..." },
    { title: "مراقبت ویژه", Icon: AmbulanceSvg, des: "مراقبت از بیماران" },
    { title: "همراه بیمار", Icon: NurseCallSvg, des: "همراهی بیمار در بیمارستان" },
    { title: "مشاوره پزشکی", Icon: BandageSvg, des: "مشاوره پزشکی انواع بیماری‌ها" },
  ];

  return (
    <Swiper
      className="w-full"
      modules={[Autoplay]}
      loop={true}
      centeredSlides={true}
      slidesPerView={2}
      spaceBetween={5}
      slideToClickedSlide={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.title}>
          {({ isActive }) => (
            <Link href="/patient/services">
              <div className="h-24 flex items-end justify-center">
                <div
                  className={`transition-all duration-500 ease-in-out w-full max-w-xs rounded-primary-1 border p-3 flex justify-center items-center
        ${isActive ? "bg-gradient-to-t from-secondary-200 to-secondary-0 border-secondary-200 text-neutral-500 scale-100 shadow-md h-full" : "bg-neutral-Pure_White text-neutral-200 border-neutral-200 scale-90 h-12"}
        `}
                >
                  <div
                    className={`${isActive ? "flex-col" : "flex-row"} flex items-center gap-1 text-center`}
                  >
                    <slide.Icon className="w-6 h-6" />
                    <div className="text-xs font-medium">{slide.title}</div>
                    {isActive && <div className="text-[10px]">{slide.des}</div>}
                  </div>
                </div>
              </div>
            </Link>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
