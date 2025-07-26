import { Controller, Control, FieldError, Path, FieldValues } from "react-hook-form";

type RHFGenderRadioGroupProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  error?: FieldError;
  label: string;
};

export default function RHFGenderRadioGroup<T extends FieldValues>({
  control,
  name,
  error,
  label,
}: RHFGenderRadioGroupProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: "جنسیت الزامی است" }}
      render={({ field }) => (
        <div className="w-full space-y-2">
          <label className="text-sm font-medium">{label}</label>
          <div className="w-full flex items-center gap-6">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                value="MALE"
                checked={field.value === "MALE"}
                onChange={field.onChange}
              />
              <label className="text-sm">مرد</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                value="FEMALE"
                checked={field.value === "FEMALE"}
                onChange={field.onChange}
              />
              <label className="text-sm">زن</label>
            </div>
          </div>
          {error && <span className="text-xs text-red-500">{error.message}</span>}
        </div>
      )}
    />
  );
}
