import { FieldError, UseFormRegister, Path, FieldValues } from "react-hook-form";

type RHFTextareaFieldProps<T extends FieldValues> = {
  label: string;
  placeholder: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
  note?: string;
};

export default function RHFTextareaField<T extends FieldValues>({
  label,
  placeholder,
  name,
  register,
  note,
  error,
}: RHFTextareaFieldProps<T>) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        {...register(name)}
        placeholder={placeholder}
        className={`w-full resize-none h-24 p-4 outline-none rounded-primary-1 border placeholder:text-sm placeholder:text-neutral-200 ${
          error ? "border-red-500" : "border-neutral-200"
        }`}
      />
      <span className="text-xs text-neutral-400">{note}</span>
      {error && <span className="text-xs text-red-500">{error.message}</span>}
    </div>
  );
}
