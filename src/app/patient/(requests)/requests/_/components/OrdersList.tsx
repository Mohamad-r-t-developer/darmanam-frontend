"use client";
import RequestPrice from "@/components/RequestPrice";
import SingleOrder from "./SingleOrder";

export default function OrdersList() {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-2 p-4">
        <SingleOrder />
        <SingleOrder />
      </div>
      <RequestPrice price={50000} />
    </div>
  );
}
