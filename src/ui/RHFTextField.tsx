import { FieldError, UseFormRegister, Path, FieldValues } from "react-hook-form";

type RHFTextFieldProps<T extends FieldValues> = {
  label: string;
  placeholder?: string;
  note?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
  type?: React.HTMLInputTypeAttribute;
  dir?: "rtl" | "ltr";
  autoComplete?: string;
};

export default function RHFTextField<T extends FieldValues>({
  label,
  placeholder,
  note,
  error,
  dir = "rtl",
  register,
  name,
  type = "text",
  autoComplete = "off",
}: RHFTextFieldProps<T>) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        dir={dir}
        id={name}
        {...register(name)}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`outline-none text-sm placeholder:text-sm border px-4 py-3 rounded-primary-1 placeholder:text-neutral-200 ${
          error ? "border-red-500" : "border-neutral-200"
        }`}
      />
      {note && <span className="text-[9px] text-neutral-500">{note}</span>}
      {error && <span className="text-[10px] text-red-500">{error.message}</span>}
    </div>
  );
}
