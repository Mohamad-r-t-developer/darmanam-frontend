"use client";
import Map from "@/components/Map";
import { useState } from "react";

export default function AddAddressForm() {
  const [address, setAddress] = useState<string | null>(null);
  return (
    <form className="w-full flex flex-col gap-6 items-center">
      <Map setAddress={setAddress} />
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="">عنوان آدرس</label>
        <input
          type="text"
          placeholder="به طور مثال خانه"
          className="outline-none text-sm placeholder:text-sm border border-neutral-200 rounded-primary-1 px-4 py-3"
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="">آدرس کامل</label>
        <textarea
          placeholder="لطفا از روی نقشه لوکیشن خود را انتخاب کنید"
          value={address || ""}
          onChange={(e) => setAddress(e.target.value)}
          className="outline-none placeholder:text-sm p-4 text-sm resize-none w-full h-28 rounded-primary-1 border border-neutral-200"
        ></textarea>
        <span className="text-xs text-neutral-400">در صورت نیاز یا مغایرت ، آدرس را اصلاح کنید</span>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="">جزئیات آدرس</label>
        <input
          type="text"
          placeholder="به طور مثال پلاک ، واحد ، بلوک"
          className="outline-none text-sm placeholder:text-sm border border-neutral-200 rounded-primary-1 px-4 py-3"
        />
      </div>
      <button className="w-full bg-primary-500 text-neutral-Pure_White py-2 rounded-primary-1">
        ثبت آدرس
      </button>
    </form>
  );
}
