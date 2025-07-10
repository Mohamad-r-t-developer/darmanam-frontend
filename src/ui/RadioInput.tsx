"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type RadioInputProps = {
  label: string;
  placeholder: string;
  selected: boolean;
  onSelected: (value: boolean) => void;
  name: string;
};

export default function RadioInput({
  label,
  selected,
  placeholder,
  onSelected,
  name,
}: RadioInputProps) {
  const [open, setOpen] = useState(selected);

  useEffect(() => {
    setOpen(selected);
  }, [selected]);

  return (
    <div className="w-full flex flex-col gap-4">
      <label className="text-sm font-medium">{label}</label>
      <div className="w-full flex items-center gap-6">
        <div className="flex items-center gap-2">
          <input checked={selected} type="radio" name={name} onChange={() => onSelected(true)} />
          <label htmlFor="true" className="text-sm">
            بله
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input checked={!selected} type="radio" name={name} onChange={() => onSelected(false)} />
          <label htmlFor="false" className="text-sm">
            خیر
          </label>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            key={label}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 96, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <textarea
              placeholder={placeholder}
              className="resize-none placeholder:text-neutral-200 text-sm w-full p-4 outline-none h-24 rounded-primary-1 border border-neutral-200"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
