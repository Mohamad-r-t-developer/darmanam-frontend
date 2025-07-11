import { AddSvg, MinusSvg } from "@/ui/icon";
import ToggleSwitch from "@/ui/ToggleSwitch";
import { useEffect, useState } from "react";
import RequestCost from "./RequestCost";

export default function WondFields({
  fieldTitle,
  onClick,
  countStep,
}: {
  fieldTitle: string;
  onClick: () => void;
  countStep: number;
}) {


  // 
  useEffect(() => {
    setWoundSize(countStep);
  }, [countStep]);

  // 
  const step = countStep || 1;
  const [woundSize, setWoundSize] = useState(step);
  const [needingDressingSupplies, setNeedingDressingSupplies] = useState(false);

  // 
  const increase = () => {
    if (woundSize < 200) setWoundSize((prev) => prev + step);
  };

  // 
  const decrease = () => {
    if (woundSize > step) setWoundSize((prev) => prev - step);
  };

  return (
    <div className="w-full flex flex-col gap-4 text-neutral-500">
      <div className="w-full flex items-center justify-between text-sm font-medium">
        <label htmlFor="ampoules">{`میزان ${fieldTitle} را مشخص کنید`}</label>
        <div className="flex items-center justify-center gap-2 py-2 border border-neutral-200 rounded-primary-2">
          <button onClick={increase} type="button" className="px-2">
            <AddSvg className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1">
            <span>cm</span>
            <span>{woundSize}</span>
          </div>
          <button onClick={decrease} type="button" className="px-2 ">
            <MinusSvg className="w-5 h-5" />
          </button>
        </div>
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
        disabled={woundSize === 0}
        className="h-12 rounded-primary-2 w-full disabled:bg-primary-50 bg-primary-500 text-[13px] font-semibold text-neutral-0"
      >
        افزودن به سبد درخواست ها
      </button>
    </div>
  );
}
