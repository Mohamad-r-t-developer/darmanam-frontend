"use client";
import Map from "@/components/Map";
import { useAddAddress } from "@/hooks/useAddress";
import { addAddressSchema } from "@/schemas/PatientSchema";
import { PatientAddressValues } from "@/types/addressTypes";
import RHFTextareaField from "@/ui/RHFTextareaField";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function AddAddressForm() {
  const pathName = usePathname();
  const router = useRouter();
  const { mutateAsync: addAddress } = useAddAddress();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<PatientAddressValues>({ mode: "onChange", resolver: yupResolver(addAddressSchema) });

  const onSubmit = async (values: PatientAddressValues) => {
    try {
      const data = await addAddress(values);
      toast.success(data.message);
      router.push(`/patient/${pathName.split("/")[2]}/address-list`);
    } catch (error) {
      console.log(error);
    }
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
        name="fullAddress"
        register={register}
        label="آدرس کامل"
        placeholder="لطفا از روی نقشه لوکیشن خود را انتخاب کنید"
        note="در صورت مغایرت آدرس را اصلاح کنید"
        error={errors.fullAddress}
      />
      <RHFTextField
        name="addressDetails"
        register={register}
        label="جزئیات آدرس"
        placeholder="به طور مثال پلاک ، واحد ، بلوک"
        error={errors.addressDetails}
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
