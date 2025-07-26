import { addPatientShema } from "@/schemas/PatientSchema";
import { AddPatientValues } from "@/types/patientTypes";
import RHFGenderRadioGroup from "@/ui/RHFGenderRadioGroup";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function AddPatientForm({ onClose }: { onClose: () => void }) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddPatientValues>({
    mode: "onChange",
    resolver: yupResolver(addPatientShema),
    defaultValues: {
      gender: "MALE",
    },
  });

  const SubmitHandler = (data: AddPatientValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(SubmitHandler)} className="w-full space-y-4">
      <RHFTextField
        name="nationalCode"
        register={register}
        error={errors.nationalCode}
        label="کد ملی بیمار را وارد کنید"
        placeholder="کد ملی"
        note="کد ملی شما تنها برای ایجاد پرونده سلامت استفاده می‌شود و صرفاً جهت شناسایی دقیق بیمار است.اطلاعات شما محرمانه بوده و ممکن است در آینده برای استعلام بیمه نیز به‌کار رود."
      />
      <RHFTextField
        name="fullName"
        register={register}
        error={errors.fullName}
        label="نام و نام خانوادگی"
        placeholder="نام بیمار"
      />
      <RHFGenderRadioGroup
        label="جنسیت بیمار را مشخص کنید"
        name="gender"
        control={control}
        error={errors.gender}
      />
      <RHFTextField
        register={register}
        type="number"
        error={errors.age}
        name="age"
        label="سن بیمار را مشخص کنید"
        placeholder="سن بیمار"
      />
      <RHFTextField
        register={register}
        error={errors.phoneNumber}
        name="phoneNumber"
        label="شماره تماس بیمار را وارد کنید"
        placeholder="شماره تماس"
      />
      <div className="w-full flex items-center gap-4">
        <button
          type="submit"
          className="flex-1 text-sm font-medium py-4  rounded-primary-1 text-neutral-0 bg-primary-500"
        >
          افزودن
        </button>
        <button
          onClick={onClose}
          type="button"
          className="flex-1 text-sm font-medium py-4  rounded-primary-1 text-tertiary-500 border border-tertiary-500"
        >
          انصراف
        </button>
      </div>
    </form>
  );
}
