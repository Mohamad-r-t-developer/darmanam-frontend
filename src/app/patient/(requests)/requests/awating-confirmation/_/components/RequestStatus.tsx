"use client";
import { RequestStatusType } from "@/types/requestTypes";
import { DoctorGivingAdviceSvg } from "@/ui/icon";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type RequestStatusProps = {
  status: RequestStatusType;
};

export default function RequestStatus({ status }: RequestStatusProps) {
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    if (status === "notfound") {
      setIsRotating(false);
    } else {
      setIsRotating(true);
    }
  }, [status]);

  return (
    <div className="w-full flex flex-col gap-4 bg-neutral-Pure_White items-center justify-center h-36">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <motion.div
          animate={isRotating ? { rotate: 360 } : { rotate: 0 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
          className="absolute w-full h-full  rounded-full  bg-primary-50 border-t-4 border-primary-500"
        />
        <div className="z-50">
          <DoctorGivingAdviceSvg className="w-8 h-8" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <h3 className="font-medium">
          {status === "pending" ? "درخواست در انتظار تایید سفیر سلامت" : "سفیر مورد پیدا نشد!"}
        </h3>
        {status === "pending" ? (
          <div className="text-neutral-300 text-sm">
            <span>زمان انتظار :</span>
            <span> 15 دقیقه</span>
          </div>
        ) : (
          <button className="text-sm font-medium text-primary-500">تلاش دوباره</button>
        )}
      </div>
    </div>
  );
}
