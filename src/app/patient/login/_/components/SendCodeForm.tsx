"use client";

import { sendCodeSchema } from "@/schemas/loginSchemas";
import { sendCodeValues } from "@/types/loginTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";

type SendCodeFormProps = {
  onSubmit: (data: sendCodeValues) => void;
};

export default function SendCodeForm({ onSubmit }: SendCodeFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<sendCodeValues>({
    mode: "onChange",
    resolver: yupResolver(sendCodeSchema),
  });

  const SubmitHandler = (data: sendCodeValues) => {
    // add 0 befor phonenumber
    const formattedData = {
      ...data,
      phoneNumber: data.phoneNumber.startsWith("0") ? data.phoneNumber : "0" + data.phoneNumber,
    };

    onSubmit(formattedData);
  };

  return (
    <form onSubmit={handleSubmit(SubmitHandler)} className="w-full">
      <div className="relative flex flex-col mb-2">
        <span
          dir="ltr"
          className="absolute bottom-8 left-2 border-r text-neutral-200 border-r-neutral-200 px-2"
        >
          +98
        </span>
        <label className="mb-2" htmlFor="phoneNumber">
          شماره تماس
        </label>
        <input
          dir="ltr"
          {...register("phoneNumber")}
          id="phoneNumber"
          type="tel"
          className={`${errors.phoneNumber?.message ? "border-red-500" : "border-neutral-200"} pl-14 text-neutral-500 outline-none border-2  rounded-primary-2 p-2`}
        />
        <span className="text-[9px] mt-2 text-red-500 h-4 block">
          {errors.phoneNumber?.message}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" {...register("terms")} className="bg-primary-500 rounded" />
        <span className="text-[10px] text-neutral-500">
          <Link href="#" className="text-primary-500">
            قوانین و مقررات
          </Link>{" "}
          درمانم را میپذیرم
        </span>
      </div>
      <span className="text-[9px] mt-2 text-red-500 h-5 block">{errors.terms?.message}</span>
      <div className="w-full flex justify-center">
        <button
          type="submit"
          disabled={!isValid}
          className={`disabled:bg-primary-150 bg-primary-500 disabled:cursor-not-allowed  rounded-primary-2 text-neutral-100 w-full py-4 transition-colors duration-200`}
        >
          دریافت کد تایید
        </button>
      </div>
    </form>
  );
}
