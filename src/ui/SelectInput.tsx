"use client"
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AddRoundedSvg, DropDownSvg } from "./icon";

type SelectInputProps = {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
  addHandler: () => void;
  label: string;
  addTitle: string;
};

export default function SelectInput({
  options,
  addHandler,
  label,
  selected,
  onSelect,
  addTitle,
}: SelectInputProps) {
  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const selectHandler = (person: string) => {
    if (person !== selected) {
      onSelect(person);
    }
    setOpen(false);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(false);
    addHandler();
  };

  // ⬇️ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="w-full h-20 relative" ref={containerRef}>
      <div className="absolute top-0 left-0 w-full flex flex-col gap-4 text-sm font-medium">
        <label htmlFor="patient">{label}</label>
        <div className="w-full border  bg-neutral-Pure_White border-neutral-200 shadow-primary-1 rounded-primary-1 flex flex-col relative">
          {/* trigger */}
          <div
            className={`${open ? "border-b" : "border-none"} h-12 border-neutral-200 transition-all duration-300 flex items-center px-4 justify-between cursor-pointer`}
            onClick={() => setOpen(!open)}
          >
            <span className="text-sm font-medium">{selected}</span>
            <DropDownSvg
              className={`w-5 h-5 text-neutral-300 transition-all duration-300 ${open ? "rotate-180" : "rotate-0"}`}
            />
          </div>

          {/* animated dropdown */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full flex flex-col overflow-hidden rounded-b-primary-1"
              >
                {options.map((person) => (
                  <span
                    key={person}
                    aria-selected="true"
                    role="option"
                    tabIndex={0}
                    onClick={() => selectHandler(person)}
                    className="py-2 flex items-center px-4 cursor-pointer hover:bg-neutral-200 transition"
                  >
                    {person}
                  </span>
                ))}
                <button
                  onClick={clickHandler}
                  className="h-12 px-4 border-t flex items-center gap-2 border-neutral-200 hover:bg-neutral-200 transition"
                >
                  <AddRoundedSvg className="w-5 h-5" />
                  <span>{addTitle}</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
