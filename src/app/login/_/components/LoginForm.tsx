"use client";

import Image from "next/image";
import { useState } from "react";
import SendCodeForm from "./SendCodeForm";
import VerifyCodeForm from "./VerifyCodeForm";
import { sendCodeValues, verifyCodeValues } from "@/types/loginTypes";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [step, setStep] = useState<string>("sendCode");
  const router = useRouter();

  const sendOTPHandler = (data: sendCodeValues) => {
    console.log(data);
    setStep("verifyCode");
  };
  const verifyOTPHandler = (data: verifyCodeValues) => {
    console.log(data);
    router.push("/patient/services");
  };

  return (
    <div
      className={`absolute w-[80%] rounded-primary-1 bg-neutral-0 left-[50%] -translate-x-[50%] top-[330px] `}
    >
      <div className="w-full flex flex-col p-4">
        <div className="w-full flex items-center justify-center mb-4">
          <Image src="/icons/Logo.svg" alt="logo" width={77} height={96} />
        </div>
        {step === "sendCode" ? (
          <SendCodeForm onSubmit={sendOTPHandler} />
        ) : (
          <VerifyCodeForm onSubmit={verifyOTPHandler} setStep={setStep} />
        )}
      </div>
    </div>
  );
}
