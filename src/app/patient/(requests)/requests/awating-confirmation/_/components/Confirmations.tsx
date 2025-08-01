"use client";
import { useState } from "react";
import FoundedNurse from "./FoundedNurse";
import PendingRequest from "./PendingRequest";
import { RequestStatusType } from "@/types/requestTypes";

export default function Confirmations() {
  const [requestStatus, _setRequestStaus] = useState<RequestStatusType>("notfound");
  return (
    <>
      {requestStatus === "founded" ? (
        <FoundedNurse status={requestStatus} />
      ) : (
        <PendingRequest status={requestStatus} />
      )}
    </>
  );
}
