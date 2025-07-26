"use client";
import CenterModal from "@/ui/CenterModal";
import SelectInput from "@/ui/SelectInput";
import AddPatientForm from "app/patient/(requests)/requests/info/_/components/AddPatientForm";
import { useState } from "react";
import RequestPrice from "./RequestPrice";
import RHFTextareaField from "@/ui/RHFTextareaField";
import { useForm } from "react-hook-form";
import { patientInfoSchema } from "@/schemas/PatientSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFRadioWithTextarea from "@/ui/RHFRadioWithTextarea";
import RHFGenderRadioGroup from "@/ui/RHFGenderRadioGroup";
import RHFTextField from "@/ui/RHFTextField";
import RHFFileInput from "@/ui/RHFFileInput";
import { PatientInfoValues } from "@/types/patientTypes";

export default function PatientInfoForm() {
  const persons = ["خودم"];
  const [open, setOpen] = useState(false);
  const [selectedPesron, setSelectedPesson] = useState(persons[0]);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PatientInfoValues>({
    mode: "onChange",
    resolver: yupResolver(patientInfoSchema),
    defaultValues: {
      foodAllergy: {
        choice: false,
        text: "",
      },
      drugAllergy: {
        choice: false,
        text: "",
      },
    },
  });

  //
  const addHandler = () => {
    setOpen(true);
  };

  const submitHandler = (data: PatientInfoValues) => {
    console.log(data);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full">
      <CenterModal isOpen={open} title="اطلاعات بیمار جدید" onClose={onClose}>
        <AddPatientForm onClose={onClose} />
      </CenterModal>
      <form onSubmit={handleSubmit(submitHandler)} className="w-full">
        <div className="w-full flex flex-col gap-8 p-4">
          <SelectInput
            selected={selectedPesron}
            onSelect={(value) => setSelectedPesson(value)}
            options={persons}
            addHandler={addHandler}
            label="شخص بیمار را مشخص کنید"
            addTitle="افزودن بیمار جدید"
          />
          <RHFTextField
            name="nationalCode"
            register={register}
            error={errors.nationalCode}
            label="کد ملی بیمار را وارد کنید"
            placeholder="کد ملی"
            note="کد ملی شما تنها برای ایجاد پرونده سلامت استفاده می‌شود و صرفاً جهت شناسایی دقیق بیمار است.اطلاعات شما محرمانه بوده و ممکن است در آینده برای استعلام بیمه نیز به‌کار رود."
          />
          <RHFTextField
            error={errors.fullName}
            label="نام و نام خانوادگی بیمار"
            name="fullName"
            placeholder="نام بیمار"
            register={register}
          />
          <RHFGenderRadioGroup
            label="جنسیت بیمار را مشخص کنید"
            error={errors.gender}
            name="gender"
            control={control}
          />
          <RHFTextField
            register={register}
            type="number"
            error={errors.age}
            name="age"
            label="سن بیمار را مشخص کنید"
            placeholder="سن بیمار"
          />

          <RHFRadioWithTextarea
            placeholder="توضیحات حساسیت غذایی"
            name="foodAllergy"
            control={control}
            label="آیا به غذایی حساسیت دارید؟"
          />
          <RHFRadioWithTextarea
            placeholder="توضیحات حساسیت دارویی"
            name="drugAllergy"
            control={control}
            label="آیا به دارویی حساسیت دارید؟"
          />

          <RHFTextareaField
            register={register}
            name="patientHistory"
            label="شرح حال بیمار"
            placeholder="شرح حال بیمار (اختیاری اما توصیه شده)"
          />
          <RHFFileInput error={errors.medicalFiles} name="medicalFiles" control={control} />
          <RHFGenderRadioGroup
            label="جنسیت سفیر خود را مشخص کنید؟ (درصورت نیاز)"
            control={control}
            name="gender"
            error={errors.gender}
          />
        </div>

        <RequestPrice disabled={!isValid} price={50000} />
      </form>
    </div>
  );
}
