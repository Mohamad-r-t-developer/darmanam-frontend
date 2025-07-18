"use client";
import { AnimatePresence, motion } from "motion/react";
import { Controller, Control, Path, FieldError, FieldValues } from "react-hook-form";

type RadioWithTextValue = {
  choice: boolean;
  text: string;
};

type RHFRadioWithTextareaProps<T extends FieldValues> = {
  label: string;
  placeholder: string;
  name: Path<T>;
  control: Control<T>;
  error?: FieldError;
};

export default function RHFRadioWithTextarea<T extends FieldValues>({
  label,
  placeholder,
  name,
  control,
  error,
}: RHFRadioWithTextareaProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ 
        validate: (value: RadioWithTextValue) => {
          if (value?.choice === undefined) return "این فیلد الزامی است";
          if (value.choice && (!value.text || value.text.trim() === "")) {
            return "توضیح الزامی است";
          }
          return true;
        }
      }}
      render={({ field }) => {
        const value: RadioWithTextValue = field.value || { choice: false, text: "" };

        const onChoiceChange = (choice: boolean) => {
          field.onChange({ ...value, choice });
        };

        const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
          field.onChange({ ...value, text: e.target.value });
        };

        return (
          <div className="w-full flex flex-col gap-4">
            <label className="text-sm font-medium">{label}</label>
            <div className="w-full flex items-center gap-6">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name={field.name}
                  checked={value.choice === true}
                  onChange={() => onChoiceChange(true)}
                />
                <label className="text-sm">بله</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name={field.name}
                  checked={value.choice === false}
                  onChange={() => onChoiceChange(false)}
                />
                <label className="text-sm">خیر</label>
              </div>
            </div>

            <AnimatePresence>
              {value.choice && (
                <motion.div
                  key={name}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 96, opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <textarea
                    placeholder={placeholder}
                    value={value.text}
                    onChange={onTextChange}
                    className="resize-none placeholder:text-neutral-200 text-sm w-full p-4 outline-none h-24 rounded-primary-1 border border-neutral-200"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {error && <span className="text-xs text-red-500">{error.message}</span>}
          </div>
        );
      }}
    />
  );
}
