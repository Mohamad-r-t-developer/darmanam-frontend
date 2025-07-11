import { useState } from "react";
import RequestCost from "./RequestCost";

type SubServiceProps = {
  onClick: () => void;
};

export default function SutureFields({ onClick }: SubServiceProps) {
  const [selectedField, setSelectedField] = useState<string>("");
  const sutureFields = ["دست", "پا", "صورت"];

  return (
    <div className="w-full flex flex-col gap-4 text-neutral-500">
      <h3 className="font-medium">نواحی بخیه پوستی را مشخص کنید</h3>
      <div
        className="grid grid-cols-3 gap-2 text-sm"
        style={{ gridTemplateRows: "repeat(1, 56px)" }}
      >
        {sutureFields.map((field) => (
          <div
            key={field}
            onClick={() => setSelectedField((prev) => (prev === field ? "" : field))}
            className={`${selectedField == field ? "bg-secondary-400 text-neutral-0" : ""} cursor-pointer border border-neutral-200 rounded-primary-2 flex items-center justify-center`}
          >
            {field}
          </div>
        ))}
      </div>
      <RequestCost />
      <button
        type="submit"
        onClick={onClick}
        disabled={selectedField === ""}
        className="h-12 rounded-primary-2 w-full disabled:bg-primary-50 bg-primary-500 text-[13px] font-semibold text-neutral-0"
      >
        افزودن به سبد درخواست ها
      </button>
    </div>
  );
}