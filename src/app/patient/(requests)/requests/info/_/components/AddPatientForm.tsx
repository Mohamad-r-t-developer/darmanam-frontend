import { useState } from "react";

export default function AddPatientForm() {
  const [gender, setGender] = useState<"men" | "women" | undefined>(undefined);
  return (
    <form className="w-full space-y-6">
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          کد ملی بیمار را وارد کنید
        </label>
        <input
          type="text"
          id="name"
          placeholder="کد ملی"
          className="placeholder:text-sm placeholder:text-neutral-200 outline-none rounded-primary-1 border px-4 py-2 border-neutral-200"
        />
        <span className="text-[9px]">
          کد ملی شما تنها برای ایجاد پرونده سلامت استفاده می‌شود و صرفاً جهت شناسایی دقیق بیمار است.
          اطلاعات شما محرمانه بوده و ممکن است در آینده برای استعلام بیمه نیز به‌کار رود.
        </span>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          نام و نام خانوادگی بیمار
        </label>
        <input
          type="text"
          id="name"
          placeholder="نام بیمار"
          className="placeholder:text-sm placeholder:text-neutral-200 outline-none rounded-primary-1 border px-4 py-2 border-neutral-200"
        />
      </div>
      <div className="w-full space-y-2">
        <label className="text-sm font-medium">جنسیت را مشخص کنید</label>
        <div className="w-full flex items-center gap-6">
          <div className="flex items-center gap-2">
            <input
              checked={gender === "men"}
              type="radio"
              name="gender"
              onChange={() => setGender("men")}
            />
            <label htmlFor="true" className="text-sm">
              مرد
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              checked={gender === "women"}
              type="radio"
              name="gender"
              onChange={() => setGender("women")}
            />
            <label htmlFor="false" className="text-sm">
              زن
            </label>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          سن بیمار
        </label>
        <input
          type="number"
          id="age"
          placeholder="سن بیمار"
          className="placeholder:text-sm placeholder:text-neutral-200 outline-none rounded-primary-1 border px-4 py-2 border-neutral-200"
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          شماره تماس
        </label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="شماره تماس"
          className="placeholder:text-sm placeholder:text-neutral-200 outline-none rounded-primary-1 border px-4 py-2 border-neutral-200"
        />
      </div>
      <div className="w-full flex items-center gap-4">
        <button className="flex-1 text-sm font-medium py-4  rounded-primary-1 text-neutral-0 bg-primary-500">
          تایید
        </button>
        <button className="flex-1 text-sm font-medium py-4  rounded-primary-1 text-tertiary-500 border border-tertiary-500">
          انصراف
        </button>
      </div>
    </form>
  );
}
