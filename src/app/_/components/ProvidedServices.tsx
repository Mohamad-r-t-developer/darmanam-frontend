"use client";

import SwiperSlider from "./SwiperSlider";

export default function ProvidedServices() {
  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <h2 className="font-bold text-neutral-500">خدماتی که ما ارائه میدیم</h2>
      <SwiperSlider />
    </div>
  );
}
