import ToggleSwitch from "@/ui/ToggleSwitch";
import { useState } from "react";
import RequestCost from "./RequestCost";

type SubServiceProps = {
  onClick: () => void;
};

export default function BurnFields({ onClick }: SubServiceProps) {
  const [selectedField, setSelectedField] = useState<string[]>([]);
  const [needingDressingSupplies, setNeedingDressingSupplies] = useState(false);
  const burnFields = ["سر", "یک دست", "دو دست", "یک پا", "دو پا", "قفسه سینه", "شکم", "صورت"];

  return (
    <div className="w-full flex flex-col gap-4 text-neutral-500">
      <h3 className="font-medium">نواحی سوختگی را مشخص کنید</h3>
      <div
        className="grid grid-cols-4 gap-2 text-sm border-b pb-4"
        style={{ gridTemplateRows: "repeat(2, 56px)" }}
      >
        {burnFields.map((field) => (
          <div
            key={field}
            onClick={() => {
              if (selectedField.includes(field)) {
                setSelectedField(selectedField.filter((f) => f !== field));
              } else {
                setSelectedField([...selectedField, field]);
              }
            }}
            className={`${selectedField.includes(field) ? "bg-secondary-400 text-neutral-0" : ""} cursor-pointer border border-neutral-200 rounded-primary-2 flex items-center justify-center`}
          >
            {field}
          </div>
        ))}
      </div>
      <div className="w-full">
        <ToggleSwitch
          initialChecked={false}
          label="لوازم پانسمان احتیاج دارم"
          onChange={() => setNeedingDressingSupplies(!needingDressingSupplies)}
        />
      </div>
      {needingDressingSupplies && (
        <div className="w-full">
          <textarea
            placeholder="لوازم مورد نیاز"
            className="outline-none text-sm placeholder:text-neutral-200 placeholder:text-sm resize-none w-full h-24 focus:border-primary-500  p-4 border border-neutral-200 rounded-primary-1"
          ></textarea>
        </div>
      )}
      <RequestCost />
      <button
        type="submit"
        onClick={onClick}
        disabled={selectedField.length === 0}
        className="h-12 rounded-primary-2 disabled:bg-primary-50 w-full bg-primary-500 text-[13px] font-semibold text-neutral-0"
      >
        افزودن به سبد درخواست ها
      </button>
    </div>
  );
}
