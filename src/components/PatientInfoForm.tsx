"use client";
import CenterModal from "@/ui/CenterModal";
import FileInput from "@/ui/FileInput";
import RadioInput from "@/ui/RadioInput";
import SelectInput from "@/ui/SelectInput";
import AddPatientForm from "app/patient/(requests)/requests/info/_/components/AddPatientForm";
import { useState } from "react";
import RequestPrice from "./RequestPrice";

export default function PatientInfoForm() {
  const persons = ["علی محمدی", "مریم کریمی", "نعیمه نظام دوست"];
  const [open, setOpen] = useState(false);
  const [selectedPesron, setSelectedPesson] = useState(persons[0]);
  const [drugAllergy, setDrugAllergy] = useState(false);
  const [foodAllergy, setFoodAllergy] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  const [gender, setGender] = useState<"men" | "women" | undefined>(undefined);
  const addHandler = () => {
    setOpen(true);
  };
  console.log(files);
  return (
    <div className="w-full">
      <form className="w-full flex flex-col gap-10 p-4">
        <CenterModal isOpen={open} title="اطلاعات بیمار جدید" onClose={() => setOpen(false)}>
          <AddPatientForm />
        </CenterModal>

        <SelectInput
          selected={selectedPesron}
          onSelect={(value) => setSelectedPesson(value)}
          options={persons}
          addHandler={addHandler}
          label="شخص بیمار را مشخص کنید"
          addTitle="افزودن بیمار جدید"
        />
        <RadioInput
          name="foodAllergy"
          label="آیا به غذایی حساسیت دارید؟"
          placeholder="توضیحات حساسیت غذایی"
          selected={foodAllergy}
          onSelected={(s) => setFoodAllergy(s)}
        />
        <RadioInput
          name="drugAllergy"
          label="آیا به دارویی حساسیت دارید؟"
          placeholder="توضیحات حساسیت دارویی"
          selected={drugAllergy}
          onSelected={(s) => setDrugAllergy(s)}
        />
        <div className="space-y-2">
          <label className="text-sm font-medium">شرح حال بیمار</label>
          <textarea className="w-full resize-none h-24 p-4 outline-none rounded-primary-1 border border-neutral-200" />
        </div>
        {/*  */}
        <FileInput onFilesSelected={setFiles} />
        <div className="w-full space-y-2">
          <label className="text-sm font-medium">جنسیت سفیر خود را مشخص کنید؟ (درصورت نیاز)</label>
          <div className="w-full flex items-center gap-6">
            <div className="flex items-center gap-2">
              <input
                checked={gender === "men"}
                type="radio"
                name="gender"
                onChange={() => setGender("men")}
              />
              <label htmlFor="true" className="text-sm">
                آقا
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                checked={gender === "women"}
                type="radio"
                name="gender"
                onChange={() => setGender("women")}
              />
              <label htmlFor="false" className="text-sm">
                خانم
              </label>
            </div>
          </div>
        </div>
      </form>
      <RequestPrice disabled={false} price={50000} href="/patient/requests/schedule" />
    </div>
  );
}
