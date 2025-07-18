import { useRef, useState } from "react";
import { Controller, Control, Path, FieldError, FieldValues } from "react-hook-form";

type RHFFileInputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  error?: FieldError;
  label?: string;
  description?: string;
};

export default function RHFFileInput<T extends FieldValues>({
  name,
  control,
  error,
  label = "آپلود فایل یا تصویر پزشکی",
  description = "آزمایشات / عکس از زخم و ....",
}: RHFFileInputProps<T>) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSelectedFile, setIsSelectedFile] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        validate: (value) => {
          if (!value || value.length === 0) {
            return "لطفاً حداقل یک فایل انتخاب کنید";
          }
          return true;
        },
      }}
      render={({ field }) => (
        <div className="w-full space-y-4">
          <label className="text-sm font-medium">{label}</label>
          <div className="w-full bg-neutral-100 rounded-primary-1 h-12 flex items-center justify-between">
            <span className="flex-1 text-center text-sm truncate text-neutral-300">
              {isSelectedFile ? "فایل‌ها انتخاب شدند" : "فایلی انتخاب نشده است"}
            </span>
            <button
              onClick={(e) => {
                e.preventDefault();
                fileInputRef.current?.click();
              }}
              className="h-full bg-primary-500 text-neutral-0 px-4 py-3 rounded-primary-1 font-medium text-sm"
            >
              انتخاب فایل
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setIsSelectedFile(true);
                  field.onChange(e.target.files); // اینجا فایل‌ها به فرم پاس داده می‌شن
                }
              }}
            />
          </div>
          {description && (
            <span className="text-[11px] text-neutral-300">{description}</span>
          )}
          {error && <span className="text-xs text-red-500">{error.message}</span>}
        </div>
      )}
    />
  );
}
