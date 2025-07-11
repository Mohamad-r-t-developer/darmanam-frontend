"use client";
import { IconType } from "@/types/iconType";
import { AddressSvg, DoctorGivingAdviceSvg, PurchaseOrderSvg, WalletSvg } from "@/ui/icon";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const pagesMap = [
  { title: "تکمیل اطلاعات", url: "info" },
  { title: "انتخاب آدرس و زمان", url: "schedule" },
];

type Steps = 0 | 1 | 2 | 3 | 4;
export default function RequestSteper({ step }: { step: Steps }) {
  const [currentStep, setCurrentStep] = useState<Steps>(0);

  useEffect(() => {
    setCurrentStep(step);
  }, [step]);

  return (
    <div className="w-full h-14 grid grid-cols-7  border-b border-neutral-200 gap-1 p-2 text-neutral-300">
      <SingleStep step={currentStep} activeStep={1} title="تکمیل اطلاعات" Icon={PurchaseOrderSvg} />
      <MiddleNav activeStep={2} step={currentStep} />
      <SingleStep step={currentStep} activeStep={2} title="انتخاب آدرس و زمان" Icon={AddressSvg} />
      <MiddleNav activeStep={3} step={currentStep} />
      <SingleStep
        step={currentStep}
        activeStep={3}
        title="تایید سفیر سلامت"
        Icon={DoctorGivingAdviceSvg}
      />
      <MiddleNav activeStep={4} step={currentStep} />
      <SingleStep step={currentStep} activeStep={4} title="پرداخت" Icon={WalletSvg} />
    </div>
  );
}

function SingleStep({
  activeStep,
  step,
  title,
  Icon,
}: {
  step: number;
  title: string;
  activeStep: number;
  Icon: IconType;
}) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        const page = pagesMap.find((p) => p.title === title);
        if (page) router.push(`/patient/requests/${page.url}`);
      }}
      className={`${step >= activeStep ? "text-secondary-400" : ""} flex flex-col cursor-pointer items-center justify-start gap-1`}
    >
      <Icon className="w-4 h-4" />
      <span className="text-[9px] text-center">{title}</span>
    </div>
  );
}

function MiddleNav({ activeStep, step }: { step: number; activeStep: number }) {
  return (
    <div
      className={`${step >= activeStep ? "text-secondary-400" : "text-neutral-200"} flex items-center justify-center `}
    >
      <div className="w-[30px] relative border border-current">
        <div className="absolute top-[50%] -translate-x-1/2 -translate-y-1/2 left-[50%] w-2 h-2 rounded-full bg-current"></div>
      </div>
    </div>
  );
}
