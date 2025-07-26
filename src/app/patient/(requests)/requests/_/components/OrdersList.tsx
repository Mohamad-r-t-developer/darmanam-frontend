"use client";
import RequestPrice from "@/components/RequestPrice";
import SingleOrder from "./SingleOrder";
import { useService } from "@/providers/RequestProvider";

export default function OrdersList() {
  const { requestList } = useService();
  if (requestList?.length === 0)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <h3>شما هیچ درخواستی ندارید لطفا برای ثبت درخواست اقدام فرمایید</h3>
      </div>
    );
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-2 p-4">
        {requestList?.map((request) => <SingleOrder request={request} key={request.serviceId} />)}
      </div>
      <RequestPrice price={50000} />
    </div>
  );
}
