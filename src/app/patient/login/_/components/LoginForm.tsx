"use client";

import { useState } from "react";
import SendCodeForm from "./SendCodeForm";
import VerifyCodeForm from "./VerifyCodeForm";
import { useMutation } from "@tanstack/react-query";
import { sendCodeValues, verifyCodeValues } from "@/types/loginTypes";
import { useRouter } from "next/navigation";
import { LogoSvg } from "@/ui/icon";
import { requestOTPApi, verifyOTPApi } from "@/services/authService";

export default function LoginForm() {
  const [step, setStep] = useState<string>("sendCode");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const { mutateAsync: mutateVerifyOTP, isPending: isPending_verify } = useMutation({
    mutationFn: verifyOTPApi,
  });
  const { mutateAsync: mutateGetOTP, isPending: isPending_check } = useMutation({
    mutationFn: requestOTPApi,
  });

  const sendOTPHandler = async (info: sendCodeValues) => {
    setPhoneNumber(info.phoneNumber);
    try {
      const _data = await mutateGetOTP({ phoneNumber: info.phoneNumber, role: "PATIENT" });
      setStep("verifyCode");
    } catch (error) {
      console.log(error);
    }
  };
  const verifyOTPHandler = async (info: verifyCodeValues) => {
    try {
      const data = await mutateVerifyOTP({ phoneNumber, otp: info.otp });
      if (data) router.push("/patient/services");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`absolute w-[80%] rounded-primary-1 bg-neutral-0 left-[50%] -translate-x-[50%] top-[330px] `}
    >
      <div className="w-full flex flex-col p-4">
        <div className="w-full flex items-center justify-center mb-4">
          <LogoSvg className="w-20" />
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
