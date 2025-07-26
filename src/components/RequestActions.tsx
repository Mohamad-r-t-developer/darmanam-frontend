"use client";
import CenterModal from "@/ui/CenterModal";
import { useState } from "react";
import RequestCancelForm from "../app/patient/(requests)/requests/awating-confirmation/_/components/RequestCancelForm";
import { RequestStatusType } from "@/types/requestTypes";
import { NurseStatusType } from "@/types/nurseStatusype";
import { useRouter } from "next/navigation";

type RequestActionProps = {
  requestStatus: RequestStatusType;
  nurseStatus: NurseStatusType;
};

export default function RequestActions({ requestStatus, nurseStatus }: RequestActionProps) {
  const [isOpen, setIsopen] = useState<boolean>(false);
  const router = useRouter();
  const disabled = nurseStatus === "on-the-way" || nurseStatus === "in-progress";
  const isCancelDisable = nurseStatus === "finish" || nurseStatus === "in-progress";
  return (
    <>
      <CenterModal isOpen={isOpen} title="لغو درخواست" onClose={() => setIsopen(false)}>
        <RequestCancelForm />
      </CenterModal>
      <div className="fixed max-w-screen-xs m-auto bottom-16 h-14 w-full text-sm font-medium flex items-center justify-center gap-2 p-4 bg-neutral-100">
        {requestStatus === "pending" ? (
          <button className="text-primary-500 flex-1">ویرایش درخواست</button>
        ) : (
          <button
            onClick={() => router.push("/patient/requests/payment-summary")}
            disabled={disabled}
            className="flex-1 disabled:bg-primary-200 disabled:text-2xs bg-primary-500 text-neutral-0 rounded-primary-1 py-3 flex items-center justify-center"
          >
            {disabled ? "پس از اتمام کار پرستار گزینه پرداخت فعال می شود" : "صفحه پرداخت"}
          </button>
        )}
        <button
          onClick={() => setIsopen(true)}
          className={`text-tertiary-500 ${isCancelDisable ? "hidden" : ""} ${requestStatus === "pending" ? "text-sm flex-1" : "text-xs px-4"}`}
        >
          لغو درخواست
        </button>
      </div>
    </>
  );
}
