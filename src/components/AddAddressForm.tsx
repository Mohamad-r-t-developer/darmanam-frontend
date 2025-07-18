"use client";
import Map from "@/components/Map";
import { addAddressSchema } from "@/schemas/PatientSchema";
import { PatientAddressValues } from "@/types/patientTypes";
import RHFTextareaField from "@/ui/RHFTextareaField";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function AddAddressForm() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<PatientAddressValues>({ mode: "onChange", resolver: yupResolver(addAddressSchema) });

  const onSubmit = (data: PatientAddressValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-6 items-center">
      <Map setValue={setValue} />
      <span className="text-xs">لطفا از روی نقشه لوکیشن خود را انتخاب کنید</span>
      <RHFTextField
        name="title"
        label="عنوان آدرس"
        register={register}
        placeholder="به طور مثال خانه"
        error={errors.title}
      />
      <RHFTextareaField
        name="address"
        register={register}
        label="آدرس کامل"
        placeholder="لطفا از روی نقشه لوکیشن خود را انتخاب کنید"
        note="در صورت مغایرت آدرس را اصلاح کنید"
        error={errors.address}
      />

      <RHFTextField
        name="addressDetail"
        register={register}
        label="جزئیات آدرس"
        placeholder="به طور مثال پلاک ، واحد ، بلوک"
        error={errors.addressDetail}
      />
      <button
        disabled={!isValid}
        type="submit"
        className="w-full disabled:bg-primary-200 bg-primary-500 text-neutral-Pure_White py-2 rounded-primary-1"
      >
        ثبت آدرس
      </button>
    </form>
  );
}
