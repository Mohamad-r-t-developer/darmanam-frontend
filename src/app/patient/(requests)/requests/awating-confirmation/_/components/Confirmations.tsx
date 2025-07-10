"use client";
import { useState } from "react";
import FoundedNurse from "./FoundedNurse";
import PendingRequest from "./PendingRequest";
import { RequestStatusType } from "@/types/requestStatusType";




export default function Confirmations() {
  const [requestStatus, _setRequestStaus] = useState<RequestStatusType>("founded");
  return (
    <>
      {requestStatus === "founded" ? <FoundedNurse status={requestStatus}  /> : <PendingRequest status={requestStatus} />}
    </>
  );
}
