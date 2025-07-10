"use client"
import { BankCardsSvg, PayCashSvg } from "@/ui/icon";
import { useState } from "react";


export default function PaymentMethode() {
  const [paymentMethode, setPaymentMethode] = useState<"cash" | "online">("online");
  return (
    <div className="w-full p-4 flex flex-col gap-4 bg-neutral-Pure_White">
      <label htmlFor="">نوع پرداخت را مشخص کنید</label>
      <div className="w-full flex items-center text-sm font-medium justify-center gap-2 text-neutral-200">
        <button
          onClick={() => setPaymentMethode("cash")}
          className={`${paymentMethode === "cash" ? "bg-secondary-400 text-neutral-0" : ""} flex-1 transition-all border border-neutral-200 duration-300 ease-in-out rounded-primary-1  flex items-center justify-center gap-2 h-12 `}
        >
          <PayCashSvg className="size-5" />
          <span>پرداخت نقدی</span>
        </button>
        <button
          onClick={() => setPaymentMethode("online")}
          className={`${paymentMethode === "online" ? "bg-secondary-400 text-neutral-0" : ""} flex-1 transition-all border border-neutral-200 duration-300 ease-in-out rounded-primary-1  flex items-center justify-center gap-2 h-12 `}
        >
          <BankCardsSvg className="size-5" />
          <span>پرداخت آنلاین</span>
        </button>
      </div>
    </div>
  );
}
