"use client";
import SingleAddress from "@/components/SingleAddress";
import { useAddress, useDeleteAddress } from "@/hooks/useAddress";
import { GetAddressType } from "@/types/addressTypes";
import CenterModal from "@/ui/CenterModal";
import { AddRoundedSvg } from "@/ui/icon";
import Loading from "@/ui/Loading";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AddressList() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { data, isLoading } = useAddress();
  const { mutateAsync } = useDeleteAddress();

  const deleteHandler = async () => {
    if (selectedId) await mutateAsync(selectedId);
    setIsOpen(false);
  };

  if (isLoading) return <Loading />;
  const addressList = data?.data;
  const isEmpty = addressList?.length === 0;

  return (
    <div className="w-full h-full flex flex-col p-4">
      <CenterModal title="حذف آدرس" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="w-full flex flex-col gap-6">
          <h3>آیا از حذف آدرس مورد نظر اطمینان دارید؟</h3>
          <div className="w-full flex items-center gap-4 px-4">
            <button
              onClick={() => deleteHandler()}
              className="flex-1 border-2 rounded-primary-2 py-1 text-tertiary-400 border-tertiary-400"
            >
              بلی
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 border-2 rounded-primary-2 py-1 text-secondary-400 border-secondary-400"
            >
              خیر
            </button>
          </div>
        </div>
      </CenterModal>
      {isEmpty ? (
        <div className="flex-1 w-full flex flex-col items-center justify-center gap-4">
          <h3 className="font-semibold">شما هیچ آدرسی ثبت نکرده اید</h3>
          <h4>لطفا با استفاده از گزینه افزودن ادرس ،ادرس جدید اضافه کنید</h4>
        </div>
      ) : (
        <div className="flex-1 w-full flex flex-col gap-2 overflow-y-auto scrollbar-hide">
          {addressList?.map((address: GetAddressType) => (
            <SingleAddress
              key={address._id}
              address={address}
              onDelete={() => {
                setSelectedId(address._id);
                setIsOpen(true);
              }}
            />
          ))}
        </div>
      )}
      <Link
        href={`${pathName.split("/")[2] === "profile" ? "/patient/profile/add-address" : "/patient/requests/add-address"}`}
        className="rounded-primary-1 bg-primary-500 py-3 text-sm text-neutral-0 flex items-center justify-center gap-2"
      >
        <AddRoundedSvg className="w-5 h-5" />
        <span>افزودن آدرس جدید</span>
      </Link>
    </div>
  );
}
