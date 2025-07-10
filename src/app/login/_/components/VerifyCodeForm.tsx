"use client";
import { useCountdownTimer } from "@/hooks/useCountdownTimer";
import { verifyCodeSchema } from "@/schemas/loginSchemas";
import { verifyCodeValues } from "@/types/loginTypes";
import { TimeSvg } from "@/ui/icon";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type VerifyCodeFormProps = {
  onSubmit: (data: verifyCodeValues) => void;
  setStep: React.Dispatch<React.SetStateAction<string>>;
};

export default function VerifyCodeForm({ onSubmit, setStep }: VerifyCodeFormProps) {
  const { formattedTime, isExpired } = useCountdownTimer(60, () => {
    toast.error("کد تایید منقصی شد ");
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<verifyCodeValues>({ mode: "onChange", resolver: yupResolver(verifyCodeSchema) });

  const SubmitHandler = (data: verifyCodeValues) => {
    onSubmit(data);
  };
  return (
    <form onSubmit={handleSubmit(SubmitHandler)} className="w-full">
      <div className="w-full relative mb-4 flex flex-col">
        <div className="absolute bottom-2 left-2 border-r flex items-center justify-center gap-2 text-neutral-200 border-r-neutral-200 w-20">
          {formattedTime}
          <TimeSvg className="w-5 h-5" />
        </div>
        <label className="mb-2" htmlFor="otp">
          کد تایید ارسالی را وارد کنید
        </label>
        <input
          {...register("otp")}
          id="otp"
          dir="ltr"
          type="tel"
          className={`${errors.otp?.message ? "border-red-500" : "border-neutral-200"}  pl-24 text-neutral-500 outline-none border  rounded-primary-2 p-2`}
        />
      </div>
      <div className="w-full text-[11px] flex items-center justify-between mb-6">
        <button onClick={()=>setStep("sendCode")} className="text-primary-500">تغییر شماره همراه</button>
        <button disabled={!isExpired} className="disabled:text-tertiary-100 text-tertiary-500">
          ارسال دوباره کد
        </button>
      </div>
      <div className="w-full flex justify-center">
        <button
          type="submit"
          disabled={!isValid}
          className={`disabled:bg-primary-150 bg-primary-500 disabled:cursor-not-allowed  rounded-primary-2 text-neutral-100 w-full py-4 transition-colors duration-200`}
        >
          تایید
        </button>
      </div>
    </form>
  );
}
